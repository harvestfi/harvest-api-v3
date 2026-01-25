const BigNumber = require('bignumber.js')
const { web3ARBITRUM } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const { xgrailStrategy, camelotDividends } = require('../../../lib/web3/contracts')
const { CHAIN_IDS } = require('../../../lib/constants')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getApy = async (strategyAddress, factor) => {
  const web3 = web3ARBITRUM
  const {
    contract: { abi: strategyAbi },
    methods: strategyMethods,
  } = xgrailStrategy
  const {
    contract: { abi: dividendsAbi },
    methods: dividendsMethods,
  } = camelotDividends

  const strategyInstance = getCachedContract({
    web3,
    abi: strategyAbi,
    address: strategyAddress,
  })
  const dividendsAddress = await strategyMethods.getDividendsAddress(strategyInstance)
  const dividendsInstance = getCachedContract({
    web3,
    abi: dividendsAbi,
    address: dividendsAddress,
  })

  const rewardLength = await dividendsMethods.getRewardsLength(dividendsInstance)
  const rewardDuration = new BigNumber(await dividendsMethods.getCycleDuration(dividendsInstance))
  const totalAllocation = new BigNumber(
    await dividendsMethods.getTotalAllocation(dividendsInstance),
  )
  const xGrailPrice = new BigNumber(await getTokenPrice('xGRAIL'))
  const totalAllocationUsd = totalAllocation.times(xGrailPrice).div(1e18)
  const strategyAllocationInfo = await strategyMethods.getDividendsAllocation(strategyInstance)
  const strategyAllocation = new BigNumber(strategyAllocationInfo.weight).div(10000)

  let totalUsdPerSecond = new BigNumber(0)
  for (let i = 0; i < rewardLength; i++) {
    const rewardToken = await dividendsMethods.getRewardToken(i, dividendsInstance)
    const rewardInfo = await dividendsMethods.getRewardInfo(rewardToken, dividendsInstance)
    const rewardAmount = new BigNumber(rewardInfo.currentDistributionAmount)
    const rewardPerSecond = rewardAmount.div(rewardDuration)

    const rewardPrice = new BigNumber(await getTokenPrice(rewardToken, CHAIN_IDS.ARBITRUM_ONE))
    const usdPerSecond = rewardPerSecond.times(rewardPrice).div(1e18)
    totalUsdPerSecond = totalUsdPerSecond.plus(usdPerSecond)
  }

  const apy = totalUsdPerSecond
    .times(86400)
    .times(365.25)
    .div(totalAllocationUsd)
    .times(strategyAllocation)
    .times(100)

  const result = apy.times(factor).toFixed(2)
  return result
}

module.exports = {
  getApy,
}
