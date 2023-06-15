const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const tokenAddresses = require('../../../lib/data/addresses.json')

const { UI_DATA_FILES, CHAIN_IDS } = require('../../../lib/constants')
const { getUIData } = require('../../../lib/data')
const { cache } = require('../../../lib/cache')

const { idleLendingToken, idleController } = require('../../../lib/web3/contracts')
const { getTokenPrice } = require('../../../prices')

const getApy = async (tokenSymbol, idleLendingTokenAddress, factor, network = '1') => {
  const cachedApy = cache.get(`idleApy${tokenSymbol}`)

  if (cachedApy) {
    return cachedApy
  }

  const tokens = await getUIData(UI_DATA_FILES.TOKENS)

  const selectedWeb3 = getWeb3(network)

  const {
    methods: { getTotalSupply, getVirtualPrice, getAvgAPR },
    contract: { abi: idleLendingTokenAbi },
  } = idleLendingToken

  const idleLendingTokenInstance = new selectedWeb3.eth.Contract(
    idleLendingTokenAbi,
    idleLendingTokenAddress,
  )

  let currentRate, rewardTokenInUsd

  if (network == CHAIN_IDS.ETH) {
    const {
      contract: {
        abi: idleControllerAbi,
        address: { mainnet: idleControllerAddress },
      },
      methods: idleControllerMethods,
    } = idleController

    const idleControllerInstance = new selectedWeb3.eth.Contract(
      idleControllerAbi,
      idleControllerAddress,
    )

    currentRate = new BigNumber(
      await idleControllerMethods.idleSpeeds(idleLendingTokenAddress, idleControllerInstance),
    )
      .multipliedBy(7200)
      .multipliedBy(365.25) // blocks per year
      .dividedBy(new BigNumber(10).exponentiatedBy(18))

    rewardTokenInUsd = new BigNumber(await getTokenPrice(tokenAddresses.IDLE))
  } else if (network == CHAIN_IDS.POLYGON) {
    //Will add this implemenation later, it represents a tiny part of the APY.
    currentRate = new BigNumber(0)
    rewardTokenInUsd = new BigNumber(0)
  }

  const totalSupply = new BigNumber(await getTotalSupply(idleLendingTokenInstance))

  const tokenPrice = new BigNumber(await getTokenPrice(tokenSymbol))

  const totalSupplyInUsd = totalSupply
    .dividedBy(new BigNumber(10).exponentiatedBy(18))
    .times(tokenPrice)

  const virtualPrice = new BigNumber(await getVirtualPrice(idleLendingTokenInstance)).dividedBy(
    new BigNumber(10).exponentiatedBy(tokens[tokenSymbol].decimals),
  )

  let basicApy = currentRate
    .multipliedBy(rewardTokenInUsd)
    .dividedBy(totalSupplyInUsd)
    .dividedBy(virtualPrice)
    .multipliedBy(100) // 100%

  const lendApy = new BigNumber(await getAvgAPR(idleLendingTokenInstance)).div(1e18)

  const result = basicApy.multipliedBy(factor).plus(lendApy).toString()

  cache.set(`idleApy${tokenSymbol}`, result)
  return result
}

module.exports = {
  getApy,
}
