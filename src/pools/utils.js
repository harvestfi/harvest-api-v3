const { cache } = require('../lib/cache')
const { size, isUndefined } = require('lodash')
const { POOL_TYPES, CHAIN_IDS, GENERAL_CACHE_TTL } = require('../lib/constants')
const addresses = require('../lib/data/addresses.json')
const { default: BigNumber } = require('bignumber.js')
const { getWeeklyCompound, getDailyCompound } = require('../lib/utils')
const { getTokenPrice } = require('../prices')

const getIncentivePoolStats = async (
  pool,
  poolContractData,
  lpTokenData,
  weeklyRewardRateOverride, // used to overwrite the reward amount per week (currently used for ampliFARM and INCENTIVE_BUYBACK pools)
  rewardTokenAddress,
  isPotPool,
) => {
  const {
    methods: { periodFinish, rewardRate, rewardRateForToken, periodFinishForToken, totalSupply },
    instance,
  } = poolContractData

  let apr, fetchedTotalSupply, stakingTokenPrice, adjsutedTotalSupply

  const now = Date.now() / 1000
  const fetchedPeriodFinish = isPotPool
    ? await periodFinishForToken(rewardTokenAddress, instance)
    : await periodFinish(instance)

  const fetchedRewardRate = isPotPool
    ? new BigNumber(await rewardRateForToken(rewardTokenAddress, instance))
    : new BigNumber(await rewardRate(instance))

  const fetchedTokenPrice = await getTokenPrice(rewardTokenAddress, pool.chain)
  const pricePerToken = new BigNumber(fetchedTokenPrice)

  const weeklyRewardRate = !isUndefined(weeklyRewardRateOverride)
    ? new BigNumber(weeklyRewardRateOverride)
    : new BigNumber(
        fetchedPeriodFinish < now ? 0 : fetchedRewardRate.dividedBy(1e18).times(604800).toFixed(),
      )

  stakingTokenPrice = lpTokenData.price

  if (lpTokenData.price === undefined) {
    stakingTokenPrice = await getTokenPrice(lpTokenData.address, pool.chain)
  }

  fetchedTotalSupply = new BigNumber(await totalSupply(instance))

  // Set to one in the case of zero to avoid division by zero
  if (fetchedTotalSupply.eq(0)) {
    adjsutedTotalSupply = new BigNumber(1)
  } else {
    adjsutedTotalSupply = fetchedTotalSupply
  }

  adjsutedTotalSupply = adjsutedTotalSupply.dividedBy(
    new BigNumber(10).exponentiatedBy(lpTokenData.decimals),
  )

  apr = pricePerToken
    .times(weeklyRewardRate)
    .times(new BigNumber(52))
    .dividedBy(adjsutedTotalSupply)
    .dividedBy(stakingTokenPrice)

  if (pool.rewardMultiplier) {
    apr = apr.multipliedBy(pool.rewardMultiplier)
  }

  return {
    apr: apr.isNaN() ? '0' : apr.multipliedBy(100).toFixed(),
    totalSupply: fetchedTotalSupply.toFixed(),
    lpTokenPrice: stakingTokenPrice,
    rewardRate: fetchedRewardRate.toFixed(),
    periodFinish: fetchedPeriodFinish,
  }
}

const isPotPool = pool => {
  return size(pool.rewardTokens) >= 2 || pool.chain === CHAIN_IDS.ARBITRUM_ONE
}

const getPoolStatsPerType = async (pool, poolContractData, lpTokenData, weeklyReward, fresh) => {
  let cachedStats

  if (!fresh) {
    cachedStats = cache.get(`poolRewardApy${pool.id}`)
  }

  if (cachedStats) {
    return cachedStats
  }

  const allPoolStats = []

  for (let rewardTokenAddress of pool.rewardTokens) {
    let poolStats = {}
    switch (pool.type) {
      case POOL_TYPES.INCENTIVE:
        poolStats = await getIncentivePoolStats(
          pool,
          poolContractData,
          lpTokenData,
          undefined,
          rewardTokenAddress,
          isPotPool(pool),
        )
        if (pool.chain === CHAIN_IDS.ETH) {
          poolStats.apy = getWeeklyCompound(poolStats.apr)
        } else {
          poolStats.apy = poolStats.apr
        }
        break
      case POOL_TYPES.UNIV3:
        poolStats = await getIncentivePoolStats(
          pool,
          poolContractData,
          lpTokenData,
          undefined,
          rewardTokenAddress,
          isPotPool(pool),
        )

        if (rewardTokenAddress === addresses.iFARM) {
          poolStats.apr = new BigNumber(poolStats.apr).toFixed()
        }
        if (pool.chain === CHAIN_IDS.ETH && rewardTokenAddress === addresses.iFARM) {
          poolStats.apy = getWeeklyCompound(poolStats.apr)
        } else {
          poolStats.apy = new BigNumber(poolStats.apr).toFixed(2)
        }
        break
      case POOL_TYPES.PROFIT_SHARING:
        poolStats = await getIncentivePoolStats(
          pool,
          poolContractData,
          lpTokenData,
          undefined,
          rewardTokenAddress,
          isPotPool(pool),
        )
        poolStats.apy = getDailyCompound(poolStats.apr)
        break
      default:
        break
    }

    allPoolStats.push(poolStats)
  }
  const result = allPoolStats.reduce(
    (acc, stats) => {
      acc.apy.push(stats.apy)
      acc.apr.push(stats.apr)
      acc.rewardRate.push(stats.rewardRate)
      acc.totalSupply = stats.totalSupply
      acc.lpTokenPrice = stats.lpTokenPrice
      acc.periodFinish = stats.periodFinish
      return acc
    },
    {
      apy: [],
      apr: [],
      rewardRate: [],
      totalSupply: 0,
      lpTokenPrice: 0,
      periodFinish: 0,
    },
  )
  if (!fresh) {
    cache.set(`poolRewardApy${pool.id}`, result, GENERAL_CACHE_TTL)
  }

  return result
}

module.exports = {
  getPoolStatsPerType,
  getIncentivePoolStats,
  isPotPool,
}
