const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const { comet, token } = require('../../../lib/web3/contracts')

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
  const cometInstance = new web3.eth.Contract(cometAbi, cToken)
  const utilization = new BigNumber(await cometMethods.getUtilization(cometInstance))
  const supplyRate = new BigNumber(await cometMethods.getSupplyRate(utilization, cometInstance))
  const supplyAPR = supplyRate.div(1e18).times(secondsPerYear).times(100)

  const rewardRate = new BigNumber(await cometMethods.getTrackingSupplySpeed(cometInstance))
  const rewardPerYear = rewardRate.times(secondsPerYear)
  const totalSupply = new BigNumber(await cometMethods.totalSupply(cometInstance))

  const underlyingPrice = await getTokenPrice(underlying, chainId)
  const rewardPrice = await getTokenPrice('COMP')

  const underlyingInstance = new web3.eth.Contract(tokenAbi, underlying)
  const underlyingDecimals = await getDecimals(underlyingInstance)

  const rewardAPR = rewardPerYear
    .div(1e15)
    .times(rewardPrice)
    .div(totalSupply.div(10 ** underlyingDecimals).times(underlyingPrice))
    .times(100)
    .times(reduction)

  return supplyAPR.plus(rewardAPR)
}

module.exports = {
  getApy,
}
