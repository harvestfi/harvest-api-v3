const { get } = require('lodash')
const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const { getGammaData, HYPERVISOR_PATHS } = require('../../../lib/third-party/gamma')

const { getTokenPrice } = require('../../../prices')

const { gammaStakingRewards: RewardsContractInfo } = require('../../../lib/web3/contracts')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getApy = async (underlying, stakingRewards, chain, factor) => {
  const gammaData = await getGammaData(HYPERVISOR_PATHS.UNISWAP)
  const tvlUSD = parseFloat(get(gammaData, `${underlying.toLowerCase()}.tvlUSD`, 0))

  if (!Number.isFinite(tvlUSD) || tvlUSD <= 0) {
    return '0'
  }

  const web3Instance = getWeb3(chain)
  const {
    methods: { getPeriodFinish, getRewardRate, getRewardToken },
  } = RewardsContractInfo

  const stakingInstance = getCachedContract({
    web3: web3Instance,
    abi: RewardsContractInfo.contract.abi,
    address: stakingRewards,
  })

  const now = Date.now() / 1000
  const poolPeriodFinish = await getPeriodFinish(stakingInstance)
  if (now > poolPeriodFinish) {
    return '0'
  }

  const rewardTokneAddr = await getRewardToken(stakingInstance)
  const rewardTokenPrice = await getTokenPrice(rewardTokneAddr)
  const rewardRate = await getRewardRate(stakingInstance)

  const apr = new BigNumber(rewardTokenPrice)
    .times(new BigNumber(rewardRate))
    .div(new BigNumber(1e18))
    .times(new BigNumber(86400 * 365.24))
    .div(new BigNumber(tvlUSD))
    .times(100)
    .times(factor)

  return apr.toFixed(2)
}

module.exports = {
  getApy,
}
