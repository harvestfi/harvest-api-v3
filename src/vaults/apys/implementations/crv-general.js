const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const { CHAIN_IDS } = require('../../../lib/constants')
const { crv, crvGauge, crvController } = require('../../../lib/web3/contracts')
const tokenAddresses = require('../../../lib/data/addresses.json')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getApy = async (
  tokenSymbol,
  gaugeAddress,
  swapAddress,
  factor,
  chain = CHAIN_IDS.ETH,
  rootChainGaugeAddress,
) => {
  const web3Eth = getWeb3(CHAIN_IDS.ETH)
  let web3Polygon
  if (chain != CHAIN_IDS.ETH) {
    web3Polygon = getWeb3(CHAIN_IDS.POLYGON)
  }

  const {
    contract: { abi: crvAbi },
    methods: { getRate },
  } = crv

  const {
    contract: {
      abi: crvControllerAbi,
      address: { mainnet: crvControllerAddress },
    },
    methods: crvControllerMethods,
  } = crvController

  const {
    contract: { abi: crvGaugeAbi },
    methods: crvGaugeMethods,
  } = crvGauge

  const rewardTokenInstance = getCachedContract({
    web3: web3Eth,
    abi: crvAbi,
    address: tokenAddresses.CRV,
  })
  const crvControllerInstance = getCachedContract({
    web3: web3Eth,
    abi: crvControllerAbi,
    address: crvControllerAddress,
  })

  let gaugeInstance, weight
  if (chain == CHAIN_IDS.ETH) {
    gaugeInstance = getCachedContract({
      web3: web3Eth,
      abi: crvGaugeAbi,
      address: gaugeAddress,
    })
    weight = new BigNumber(
      await crvControllerMethods.getGaugeRelativeWeight(gaugeAddress, crvControllerInstance),
    ).dividedBy(new BigNumber(10).exponentiatedBy(18))
  } else {
    gaugeInstance = getCachedContract({
      web3: web3Polygon,
      abi: crvGaugeAbi,
      address: gaugeAddress,
    })
    weight = new BigNumber(
      await crvControllerMethods.getGaugeRelativeWeight(
        rootChainGaugeAddress,
        crvControllerInstance,
      ),
    ).dividedBy(new BigNumber(10).exponentiatedBy(18))
  }

  const currentRate = new BigNumber(await getRate(rewardTokenInstance))
    .multipliedBy(365.25 * 86400)
    .dividedBy(new BigNumber(10).exponentiatedBy(18))

  const rewardTokenInUsd = await getTokenPrice(tokenAddresses.CRV)

  const totalSupply = new BigNumber(await crvGaugeMethods.getTotalSupply(gaugeInstance))

  const lpTokenPrice = new BigNumber(await getTokenPrice(tokenSymbol, chain))

  const totalSupplyInUsd = totalSupply
    .dividedBy(new BigNumber(10).exponentiatedBy(18))
    .times(lpTokenPrice)

  let apy = currentRate
    .multipliedBy(rewardTokenInUsd)
    .multipliedBy(weight)
    .dividedBy(totalSupplyInUsd)
    .multipliedBy(100) // 100%

  const result = apy.multipliedBy(factor).toFixed(2, 1)
  return result
}

module.exports = {
  getApy,
}
