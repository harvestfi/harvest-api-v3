const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const { comet, token } = require('../../../lib/web3/contracts')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getApy = async (underlying, cToken, reduction, chainId) => {
  const web3 = getWeb3(chainId)
  const {
    contract: { abi: cometAbi },
    methods: cometMethods,
  } = comet
  const {
    contract: { abi: tokenAbi },
    methods: { getDecimals },
  } = token

  const secondsPerYear = 60 * 60 * 24 * 365.25
  const cometInstance = getCachedContract({
    web3,
    abi: cometAbi,
    address: cToken,
  })
  const utilization = new BigNumber(await cometMethods.getUtilization(cometInstance))
  const supplyRate = new BigNumber(
    await cometMethods.getSupplyRate(utilization.toFixed(0), cometInstance),
  )
  const supplyAPR = supplyRate.div(1e18).times(secondsPerYear).times(100)

  const rewardRate = new BigNumber(await cometMethods.getTrackingSupplySpeed(cometInstance))
  const rewardPerYear = rewardRate.times(secondsPerYear)
  const totalSupply = new BigNumber(await cometMethods.totalSupply(cometInstance))

  const underlyingPrice = await getTokenPrice(underlying, chainId)
  const rewardPrice = await getTokenPrice('COMP')

  const underlyingInstance = getCachedContract({
    web3,
    abi: tokenAbi,
    address: underlying,
  })
  const underlyingDecimals = await getDecimals(underlyingInstance)

  const rewardAPR = rewardPerYear
    .div(1e15)
    .times(rewardPrice)
    .div(totalSupply.div(new BigNumber(10).pow(Number(underlyingDecimals))).times(underlyingPrice))
    .times(100)
    .times(reduction)

  return supplyAPR.plus(rewardAPR)
}

module.exports = {
  getApy,
}
