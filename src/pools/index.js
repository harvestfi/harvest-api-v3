const BigNumber = require('bignumber.js')
const {
  pool: regularPoolContract,
  potPool: potPoolContract,
  token: tokenContract,
} = require('../lib/web3/contracts')
const { getWeb3, getCallCount, resetCallCount } = require('../lib/web3')
const { get, find, omit } = require('lodash')
const {
  DB_CACHE_IDS,
  WEB3_CALL_COUNT_STATS_KEY,
  DEBUG_MODE,
  PROFIT_SHARING_POOL_ID,
  UI_DATA_FILES,
} = require('../lib/constants')
const { cache } = require('../lib/cache')
const addresses = require('../lib/data/addresses.json')
const { getTradingApy } = require('../vaults/trading-apys')

const { Cache } = require('../lib/db/models/cache')
const { getPoolStatsPerType, getIncentivePoolStats, isPotPool } = require('./utils')
const { getTokenPrice } = require('../prices')
const { getUIData } = require('../lib/data')

const fetchAndExpandPool = async pool => {
  if (DEBUG_MODE) {
    resetCallCount()
  }

  const tokens = await getUIData(UI_DATA_FILES.TOKENS)
  const poolVault = find(tokens, token => token.vaultAddress === pool.collateralAddress, {})
  const inactive = poolVault ? (poolVault.inactive ? poolVault.inactive : false) : false

  const web3Instance = getWeb3(pool.chain)

  try {
    console.log('Getting pool data for: ', pool.id)

    const poolContract = isPotPool(pool) ? potPoolContract : regularPoolContract
    const poolInstance = new web3Instance.eth.Contract(
      poolContract.contract.abi,
      pool.contractAddress,
    )

    const lpAddress = await poolContract.methods.lpToken(poolInstance)
    const lpTokenData = await fetchLpToken(lpAddress, pool.chain)

    const dbData = await Cache.find({
      type: { $in: [DB_CACHE_IDS.STATS, DB_CACHE_IDS.POOLS] },
    })

    const fetchedStats = dbData.find(result => result.type === DB_CACHE_IDS.STATS)
    const fetchedPools = dbData.find(result => result.type === DB_CACHE_IDS.POOLS)

    let poolStats,
      amountToStakeForBoost,
      boostedRewardAPY,
      profitShareAPY = get(fetchedStats, 'data.tokenStats.historicalAverageProfitSharingAPY', 0)

    if (!profitShareAPY) {
      profitShareAPY = get(
        find(get(fetchedPools, 'data.eth', []), pool => pool && pool.id === 'profit-sharing-farm'),
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
      const oldPoolInstance = new web3Instance.eth.Contract(
        poolContract.contract.abi,
        pool.oldPoolContractAddress,
      )

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
    console.error(`Failed to get pool data for: ${pool.id}`, err)
  }
}

const fetchLpToken = async (lpAddress, chainId) => {
  const web3Instance = getWeb3(chainId)

  const lpTokenInstance = new web3Instance.eth.Contract(tokenContract.contract.abi, lpAddress)
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

const getPoolsData = async poolToFetch => Promise.all(poolToFetch.map(fetchAndExpandPool))

module.exports = {
  getPoolsData,
  getPoolStatsPerType,
  getIncentivePoolStats,
  fetchAndExpandPool,
}
