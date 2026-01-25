const BigNumber = require('bignumber.js')
const {
  pool: regularPoolContract,
  potPool: potPoolContract,
  token: tokenContract,
} = require('../lib/web3/contracts')
const { getWeb3, getCallCount, resetCallCount } = require('../lib/web3')
const { get, find, omit } = require('lodash')
const {
  WEB3_CALL_COUNT_STATS_KEY,
  DEBUG_MODE,
  PROFIT_SHARING_POOL_ID,
} = require('../lib/constants')
const { cache } = require('../lib/cache')
const addresses = require('../lib/data/addresses.json')
const { getTradingApy } = require('../vaults/trading-apys')
const { getPoolStatsPerType, getIncentivePoolStats, isPotPool } = require('./utils')
const { getTokenPrice } = require('../prices')
const logger = require('../lib/logger')
const pMap = require('p-map')
const { getCachedContract } = require('../lib/web3/contractCache')

const fetchAndExpandPool = async (pool, poolsDoc, statsDoc, tokens) => {
  if (DEBUG_MODE) {
    resetCallCount()
  }

  const poolVault = find(tokens, token => token.vaultAddress === pool.collateralAddress, {})
  const inactive = poolVault ? (poolVault.inactive ? poolVault.inactive : false) : false

  const web3Instance = getWeb3(pool.chain)

  try {
    console.log('Getting pool data for: ', pool.id)

    const poolContract = isPotPool(pool) ? potPoolContract : regularPoolContract
    const poolInstance = getCachedContract({
      web3: web3Instance,
      abi: poolContract.contract.abi,
      address: pool.contractAddress,
    })

    const lpAddress = await poolContract.methods.lpToken(poolInstance)
    const lpTokenData = await fetchLpToken(lpAddress, pool.chain)

    const fetchedStats = statsDoc?.data ?? {}
    const fetchedPools = poolsDoc?.data ?? {}

    let poolStats,
      amountToStakeForBoost,
      boostedRewardAPY,
      profitShareAPY = get(fetchedStats, 'tokenStats.historicalAverageProfitSharingAPY', 0)

    if (!profitShareAPY) {
      profitShareAPY = get(
        find(get(fetchedPools, 'eth', []), pool => pool && pool.id === 'profit-sharing-farm'),
        'rewardAPY',
        get(cache.get(`poolRewardApy${PROFIT_SHARING_POOL_ID}`), 'apy', 0),
      )
    }

    let tradingApy
    if (inactive) {
      tradingApy = 0
    } else {
      tradingApy = pool.tradingApyOveride || (await getTradingApy(pool)) || 0
    }

    if (pool.rewardAPYOveride) {
      poolStats = {
        apr: pool.rewardAPYOveride,
        apy: pool.rewardAPYOveride,
        totalSupply: await poolContract.methods.totalSupply(poolInstance),
        finishTime: await poolContract.methods.periodFinish(poolInstance),
      }
    } else {
      poolStats = await getPoolStatsPerType(
        pool,
        {
          ...poolContract,
          instance: poolInstance,
        },
        lpTokenData,
      )

      const hasIFarmReward = pool.rewardTokens.includes(addresses.iFARM) && !inactive

      if (hasIFarmReward) {
        boostedRewardAPY = new BigNumber(get(poolStats, 'apy[0]', 0))
          .times(new BigNumber(profitShareAPY).plus(100))
          .dividedBy(100)
          .toFixed(2)
      } else {
        boostedRewardAPY = null
      }
    }

    let totalValueLocked = new BigNumber(poolStats.totalSupply)
      .multipliedBy(lpTokenData.price)
      .dividedBy(new BigNumber(10).exponentiatedBy(lpTokenData.decimals))
      .toFixed()

    if (pool.oldPoolContractAddress) {
      // to account for tvl while migrating
      const oldPoolInstance = getCachedContract({
        web3: web3Instance,
        abi: poolContract.contract.abi,
        address: pool.oldPoolContractAddress,
      })

      const oldPoolTotalSupply = await poolContract.methods.totalSupply(oldPoolInstance)
      const oldPoolTvl = new BigNumber(oldPoolTotalSupply)
        .multipliedBy(lpTokenData.price)
        .dividedBy(new BigNumber(10).exponentiatedBy(lpTokenData.decimals))
        .toFixed()

      totalValueLocked = new BigNumber(totalValueLocked).plus(oldPoolTvl).toFixed()
    }

    if (DEBUG_MODE) {
      const currentCache = cache.get(WEB3_CALL_COUNT_STATS_KEY)
      cache.set(WEB3_CALL_COUNT_STATS_KEY, {
        ...currentCache,
        pools: [...currentCache.pools, { poolId: pool.id, callCount: getCallCount() }],
      })
      resetCallCount()
    }

    return {
      ...omit(pool, ['tradingApyFunction']),
      lpTokenData,
      amountToStakeForBoost,
      boostedRewardAPY,
      rewardAPY: poolStats.apy,
      rewardAPR: poolStats.apr,
      rewardPerToken: poolStats.rewardRate,
      totalSupply: poolStats.totalSupply,
      finishTime: poolStats.periodFinish,
      totalValueLocked,
      tradingApy,
    }
  } catch (err) {
    logger.error(`Failed to get pool data for: ${pool.id}`, err)
  }
}

const fetchLpToken = async (lpAddress, chainId) => {
  const web3Instance = getWeb3(chainId)

  const lpTokenInstance = getCachedContract({
    web3: web3Instance,
    abi: tokenContract.contract.abi,
    address: lpAddress,
  })
  const lpDecimals = await tokenContract.methods.getDecimals(lpTokenInstance)
  const lpSymbol = await tokenContract.methods.getSymbol(lpTokenInstance)
  const lpTokenPrice = await getTokenPrice(lpAddress, chainId)

  const result = {
    address: lpAddress,
    decimals: lpDecimals,
    symbol: lpSymbol,
    price: lpTokenPrice,
  }

  if (lpSymbol === 'UNI-V2') {
    // only getting liquidity for uniswap LP tokens
    result.liquidity = new BigNumber(lpTokenPrice)
      .multipliedBy(await tokenContract.methods.getTotalSupply(lpTokenInstance))
      .dividedBy(new BigNumber(10).exponentiatedBy(lpDecimals))
      .toString(10)
  }

  return result
}

const getPoolsData = async (poolToFetch, poolsDoc, statsDoc, tokens) => {
  return pMap(poolToFetch, pool => fetchAndExpandPool(pool, poolsDoc, statsDoc, tokens), {
    concurrency: Number(process.env.FETCH_CONCURRENCY ?? 5),
  })
}

module.exports = {
  getPoolsData,
  getPoolStatsPerType,
  getIncentivePoolStats,
  fetchAndExpandPool,
}
