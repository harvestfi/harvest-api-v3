const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const { CHAIN_IDS } = require('../../../lib/constants')
const { balTokenAdmin, crvGauge, crvController } = require('../../../lib/web3/contracts')
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
    contract: {
      abi: balTokenAdminAbi,
      address: { mainnet: balTokenAdminAddress },
    },
    methods: { getRate },
  } = balTokenAdmin

  const {
    contract: { abi: crvControllerAbi },
    methods: crvControllerMethods,
  } = crvController
  const balGaugeControllerAddress = '0xC128468b7Ce63eA702C1f104D55A2566b13D3ABD'

  const {
    contract: { abi: crvGaugeAbi },
    methods: crvGaugeMethods,
  } = crvGauge

  const balTokenAdminInstance = getCachedContract({
    web3: web3Eth,
    abi: balTokenAdminAbi,
    address: balTokenAdminAddress,
  })
  const crvControllerInstance = getCachedContract({
    web3: web3Eth,
    abi: crvControllerAbi,
    address: balGaugeControllerAddress,
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

  const currentRate = new BigNumber(await getRate(balTokenAdminInstance))
    .multipliedBy(365.25 * 86400)
    .dividedBy(new BigNumber(10).exponentiatedBy(18))

  const rewardTokenInUsd = await getTokenPrice(tokenAddresses.BAL)
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
