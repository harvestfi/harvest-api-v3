const BigNumber = require('bignumber.js')
const { web3BASE } = require('../../../lib/web3')
const { aeroGauge, basedRewards, token: tokenContractData } = require('../../../lib/web3/contracts')
const { getTokenPrice } = require('../../../prices')
const { CHAIN_IDS } = require('../../../lib/constants')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getApy = async (underlying, rewardPool, pid, reduction) => {
  const web3 = web3BASE
  const {
    methods: rewardMethods,
    contract: { abi: rewardAbi },
  } = basedRewards
  const {
    methods: { getBalance },
    contract: { abi: tokenAbi },
  } = tokenContractData

  const secondsPerYear = 60 * 60 * 24 * 365.25
  const rewardInstance = getCachedContract({
    web3,
    abi: rewardAbi,
    address: rewardPool,
  })

  const now = Date.now() / 1000
  const startTime = await rewardMethods.getStartTime(rewardInstance)
  const finishTime = await rewardMethods.getFinishTime(rewardInstance)
  let rewardPerSecond
  if (now < startTime || now > finishTime) {
    return '0'
  } else {
    rewardPerSecond = new BigNumber(await rewardMethods.getRewardRate(rewardInstance))
  }

  const rewardToken = await rewardMethods.getRewardToken(rewardInstance)
  const underlyingInstance = getCachedContract({
    web3,
    abi: tokenAbi,
    address: underlying,
  })

  const poolInfo = await rewardMethods.getPoolInfo(pid, rewardInstance)
  const allocPoint = poolInfo.allocPoint
  const totalAllocPoint = await rewardMethods.getTotalAllocPoint(rewardInstance)
  let totalSupply
  if (poolInfo.gaugeInfo.isGauge) {
    const {
      methods: gaugeMethods,
      contract: { abi: gaugeAbi },
    } = aeroGauge
    const gaugeInstance = getCachedContract({
      web3,
      abi: gaugeAbi,
      address: poolInfo.gaugeInfo.gauge,
    })
    const gaugeBalance = new BigNumber(await gaugeMethods.getBalance(rewardPool, gaugeInstance))
    totalSupply = gaugeBalance.plus(await getBalance(rewardPool, underlyingInstance))
  } else {
    totalSupply = new BigNumber(await getBalance(rewardPool, underlyingInstance))
  }

  const rewardPrice = await getTokenPrice(rewardToken, CHAIN_IDS.BASE)
  const underlyingPrice = await getTokenPrice(underlying, CHAIN_IDS.BASE)

  const rewardInUsdPerYear = new BigNumber(rewardPrice)
    .times(rewardPerSecond)
    .times(allocPoint)
    .div(totalAllocPoint)
    .times(secondsPerYear)
    .div(1e18)
  const totalSupplyInUsd = totalSupply.times(underlyingPrice).div(1e18)

  let apy = rewardInUsdPerYear.div(totalSupplyInUsd).times(100).times(reduction)

  return apy.toFixed(2)
}

module.exports = {
  getApy,
}
