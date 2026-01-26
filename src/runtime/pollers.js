const BigNumber = require('bignumber.js')
const { client } = require('../lib/http')

const { forEach } = require('promised-loops')
const { pickBy, chunk, isArray, size, get } = require('lodash')

const { getVaultsData } = require('../vaults')
const { getIPORVaultsData } = require('../vaults/ipor')
const { getPoolsData } = require('../pools')
const { getPercentOfFARMStaked, getTotalMarketCap } = require('../lib/token-stats')
const { resetCallCount, printCallCountResults, updateCallCountCache } = require('../lib/web3')
const { cache } = require('../lib/cache')
const { prefetchPriceByAddresses, prefetchPriceByIds } = require('../prices')
const {
  UPDATE_LOOP_INTERVAL_MS,
  WEB3_CALL_COUNT_STATS_KEY,
  ENDPOINT_TYPES,
  ACTIVE_ENDPOINTS,
  GET_PRICE_TYPES,
  CHAIN_IDS,
  GET_POOL_DATA_BATCH_SIZE,
  GET_VAULT_DATA_BATCH_SIZE,
  DEBUG_MODE,
  DB_CACHE_IDS,
  UI_DATA_FILES,
  CURRENCY_API_URL,
  HISTORICAL_CURRENCY_API_URL,
  HARVEST_SUBGRAPH_URLS,
  USER_TRANSACTIONS_START_DATE,
} = require('../lib/constants')
const { Cache } = require('../lib/db/models/cache')
const { storeData, appendData, loadData } = require('../lib/db/models/cache')
const { getUIData } = require('../lib/data')
const addresses = require('../lib/data/addresses.json')
const {
  getTvlDataLength,
  getTvlData,
  getFarmTvlLength,
  getBalanceData,
  getPlasmaBalanceData,
  getPlasmaVaultData,
  getUserTransactions,
} = require('../lib/third-party/harvest-subgraph')
const { getLastUserTransactionTimestamp, saveUserTransactions } = require('../lib/db/supabase')
// const { superformRewardData } = require('../lib/third-party/superform')
const { getGmxData } = require('../lib/third-party/gmx')
const { getCLData } = require('../lib/third-party/cl-test')
const { checkFoldingLeverage } = require('../script/fold-check')
const logger = require('../lib/logger')

const getProfitSharingFactor = chain => {
  switch (chain) {
    case CHAIN_IDS.POLYGON:
      return 0.92
    case CHAIN_IDS.ARBITRUM_ONE:
      return 0.9
    case CHAIN_IDS.BASE:
      return 0.9
    case CHAIN_IDS.ZKSYNC:
      return 0.9
    case CHAIN_IDS.HYPEREVM:
      return 0.9
    default:
      return 0.85
  }
}

const getVaults = async () => {
  console.log('\n-- Getting vaults data --')
  const poolsDoc = await Cache.collection.findOne({ type: DB_CACHE_IDS.POOLS })
  const statsDoc = await Cache.collection.findOne({ type: DB_CACHE_IDS.STATS })
  const tokens = await getUIData(UI_DATA_FILES.TOKENS)
  const pools = await getUIData(UI_DATA_FILES.POOLS)
  let fetchedETHVaults = [],
    fetchedMATICVaults = [],
    fetchedARBITRUMVaults = [],
    fetchedBASEVaults = [],
    fetchedZKSYNCVaults = [],
    fetchedHYPEREVMVaults = [],
    fetchedVaults,
    hasErrors = false

  const tokensWithVault = pickBy(tokens, token => token.vaultAddress)

  const ethVaultsBatches = chunk(
    Object.keys(tokensWithVault).filter(tokenId => tokens[tokenId].chain === CHAIN_IDS.ETH),
    GET_VAULT_DATA_BATCH_SIZE,
  )

  const maticVaultsBatches = chunk(
    Object.keys(tokensWithVault).filter(tokenId => tokens[tokenId].chain === CHAIN_IDS.POLYGON),
    GET_VAULT_DATA_BATCH_SIZE,
  )

  const arbitrumVaultsBatches = chunk(
    Object.keys(tokensWithVault).filter(
      tokenId => tokens[tokenId].chain === CHAIN_IDS.ARBITRUM_ONE,
    ),
    GET_VAULT_DATA_BATCH_SIZE,
  )

  const baseVaultsBatches = chunk(
    Object.keys(tokensWithVault).filter(tokenId => tokens[tokenId].chain === CHAIN_IDS.BASE),
    GET_VAULT_DATA_BATCH_SIZE,
  )

  const zksyncVaultsBatches = chunk(
    Object.keys(tokensWithVault).filter(tokenId => tokens[tokenId].chain === CHAIN_IDS.ZKSYNC),
    GET_VAULT_DATA_BATCH_SIZE,
  )

  const hyperevmVaultsBatches = chunk(
    Object.keys(tokensWithVault).filter(tokenId => tokens[tokenId].chain === CHAIN_IDS.HYPEREVM),
    GET_VAULT_DATA_BATCH_SIZE,
  )

  console.log('\n-- Getting HYPEREVM vaults data --')
  await forEach(hyperevmVaultsBatches, async batch => {
    if (batch) {
      try {
        console.log('Getting vault data for: ', batch)
        const vaultsData = await getVaultsData(batch, poolsDoc, statsDoc, tokens, pools)
        fetchedHYPEREVMVaults = fetchedHYPEREVMVaults.concat(vaultsData)
      } catch (err) {
        hasErrors = true
        logger.error(`Failed to get vault data for: ${batch}`, err)
      }
    }
  })
  console.log('\n-- Done getting HYPEREVM vaults data --')

  console.log('\n-- Getting ZKSYNC vaults data --')
  await forEach(zksyncVaultsBatches, async batch => {
    if (batch) {
      try {
        console.log('Getting vault data for: ', batch)
        const vaultsData = await getVaultsData(batch, poolsDoc, statsDoc, tokens, pools)
        fetchedZKSYNCVaults = fetchedZKSYNCVaults.concat(vaultsData)
      } catch (err) {
        hasErrors = true
        logger.error(`Failed to get vault data for: ${batch}`, err)
      }
    }
  })
  console.log('\n-- Done getting ZKSYNC vaults data --')

  console.log('\n-- Getting MATIC vaults data --')
  await forEach(maticVaultsBatches, async batch => {
    try {
      console.log('Getting vault data for: ', batch)
      const vaultsData = await getVaultsData(batch, poolsDoc, statsDoc, tokens, pools)
      fetchedMATICVaults = fetchedMATICVaults.concat(vaultsData)
    } catch (err) {
      hasErrors = true
      logger.error(`Failed to get vault data for: ${batch}`, err)
    }
  })
  console.log('\n-- Done getting MATIC vaults data --')

  console.log('\n-- Getting ARBITRUM vaults data --')
  await forEach(arbitrumVaultsBatches, async batch => {
    if (batch) {
      try {
        console.log('Getting vault data for: ', batch)
        let vaultsData,
          iporvaultsData,
          iporBatch = [],
          normalBatch = []
        batch.forEach(vaultId => {
          if (tokensWithVault[vaultId].isIPORVault) {
            iporBatch.push(vaultId)
          } else {
            normalBatch.push(vaultId)
          }
        })
        vaultsData = await getVaultsData(normalBatch, poolsDoc, statsDoc, tokens, pools)
        iporvaultsData = await getIPORVaultsData(iporBatch)
        fetchedARBITRUMVaults = fetchedARBITRUMVaults.concat(vaultsData).concat(iporvaultsData)
      } catch (err) {
        hasErrors = true
        logger.error(`Failed to get vault data for: ${batch}`, err)
      }
    }
  })
  console.log('\n-- Done getting ARBITRUM vaults data --')

  console.log('\n-- Getting ETH vaults data --')
  await forEach(ethVaultsBatches, async batch => {
    if (batch) {
      try {
        console.log('Getting vault data for: ', batch)
        let vaultsData,
          iporvaultsData,
          iporBatch = [],
          normalBatch = []
        batch.forEach(vaultId => {
          if (tokensWithVault[vaultId].isIPORVault) {
            iporBatch.push(vaultId)
          } else {
            normalBatch.push(vaultId)
          }
        })
        vaultsData = await getVaultsData(normalBatch, poolsDoc, statsDoc, tokens, pools)
        iporvaultsData = await getIPORVaultsData(iporBatch)
        fetchedETHVaults = fetchedETHVaults.concat(vaultsData).concat(iporvaultsData)
      } catch (err) {
        hasErrors = true
        logger.error(`Failed to get vault data for: ${batch}`, err)
      }
    }
  })
  console.log('\n-- Done getting ETH vaults data --')

  console.log('\n-- Getting BASE vaults data --')
  await forEach(baseVaultsBatches, async batch => {
    if (batch) {
      try {
        console.log('Getting vault data for: ', batch)
        let vaultsData,
          iporvaultsData,
          iporBatch = [],
          normalBatch = []
        batch.forEach(vaultId => {
          if (tokensWithVault[vaultId].isIPORVault) {
            iporBatch.push(vaultId)
          } else {
            normalBatch.push(vaultId)
          }
        })
        vaultsData = await getVaultsData(normalBatch, poolsDoc, statsDoc, tokens, pools)
        iporvaultsData = await getIPORVaultsData(iporBatch)
        fetchedBASEVaults = fetchedBASEVaults.concat(vaultsData).concat(iporvaultsData)
      } catch (err) {
        hasErrors = true
        logger.error(`Failed to get vault data for: ${batch}`, err)
      }
    }
  })
  console.log('\n-- Done getting BASE vaults data --')

  fetchedVaults = {
    eth: fetchedETHVaults.reduce((acc, vault) => {
      acc[vault.id] = vault
      return acc
    }, {}),
    matic: fetchedMATICVaults.reduce((acc, vault) => {
      acc[vault.id] = vault
      return acc
    }, {}),
    arbitrum: fetchedARBITRUMVaults.reduce((acc, vault) => {
      acc[vault.id] = vault
      return acc
    }, {}),
    base: fetchedBASEVaults.reduce((acc, vault) => {
      acc[vault.id] = vault
      return acc
    }, {}),
    zksync: fetchedZKSYNCVaults.reduce((acc, vault) => {
      acc[vault.id] = vault
      return acc
    }, {}),
    hyperevm: fetchedHYPEREVMVaults.reduce((acc, vault) => {
      acc[vault.id] = vault
      return acc
    }, {}),
  }

  console.log('\n-- Done getting vaults data --')

  await storeData(
    Cache,
    DB_CACHE_IDS.VAULTS,
    {
      ...fetchedVaults,
    },
    hasErrors,
  )
}

const getTokenStats = async () => {
  console.log('\n-- Getting FARM token stats --')
  const tokenStats = {}

  try {
    console.log('Getting percent of FARM staked')
    tokenStats.percentStaked = await getPercentOfFARMStaked()
  } catch (err) {
    logger.error('Failed to get percent of farm staked: ', err)
  }

  try {
    console.log('Getting total gas saved by protocol')
    tokenStats.totalGasSaved = '214465278'
  } catch (err) {
    logger.error('Failed to get total gas saved by protocol: ', err)
  }

  try {
    console.log('Getting total FARM market cap')
    tokenStats.totalMarketCap = await getTotalMarketCap()
  } catch (err) {
    logger.error('Failed to get total FARM market cap: ', err)
  }

  const hasErrors =
    !tokenStats.percentStaked || !tokenStats.totalGasSaved || !tokenStats.totalMarketCap

  await storeData(
    Cache,
    DB_CACHE_IDS.STATS,
    {
      tokenStats,
    },
    hasErrors,
    false,
  )
  console.log('-- Done getting FARM token stats --\n')
}

const getPools = async () => {
  const poolsDoc = await Cache.collection.findOne({ type: DB_CACHE_IDS.POOLS })
  const statsDoc = await Cache.collection.findOne({ type: DB_CACHE_IDS.STATS })
  const tokens = await getUIData(UI_DATA_FILES.TOKENS)
  const pools = await getUIData(UI_DATA_FILES.POOLS)
  let fetchedETHPools = [],
    fetchedMATICPools = [],
    fetchedARBITRUMPools = [],
    fetchedBASEPools = [],
    fetchedZKSYNCPools = [],
    fetchedHYPEREVMPools = [],
    fetchedPools = [],
    hasErrors

  try {
    console.log('\n-- Getting HYPEREVM pool data --')

    const hyperevmPoolBatches = chunk(
      pools.filter(pool => pool.chain === CHAIN_IDS.HYPEREVM),
      GET_POOL_DATA_BATCH_SIZE,
    )

    if (size(hyperevmPoolBatches)) {
      await forEach(hyperevmPoolBatches, async poolBatch => {
        const poolData = await getPoolsData(poolBatch, poolsDoc, statsDoc, tokens)
        fetchedHYPEREVMPools = fetchedHYPEREVMPools.concat(poolData)
      })
    } else {
      console.log('No pools available')
    }

    console.log('-- Done getting HYPEREVM pool data --\n')

    console.log('\n-- Getting ZKSYNC pool data --')

    const zksyncPoolBatches = chunk(
      pools.filter(pool => pool.chain === CHAIN_IDS.ZKSYNC),
      GET_POOL_DATA_BATCH_SIZE,
    )

    if (size(zksyncPoolBatches)) {
      await forEach(zksyncPoolBatches, async poolBatch => {
        const poolData = await getPoolsData(poolBatch, poolsDoc, statsDoc, tokens)
        fetchedZKSYNCPools = fetchedZKSYNCPools.concat(poolData)
      })
    } else {
      console.log('No pools available')
    }

    console.log('-- Done getting ZKSYNC pool data --\n')

    console.log('\n-- Getting MATIC pool data --')

    const maticPoolBatches = chunk(
      pools.filter(pool => pool.chain === CHAIN_IDS.POLYGON),
      GET_POOL_DATA_BATCH_SIZE,
    )

    if (size(maticPoolBatches)) {
      await forEach(maticPoolBatches, async poolBatch => {
        const poolData = await getPoolsData(poolBatch, poolsDoc, statsDoc, tokens)
        fetchedMATICPools = fetchedMATICPools.concat(poolData)
      })
    } else {
      console.log('No pools available')
    }

    console.log('-- Done getting MATIC pool data --\n')

    console.log('\n-- Getting ARBITRUM pool data --')

    const arbitrumPoolBatches = chunk(
      pools.filter(pool => pool.chain === CHAIN_IDS.ARBITRUM_ONE),
      GET_POOL_DATA_BATCH_SIZE,
    )

    if (size(arbitrumPoolBatches)) {
      await forEach(arbitrumPoolBatches, async poolBatch => {
        const poolData = await getPoolsData(poolBatch, poolsDoc, statsDoc, tokens)
        fetchedARBITRUMPools = fetchedARBITRUMPools.concat(poolData)
      })
    } else {
      console.log('No pools available')
    }

    console.log('-- Done getting ARBITRUM pool data --\n')

    console.log('\n-- Getting BASE pool data --')

    const basePoolBatches = chunk(
      pools.filter(pool => pool.chain === CHAIN_IDS.BASE),
      GET_POOL_DATA_BATCH_SIZE,
    )

    if (size(basePoolBatches)) {
      await forEach(basePoolBatches, async poolBatch => {
        const poolData = await getPoolsData(poolBatch, poolsDoc, statsDoc, tokens)
        fetchedBASEPools = fetchedBASEPools.concat(poolData)
      })
    } else {
      console.log('No pools available')
    }

    console.log('-- Done getting BASE pool data --\n')

    console.log('\n-- Getting ETH pool data --')

    const ethPoolBatches = chunk(
      pools.filter(pool => pool.chain === CHAIN_IDS.ETH),
      GET_POOL_DATA_BATCH_SIZE,
    )
    if (size(ethPoolBatches)) {
      await forEach(ethPoolBatches, async poolBatch => {
        const poolData = await getPoolsData(poolBatch, poolsDoc, statsDoc, tokens)
        fetchedETHPools = fetchedETHPools.concat(poolData)
      })
    } else {
      console.log('No pools available')
    }
    console.log('-- Done getting ETH pool data --\n')
  } catch (err) {
    logger.error('error getting pools', err)
    hasErrors = true
  }

  fetchedPools = {
    eth: fetchedETHPools,
    matic: fetchedMATICPools,
    arbitrum: fetchedARBITRUMPools,
    base: fetchedBASEPools,
    zksync: fetchedZKSYNCPools,
    hyperevm: fetchedHYPEREVMPools,
  }
  hasErrors =
    (isArray(fetchedETHPools) &&
      (fetchedETHPools.includes(undefined) || fetchedETHPools.includes(null))) ||
    (isArray(fetchedMATICPools) &&
      (fetchedMATICPools.includes(undefined) || fetchedMATICPools.includes(null))) ||
    (isArray(fetchedARBITRUMPools) &&
      (fetchedARBITRUMPools.includes(undefined) || fetchedARBITRUMPools.includes(null))) ||
    (isArray(fetchedBASEPools) &&
      (fetchedBASEPools.includes(undefined) || fetchedBASEPools.includes(null))) ||
    (isArray(fetchedZKSYNCPools) &&
      (fetchedZKSYNCPools.includes(undefined) || fetchedZKSYNCPools.includes(null))) ||
    (isArray(fetchedHYPEREVMPools) &&
      (fetchedHYPEREVMPools.includes(undefined) || fetchedHYPEREVMPools.includes(null)))
  await storeData(
    Cache,
    DB_CACHE_IDS.POOLS,
    {
      ...fetchedPools,
    },
    hasErrors,
  )
  console.log('-- Done getting pool data --\n')
}

const getTotalGmv = async () => {
  console.log('\n-- Getting total GMV --')
  const pools = await loadData(Cache, DB_CACHE_IDS.POOLS)
  const vaults = await loadData(Cache, DB_CACHE_IDS.VAULTS)

  if (!pools || !vaults) {
    console.log(`Error getting total GMV due to missing data. Pools: ${pools}, vaults: ${vaults}`)
    return
  }

  let totalGmv = new BigNumber(0),
    hasErrors

  const gmvList = {}

  for (let networkId in vaults) {
    for (let symbol in vaults[networkId]) {
      const vault = vaults[networkId][symbol]
      try {
        console.log('Got GMV for:', vault.id, ':', vault.totalValueLocked)
        gmvList[symbol] = vault.totalValueLocked
      } catch (err) {
        console.log(`Error getting GMV for: ${symbol}`, err)
        hasErrors = true
      }
      if (symbol == 'IFARM') {
        //Skip adding iFARM TVL to total because of duplicate with profit-sharing-farm
        continue
      }
      totalGmv = totalGmv.plus(vault.totalValueLocked)
    }
  }

  const relevantPools = pools['eth'].filter(
    pool =>
      pool.id === 'profit-sharing-farm' || pool.id === 'farm-weth' || pool.id === 'farm-grain',
  )

  await forEach(relevantPools, async relevantPool => {
    try {
      console.log('Got GMV for: ', relevantPool.id, ':', relevantPool.totalValueLocked)
      totalGmv = totalGmv.plus(relevantPool.totalValueLocked)
    } catch (err) {
      console.log(`Error getting GMV for: ${relevantPool.id}`, err)
      hasErrors = true
    }
  })

  await storeData(
    Cache,
    DB_CACHE_IDS.STATS,
    {
      totalGmv: totalGmv.toFixed(),
      gmvList,
    },
    hasErrors,
    false,
  )
  console.log('-- Done getting total GMV --\n')
}

const getWeeklyBuybacks = async () => {
  console.log('\n-- Getting weekly buybacks --')

  const vaults = await loadData(Cache, DB_CACHE_IDS.VAULTS)
  const pools = await loadData(Cache, DB_CACHE_IDS.POOLS)
  if (!vaults) {
    console.log(`Error getting weekly buybacks due to missing data. Vaults: ${vaults}`)
    return
  } else if (!pools) {
    console.log(`Error getting weekly buybacks due to missing data. Pools: ${pools}`)
    return
  }

  let totalWeeklyBuyback = new BigNumber(0),
    hasErrors

  const weeklyBuybackList = {},
    weeklyBuybackPerNetworkList = {}

  for (let networkId in vaults) {
    let weeklyBuybackPerNetwork = new BigNumber(0)
    for (let symbol in vaults[networkId]) {
      const vault = vaults[networkId][symbol]
      let weeklyBuyback = 0
      if (!vault.inactive && symbol != 'IFARM') {
        const tokenGmv = vault.totalValueLocked
        let profitSharingFactor = getProfitSharingFactor(vault.chain)
        let estimatedApy
        if (vault.isUniv3) {
          const poolToFetch = pools[networkId].find(
            pool =>
              pool.id === symbol ||
              (pool.collateralAddress &&
                pool.collateralAddress.toLowerCase() === vault.vaultAddress.toLowerCase()),
          )
          estimatedApy = poolToFetch.tradingApy
          if (vault.estimatedApy > 0) {
            estimatedApy = Number(estimatedApy) + Number(vault.estimatedApy)
          }
        } else if (vault.category == 'SUSHI_HODL') {
          profitSharingFactor = 0.85
          estimatedApy = vault.estimatedApy
        } else {
          estimatedApy = vault.estimatedApy
        }

        const dailyApr = Math.pow(Number(estimatedApy / 100) + 1, 1 / 365) - 1
        const weeklyApr = dailyApr * 7

        const weeklyRevenue = new BigNumber(tokenGmv)
          .multipliedBy(weeklyApr)
          .dividedBy(profitSharingFactor)

        weeklyBuyback = weeklyRevenue.times(1 - profitSharingFactor)

        weeklyBuybackList[symbol] = weeklyBuyback.toString()

        console.log(
          'Got weekly profit for: ',
          symbol,
          ':',
          weeklyBuyback.toFixed(4),
          '|',
          tokenGmv,
          estimatedApy,
          profitSharingFactor,
        )
      } else {
        weeklyBuybackList[symbol] = '0'
      }
      totalWeeklyBuyback = totalWeeklyBuyback.plus(weeklyBuyback)
      weeklyBuybackPerNetwork = weeklyBuybackPerNetwork.plus(weeklyBuyback)
    }
    weeklyBuybackPerNetworkList[networkId] = weeklyBuybackPerNetwork.toString()
  }

  await storeData(
    Cache,
    DB_CACHE_IDS.STATS,
    {
      weeklyBuyback: totalWeeklyBuyback.toFixed(),
      weeklyBuybackPerVault: weeklyBuybackList,
      weeklyBuybackPerNetwork: weeklyBuybackPerNetworkList,
    },
    hasErrors,
    false,
  )
  console.log('-- Done getting weekly buybacks --\n')
}

const getTotalRevenue = async () => {
  console.log('\n-- Getting total revenue --')

  const vaults = await loadData(Cache, DB_CACHE_IDS.VAULTS)
  const pools = await loadData(Cache, DB_CACHE_IDS.POOLS)
  if (!vaults) {
    console.log(`Error getting weekly buybacks due to missing data. Vaults: ${vaults}`)
    return
  } else if (!pools) {
    console.log(`Error getting weekly buybacks due to missing data. Pools: ${pools}`)
    return
  }

  let totalRevenue = new BigNumber(0),
    totalRevenueMonthly = new BigNumber(0),
    hasErrors

  const revenueList = {},
    apyList = {},
    revenueListMonthly = {},
    revenueListDaily = {}

  for (let networkId in vaults) {
    for (let symbol in vaults[networkId]) {
      const vault = vaults[networkId][symbol]
      let revenue = 0,
        revenueMonthly = 0
      if (!vault.inactive && symbol != 'IFARM') {
        const tokenGmv = vault.totalValueLocked
        let estimatedApy
        const pool = pools[networkId].find(pool => pool.id === symbol)
        if (pool?.type == 'UNIV3') {
          const poolToFetch = pools[networkId].find(
            pool =>
              pool.id === symbol ||
              (pool.collateralAddress &&
                pool.collateralAddress.toLowerCase() === vault.vaultAddress.toLowerCase()),
          )
          estimatedApy = poolToFetch.tradingApy
          if (vault.estimatedApy > 0) {
            estimatedApy = Number(estimatedApy) + Number(vault.estimatedApy)
          }
        } else {
          estimatedApy = vault.estimatedApy
        }

        const dailyApr = Math.pow(Number(estimatedApy / 100) + 1, 1 / 365) - 1
        const monthlyApy = (Math.pow(1 + dailyApr, 30) - 1) * 100

        const profitSharingFactor = getProfitSharingFactor(vault.chain)

        revenue = new BigNumber(tokenGmv)
          .multipliedBy(estimatedApy)
          .dividedBy(100)
          .dividedBy(profitSharingFactor)
        revenueMonthly = new BigNumber(tokenGmv)
          .multipliedBy(monthlyApy)
          .dividedBy(100)
          .dividedBy(profitSharingFactor)
        const revenueDaily = new BigNumber(tokenGmv)
          .multipliedBy(dailyApr)
          .dividedBy(100)
          .dividedBy(profitSharingFactor)

        apyList[symbol] = estimatedApy.toString()
        revenueList[symbol] = revenue.toString()
        revenueListMonthly[symbol] = revenueMonthly.toString()
        revenueListDaily[symbol] = revenueDaily.toString()

        console.log(
          'Got monthly revenue for: ',
          symbol,
          ':',
          revenueMonthly.toString(),
          '|',
          tokenGmv,
          estimatedApy,
          profitSharingFactor,
        )
      } else {
        console.log('skipping getting revenue for inactive vault: ', symbol)
        revenueListMonthly[symbol] = '0'
        revenueListDaily[symbol] = '0'
        apyList[symbol] = '0'
        revenueList[symbol] = '0'
      }

      totalRevenue = totalRevenue.plus(revenue)
      totalRevenueMonthly = totalRevenueMonthly.plus(revenueMonthly)
    }
  }

  await storeData(
    Cache,
    DB_CACHE_IDS.STATS,
    {
      totalRevenue: totalRevenue.toFixed(),
      monthlyRevenue: totalRevenueMonthly.toFixed(),
      revenueList,
      revenueListMonthly,
      apyList,
    },
    hasErrors,
    false,
  )
  console.log('-- Done getting total revenue --\n')
}

const getTVL = async () => {
  console.log('\n-- Getting TVL data --')
  const type = DB_CACHE_IDS.TVL
  const token_tvl = await Cache.collection.findOne({ type })
  let hasErrors

  for (const chain of Object.keys(CHAIN_IDS)) {
    console.log(`\n-- Get TVL data on ${chain} --`)
    const chainId = CHAIN_IDS[chain]
    const defaultTimeSpac = 86400
    const curList = token_tvl?.[chainId] || []
    const length = await getTvlDataLength(parseInt(chainId))
    let savedTimestamp = curList.length > 0 ? parseInt(curList[curList.length - 1].timestamp) : 0

    const lastId = parseInt(curList?.[curList.length - 1]?.sequenceId) || 0

    for (let i = lastId; i < length; i += 1000) {
      const response = await getTvlData(parseInt(chainId), Math.min(length - i, 1000), 0, i)
      let data = {},
        result = []

      for (let j = 0; j < response.length; j++) {
        if (parseInt(response[j].timestamp) >= savedTimestamp + defaultTimeSpac) {
          result.push(response[j])
          savedTimestamp = parseInt(response[j].timestamp)
        }
      }
      data[chainId] = { $each: result }
      await appendData(Cache, DB_CACHE_IDS.TVL, data, hasErrors)
      console.log(`Done with ${i}/${length}`)
    }
  }

  console.log(`\n-- Get FARM TVL data --`)

  const FarmList = token_tvl?.['FARM'] || []
  const lastSeqId = await getFarmTvlLength()
  const length = Math.ceil(lastSeqId / 1000) * 1000
  let savedTimestamp = FarmList.length > 0 ? parseInt(FarmList[FarmList.length - 1].timestamp) : 0
  const lastId = parseInt(FarmList?.[FarmList.length - 1]?.sequenceId) || 0
  for (let i = lastId; i < length; i += 1000) {
    const response = await getTvlData(
      1,
      Math.min(length - i, 1000),
      0,
      i,
      addresses.FARM.toLowerCase(),
    )
    let data = {},
      result = []

    for (let j = 0; j < response.length; j++) {
      if (parseInt(response[j].timestamp) >= savedTimestamp + 86400) {
        result.push(response[j])
        savedTimestamp = parseInt(response[j].timestamp)
      }
    }
    data = { FARM: { $each: result } }
    await appendData(Cache, DB_CACHE_IDS.TVL, data, hasErrors)
    console.log(`Done with ${i}/${length}`)
  }
  console.log('-- Done getting TVL data --\n')
}

const getCurrencyRates = async () => {
  console.log('\n-- Getting Currency Rates data --')
  let ratesData = {},
    hasErrors
  const type = DB_CACHE_IDS.RATES
  try {
    const res = (await client.get(CURRENCY_API_URL)).data
    ratesData = res.data
    hasErrors = false
  } catch (e) {
    hasErrors = true
    ratesData = await Cache.collection.findOne({ type })
  }

  await storeData(Cache, DB_CACHE_IDS.RATES, ratesData, hasErrors)
  console.log('-- Done getting Currency Rates data --\n')
}

const getHistoricalRates = async () => {
  console.log('\n-- Getting Historical Rates data --')
  const type = DB_CACHE_IDS.HISTORICAL_RATES
  const historical_rates = (await Cache.collection.findOne({ type })) ?? []
  const startTimeStamp = 1598918400000 // Sep.01.2020
  const defaultTimeSpac = 86400000

  let hasErrors

  const now = new Date()
  now.setHours(0, 0, 0, 0) // Set hours, minutes, seconds, and milliseconds to 0
  const curTimeStamp = now.getTime()

  const length = historical_rates?.USD?.length ?? 0
  let lastTimeStamp =
    length === 0 ? startTimeStamp : historical_rates.USD[length - 1].timestamp + defaultTimeSpac
  let x = 0
  while (lastTimeStamp < curTimeStamp && x < 10) {
    const date = new Date(lastTimeStamp)

    // Get the components of the date (year, month, and day)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0') // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0')

    // Construct the date string in the format "YYYY-MM-DD"
    const dateString = `${year}-${month}-${day}`
    console.log('date of rate : ', dateString)

    let response = {}

    try {
      response = await client.get(`${HISTORICAL_CURRENCY_API_URL}&date=${dateString}`)

      let rates = get(response, `data.data.${dateString}`)
      let appendDetail = {}
      for (const [currency, price] of Object.entries(rates)) {
        appendDetail[currency] = { timestamp: lastTimeStamp, price: price }
      }
      await appendData(Cache, DB_CACHE_IDS.HISTORICAL_RATES, appendDetail, hasErrors)
      lastTimeStamp = lastTimeStamp + defaultTimeSpac
    } catch (err) {
      logger.error('Error getting historical rates: ', err, lastTimeStamp)
    }
    x += 1
  }
  console.log('-- Done getting Historical Rates data --\n')
}

// const getSuperformRewardData = async () => {
//   console.log('\n-- Getting SuperForm Reward data --')

//   let data, hasErrors
//   try {
//     data = await superformRewardData()
//     hasErrors = false
//   } catch (e) {
//     hasErrors = true
//   }

//   await storeData(Cache, DB_CACHE_IDS.SF_REWARDS, data, hasErrors)
//   console.log('-- Done getting SuperForm Reward data --\n')
// }

const getLeaderboardData = async () => {
  console.log('\n-- Getting Leaderboard data --')
  let hasErrors = false

  const USER_IGNORE_LIST = [
    '0x917d6480ec60cbddd6cbd0c8ea317bcc709ea77b',
    '0x7b8ff8884590f44e10ea8105730fe637ce0cb4f6',
    '0xa3cf8d1cee996253fad1f8e3d68bdcba7b3a3db5',
    '0x3da9d911301f8144bdf5c3c67886e5373dcdff8e',
    '0x4f7c28ccb0f1dbd1388209c67eec234273c878bd',
    '0x6ac4a7ab91e6fd098e13b7d347c6d4d1494994a2',
    '0x7aeb36e22e60397098c2a5c51f0a5fb06e7b859c',
    '0x15d3a64b2d5ab9e152f16593cdebc4bb165b5b4a',
    '0xF1181A71CC331958AE2cA2aAD0784Acfc436CB93',
    '0x75071f2653fbc902ebaff908d4c68712a5d1c960',
    '0x156733b89ac5c704f3217fee2949a9d4a73764b5',
    '0xf1181a71cc331958ae2ca2aad0784acfc436cb93',
    '0x31a421271414641cb5063b71594b642d2666db6b',
    '0x7872893e528fe2c0829e405960db5b742112aa97',
    '0x0d877dc7c8fa3ad980dfdb18b48ec9f8768359c4',
  ]
  const CHAIN_NAMES = {
    1: 'eth',
    137: 'matic',
    8453: 'base',
    42161: 'arbitrum',
    324: 'zksync',
    999: 'hyperevm',
  }

  let sortable = {}
  try {
    const vaults = await loadData(Cache, DB_CACHE_IDS.VAULTS)
    const pools = await loadData(Cache, DB_CACHE_IDS.POOLS)

    let userBalances = {}
    for (let chain of Object.keys(HARVEST_SUBGRAPH_URLS)) {
      let maxValue = '1e99'
      let datapoints = 0
      for (let i = 0; i < 20; i++) {
        const data = await getBalanceData(chain, maxValue)

        for (let balance of data.userBalances) {
          const poolAddress = balance.vault.pool ? balance.vault.pool.id : 0
          const vaultAddress = balance.vault.id
          const user = balance.userAddress
          if (user == poolAddress || USER_IGNORE_LIST.includes(user)) {
            continue
          }
          let vault = Object.values(vaults[CHAIN_NAMES[chain]]).filter(
            vault => vault.vaultAddress.toLowerCase() == vaultAddress.toLowerCase(),
          )
          if (vault.length > 0) {
            vault = vault[0]
          } else {
            vault = 0
          }
          if (vault.id == 'IFARM') {
            vault.pricePerFullShare = new BigNumber(1e18)
          }
          const usdValue = new BigNumber(balance.value)
            .times(vault ? vault.usdPrice : balance.vault.priceUnderlying)
            .times(vault ? vault.pricePerFullShare : balance.vault.lastSharePrice)
            .div(
              vault
                ? new BigNumber(10).pow(Number(vault.decimals))
                : new BigNumber(10).pow(Number(balance.vault.decimal)),
            )
          if (usdValue.gt(0)) {
            userBalances[user] = userBalances[user] ? userBalances[user] : {}
            userBalances[user].totalBalance = userBalances[user].totalBalance
              ? userBalances[user].totalBalance + Number(usdValue.toFixed())
              : Number(usdValue.toFixed())
            userBalances[user].totalDailyYield = userBalances[user].totalDailyYield
              ? userBalances[user].totalDailyYield
              : 0
            userBalances[user].vaults = userBalances[user].vaults ? userBalances[user].vaults : {}
            userBalances[user].vaults[vaultAddress] = {}
            userBalances[user].vaults[vaultAddress].balance = Number(usdValue.toFixed())
            if (vault) {
              const apy = Number(vault.estimatedApy) / 100
              const dailyApr = (apy + 1) ** (1 / 365) - 1
              const dailyYield = usdValue.times(dailyApr).toFixed(4)
              userBalances[user].totalDailyYield = userBalances[user].totalDailyYield
                ? userBalances[user].totalDailyYield + Number(dailyYield)
                : Number(dailyYield)
              userBalances[user].vaults[vaultAddress].dailyYield = Number(dailyYield)
            }
            let pool = pools[CHAIN_NAMES[chain]].filter(
              pool => pool.collateralAddress.toLowerCase() == vaultAddress.toLowerCase(),
            )
            if (vaultAddress == '0x1571ed0bed4d987fe2b498ddbae7dfa19519f651') {
              const profitShare = pools[CHAIN_NAMES[chain]].filter(
                pool => pool.id == 'profit-sharing-farm',
              )
              const dailyApr =
                profitShare[0].rewardAPR.reduce((b, a) => b + Number(a), 0) / 100 / 365
              const dailyYield = usdValue.times(dailyApr).toFixed(4)
              userBalances[user].totalDailyYield = userBalances[user].totalDailyYield
                ? userBalances[user].totalDailyYield + Number(dailyYield)
                : Number(dailyYield)
              userBalances[user].vaults[vaultAddress].dailyYield = Number(dailyYield)
            }
            if (pool.length > 0) {
              pool = pool[0]
            } else {
              pool = 0
            }
            const poolBalance = new BigNumber(balance.poolBalance)
              .times(vault ? vault.usdPrice : balance.vault.priceUnderlying)
              .times(vault ? vault.pricePerFullShare : balance.vault.lastSharePrice)
              .div(
                vault
                  ? new BigNumber(10).pow(Number(vault.decimals))
                  : new BigNumber(10).pow(Number(balance.vault.decimal)),
              )
            if (pool) {
              const tradingApy = pool.tradingApy ? Number(pool.tradingApy) / 100 : 0
              const dailyTradingApr = tradingApy / 365
              const dailyTradingYield = usdValue.times(dailyTradingApr).toFixed(4)
              userBalances[user].totalDailyYield = userBalances[user].totalDailyYield
                ? userBalances[user].totalDailyYield + Number(dailyTradingYield)
                : Number(dailyTradingYield)
              userBalances[user].vaults[vaultAddress].dailyYield = userBalances[user].vaults[
                vaultAddress
              ].dailyYield
                ? userBalances[user].vaults[vaultAddress].dailyYield + Number(dailyTradingYield)
                : Number(dailyTradingYield)
              if (poolBalance.gt(0)) {
                const dailyApr = pool.rewardAPR.reduce((b, a) => b + Number(a), 0) / 100 / 365
                const dailyReward = poolBalance.times(dailyApr).toFixed(4)
                userBalances[user].totalDailyYield = userBalances[user].totalDailyYield
                  ? userBalances[user].totalDailyYield + Number(dailyReward)
                  : Number(dailyReward)
                userBalances[user].vaults[vaultAddress].dailyReward = Number(dailyReward)
              }
            }
          }
        }
        maxValue = data.userBalances[data.userBalances.length - 1].value
        datapoints += data.userBalances.length
        if (data.userBalances.length < 1000 || maxValue < 2) {
          break
        }
      }
      console.log(datapoints, 'data points processed on', CHAIN_NAMES[chain])

      if (chain == 8453 || chain == 42161) {
        let maxValue = '1e99'
        let datapoints = 0
        for (let i = 0; i < 20; i++) {
          const data = await getPlasmaBalanceData(chain, maxValue)
          const plasmaVaultData = {}

          for (let balance of data.plasmaUserBalances) {
            const vaultAddress = balance.plasmaVault.id
            if (!plasmaVaultData[vaultAddress]) {
              const data = await getPlasmaVaultData(chain, vaultAddress)
              plasmaVaultData[vaultAddress] = data.plasmaVaultHistories[0]
            }
            const vaultData = plasmaVaultData[vaultAddress]
            const user = balance.userAddress
            if (USER_IGNORE_LIST.includes(user)) {
              continue
            }
            let vault = Object.values(vaults[CHAIN_NAMES[chain]]).filter(
              vault => vault.vaultAddress.toLowerCase() == vaultAddress.toLowerCase(),
            )
            if (vault.length > 0) {
              vault = vault[0]
            } else {
              vault = 0
            }

            const usdValue = new BigNumber(balance.value)
              .times(vault ? vault.usdPrice : vaultData.priceUnderlying)
              .times(vault ? vault.pricePerFullShare : vaultData.sharePrice)
              .div(
                vault
                  ? new BigNumber(10).pow(Number(vault.vaultDecimals))
                  : new BigNumber(10).pow(Number(balance.plasmaVault.decimals)),
              )
              .div(
                vault
                  ? new BigNumber(10).pow(Number(vault.decimals))
                  : new BigNumber(10).pow(Number(balance.plasmaVault.decimals - 2)),
              )
            if (usdValue.gt(0)) {
              userBalances[user] = userBalances[user] ? userBalances[user] : {}
              userBalances[user].totalBalance = userBalances[user].totalBalance
                ? userBalances[user].totalBalance + Number(usdValue.toFixed())
                : Number(usdValue.toFixed())
              userBalances[user].totalDailyYield = userBalances[user].totalDailyYield
                ? userBalances[user].totalDailyYield
                : 0
              userBalances[user].vaults = userBalances[user].vaults ? userBalances[user].vaults : {}
              userBalances[user].vaults[vaultAddress] = {}
              userBalances[user].vaults[vaultAddress].balance = Number(usdValue.toFixed())
              if (vault) {
                const apy = Number(vault.estimatedApy) / 100
                const dailyApr = (apy + 1) ** (1 / 365) - 1
                const dailyYield = usdValue.times(dailyApr).toFixed(4)
                userBalances[user].totalDailyYield = userBalances[user].totalDailyYield
                  ? userBalances[user].totalDailyYield + Number(dailyYield)
                  : Number(dailyYield)
                userBalances[user].vaults[vaultAddress].dailyYield = Number(dailyYield)
              }
            }
          }

          maxValue = data.plasmaUserBalances[data.plasmaUserBalances.length - 1].value
          datapoints += data.plasmaUserBalances.length
          if (data.plasmaUserBalances.length < 1000 || maxValue < 2) {
            break
          }
        }
        console.log(datapoints, 'data points processed for IPOR vaults on', CHAIN_NAMES[chain])
      }
    }

    sortable = Object.entries(userBalances)
      .sort(([, a], [, b]) => b.totalBalance - a.totalBalance)
      .slice(0, 1000)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {})
    const tvl = Object.values(sortable).reduce((b, a) => b + a.totalBalance, 0)
    const users = Object.values(sortable).length
    console.log('Total TVL:  ', tvl, 'usd')
    console.log('Total users:', users)
  } catch (e) {
    console.log(e)
    hasErrors = true
  }

  await storeData(Cache, DB_CACHE_IDS.LEADERBOARD, sortable, hasErrors)
  console.log('-- Done getting Leaderboard data --\n')
}

const getUserTransactionsForChain = async (chainId, chainName) => {
  console.log(`\n-- Getting ${chainName} User Transactions (memory-bounded) --`)

  let boundaryKeys = null
  let saveBuffer = null

  try {
    let lastTimestamp = await getLastUserTransactionTimestamp(chainId)

    const chainStartTimestamp = Math.floor(USER_TRANSACTIONS_START_DATE.getTime() / 1000)
    if (!lastTimestamp) {
      lastTimestamp = chainStartTimestamp
      console.log(`[${chainName}] First run: querying from launch timestamp: ${lastTimestamp}`)
    } else {
      console.log(`[${chainName}] Querying transactions since timestamp: ${lastTimestamp}`)
    }

    const pageSize = 1000
    let currentTimestamp = lastTimestamp

    // Only dedupe across repeated "same timestamp" fetches.
    // Keep it bounded by tracking only the boundary timestamp.
    let boundaryTimestamp = null
    boundaryKeys = new Set()
    const MAX_BOUNDARY_KEYS = 50000
    const BOUNDARY_KEYS_CLEAR_THRESHOLD = 40000
    const SAVE_BATCH_SIZE = 1000
    saveBuffer = []

    let totalSaved = 0
    let maxSeenTimestamp = lastTimestamp

    // Safety brakes (avoid infinite loops / pathological upstream behavior)
    const MAX_PAGES_PER_RUN = 2000
    let pagesFetched = 0
    let sameCursorNoProgressCount = 0
    const MAX_NO_PROGRESS = 10

    // Use the smallest stable key you can.
    // If tx.tx is a tx hash and unique per event, that's ideal.
    // If you have logIndex or similar, prefer `${tx.tx}_${tx.logIndex}`.
    const makeKey = tx => {
      const vaultId = tx.vault?.id || tx.plasmaVault?.id || ''
      // If you can: return `${tx.tx}_${tx.logIndex ?? ''}`
      return `${tx.tx}_${tx.userAddress}_${tx.transactionType}_${vaultId}_${tx.timestamp}`
    }

    const flush = async () => {
      if (saveBuffer.length === 0) return
      // Save in chunks to avoid huge payloads and extra buffering
      const chunk = saveBuffer
      saveBuffer = []
      const result = await saveUserTransactions(chunk, chainId)
      totalSaved += result?.count ?? chunk.length
      // Clear chunk reference to help GC
      chunk.length = 0
    }

    let hasMore = true
    while (hasMore) {
      pagesFetched++
      if (pagesFetched > MAX_PAGES_PER_RUN) {
        console.warn(
          `[${chainName}] Hit MAX_PAGES_PER_RUN=${MAX_PAGES_PER_RUN}. Stopping to avoid runaway.`,
        )
        hasMore = false
        break
      }

      const transactions = await getUserTransactions(chainId, currentTimestamp, pageSize, 0)

      if (!transactions || transactions.length === 0) {
        hasMore = false
        break
      }

      // Compute latest timestamp in this page
      let pageMaxTs = 0
      for (const tx of transactions) {
        const ts = parseInt(tx.timestamp, 10)
        if (ts > pageMaxTs) pageMaxTs = ts
      }

      // Track global max seen
      if (pageMaxTs > maxSeenTimestamp) maxSeenTimestamp = pageMaxTs

      // Identify how many share the max timestamp
      let maxTsCount = 0
      for (const tx of transactions) {
        if (parseInt(tx.timestamp, 10) === pageMaxTs) maxTsCount++
      }

      // Decide where we go next
      // - If *all* tx are at the same timestamp and we have a full page,
      //   we must keep querying at the same timestamp. That's where we dedupe using boundaryKeys.
      // - Otherwise, move forward to avoid re-fetching the same page forever.
      const fullPage = transactions.length === pageSize
      const allSameTs = maxTsCount === transactions.length

      // Update boundary dedupe state
      if (boundaryTimestamp !== pageMaxTs) {
        boundaryTimestamp = pageMaxTs
        boundaryKeys = new Set()
      }

      if (boundaryKeys.size > BOUNDARY_KEYS_CLEAR_THRESHOLD) {
        console.warn(
          `[${chainName}] boundaryKeys size (${boundaryKeys.size}) approaching limit, clearing to prevent memory leak`,
        )
        boundaryKeys = new Set()
      }

      let newCountThisPage = 0

      for (const tx of transactions) {
        const ts = parseInt(tx.timestamp, 10)

        // Only apply dedupe when we're in the boundary timestamp zone.
        // For older timestamps, if your upstream can return overlaps, you may need more logic.
        if (ts === boundaryTimestamp) {
          if (boundaryKeys.size >= MAX_BOUNDARY_KEYS) {
            console.warn(
              `[${chainName}] boundaryKeys reached max size (${MAX_BOUNDARY_KEYS}), clearing to prevent memory leak`,
            )
            boundaryKeys = new Set()
          }
          const key = makeKey(tx)
          if (boundaryKeys.has(key)) continue
          boundaryKeys.add(key)
        }

        // Buffer for saving (bounded)
        saveBuffer.push(tx)
        newCountThisPage++

        if (saveBuffer.length >= SAVE_BATCH_SIZE) {
          await flush()
        }
      }

      // If nothing new was found, and we aren't making cursor progress, stop to avoid infinite loops.
      // (This can happen if upstream always returns the same page and our boundaryKeys filters everything.)
      if (newCountThisPage === 0) {
        sameCursorNoProgressCount++
        if (sameCursorNoProgressCount >= MAX_NO_PROGRESS) {
          console.warn(
            `[${chainName}] No progress for ${MAX_NO_PROGRESS} iterations at ts=${currentTimestamp}. Stopping to avoid infinite loop.`,
          )
          hasMore = false
          break
        }
      } else {
        sameCursorNoProgressCount = 0
      }

      if (!fullPage) {
        // We fetched the last page for this range
        hasMore = false
        break
      }

      // Move cursor
      if (allSameTs) {
        // Stay on the same timestamp; rely on boundaryKeys to avoid duplicates.
        // NOTE: If upstream doesn't provide stable ordering/cursor, this case is inherently inefficient.
        console.log(
          `[${chainName}] Page full and all ${transactions.length} share timestamp ${pageMaxTs}; querying same timestamp again...`,
        )
        // currentTimestamp unchanged
      } else {
        // If there are older timestamps in the page, jumping to pageMaxTs can still overlap.
        // But boundaryKeys handles duplicates at pageMaxTs (the overlap hotspot).
        currentTimestamp = pageMaxTs
      }

      // Small backoff
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    // Final flush
    await flush()

    boundaryKeys = null
    saveBuffer = null

    if (totalSaved > 0) {
      console.log(`[${chainName}] Saved ~${totalSaved} user transactions to Supabase`)
      console.log(`[${chainName}] Latest transaction timestamp seen: ${maxSeenTimestamp}`)
    } else {
      console.log(`[${chainName}] No new user transactions found`)
    }
  } catch (error) {
    logger.error(`Error getting ${chainName} user transactions:`, error)
    if (boundaryKeys) {
      boundaryKeys = null
    }
    saveBuffer = null
  }

  console.log(`-- Done getting ${chainName} User Transactions --\n`)
}

const getMainnetUserTransactions = async () => {
  await getUserTransactionsForChain(parseInt(CHAIN_IDS.ETH, 10), 'Mainnet')
}

const getPolygonUserTransactions = async () => {
  await getUserTransactionsForChain(parseInt(CHAIN_IDS.POLYGON, 10), 'Polygon')
}

const getArbitrumUserTransactions = async () => {
  await getUserTransactionsForChain(parseInt(CHAIN_IDS.ARBITRUM_ONE, 10), 'Arbitrum')
}

const getBaseUserTransactions = async () => {
  await getUserTransactionsForChain(parseInt(CHAIN_IDS.BASE, 10), 'Base')
}

const getZkSyncUserTransactions = async () => {
  await getUserTransactionsForChain(parseInt(CHAIN_IDS.ZKSYNC, 10), 'zkSync')
}

const getHyperEVMUserTransactions = async () => {
  await getUserTransactionsForChain(parseInt(CHAIN_IDS.HYPEREVM, 10), 'HyperEVM')
}

const preLoadCoingeckoPrices = async () => {
  console.log('\n-- Getting token prices from CoinGecko --')
  const tokens = await getUIData(UI_DATA_FILES.TOKENS)

  const addresses = {}
  const ids = {}

  for (let tokenSymbol of Object.keys(tokens)) {
    const priceFunction = tokens[tokenSymbol].priceFunction
    if (priceFunction && priceFunction.type === GET_PRICE_TYPES.COINGECKO_CONTRACT) {
      addresses[priceFunction.params[0].toLowerCase()] = true
    }

    if (priceFunction && priceFunction.type === GET_PRICE_TYPES.LP_TOKEN) {
      if (
        tokens[priceFunction.params[0]] &&
        !isArray(tokens[priceFunction.params[0]].tokenAddress)
      ) {
        addresses[tokens[priceFunction.params[0]].tokenAddress.toLowerCase()] = true
      }
      if (
        tokens[priceFunction.params[1]] &&
        !isArray(tokens[priceFunction.params[1]].tokenAddress)
      ) {
        addresses[tokens[priceFunction.params[1]].tokenAddress.toLowerCase()] = true
      }
    }

    if (priceFunction && priceFunction.type === GET_PRICE_TYPES.COINGECKO_ID) {
      ids[priceFunction.params[0].toLowerCase()] = true
    }
  }

  console.log('Caching token prices...')
  const addressesSorted = Object.keys(addresses).sort()
  const idsSorted = Object.keys(ids).sort()

  await prefetchPriceByAddresses(
    addressesSorted.join(),
    undefined,
    'usd',
    () => {
      console.log(`Prices fetched successfully for ${addressesSorted}`)
    },
    err => {
      logger.error(
        `Something went wrong during the preloading of prices through addresses! ${addressesSorted}`,
        err,
      )
    },
  )

  await prefetchPriceByIds(
    idsSorted.join(),
    'usd',
    () => {
      console.log(`Prices fetched successfully for ids: ${idsSorted}`)
    },
    err => {
      logger.error(
        `Something went wrong during the preloading of prices through ids! ${idsSorted}`,
        err,
      )
    },
  )
}

const v8 = require('v8')
const logMem = label => {
  const m = process.memoryUsage()
  console.log(label, {
    rssMB: (m.rss / 1024 / 1024).toFixed(1),
    heapUsedMB: (m.heapUsed / 1024 / 1024).toFixed(1),
    heapTotalMB: (m.heapTotal / 1024 / 1024).toFixed(1),
    externalMB: (m.external / 1024 / 1024).toFixed(1),
    arrayBuffersMB: (m.arrayBuffers / 1024 / 1024).toFixed(1),
  })

  const heap = v8.getHeapStatistics()
  console.log('heapStats', {
    totalAvailMB: (heap.total_available_size / 1024 / 1024).toFixed(1),
    mallocedMB: (heap.malloced_memory / 1024 / 1024).toFixed(1),
    externalMemMB: (heap.external_memory / 1024 / 1024).toFixed(1),
  })
  const heaps = v8.getHeapSpaceStatistics()
  console.table(
    heaps.map(hs => ({
      space: hs.space_name,
      usedMB: (hs.space_used_size / 1024 / 1024).toFixed(1),
      availableMB: (hs.space_available_size / 1024 / 1024).toFixed(1),
      totalMB: (hs.space_size / 1024 / 1024).toFixed(1),
    })),
  )
}

const runUpdateLoop = async () => {
  console.log('\n-- Starting data fetching --')
  logMem('Memory usage at start of update loop:')

  if (DEBUG_MODE) {
    console.log('\n##################       DEBUG MODE       ###################')
    resetCallCount()
    cache.set(WEB3_CALL_COUNT_STATS_KEY, {
      pools: [],
      vaults: [],
      cmc: 0,
      gmv: 0,
      revenue: 0,
      tokenStats: 0,
      profit: 0,
      tvl: 0,
      nanoly: 0,
      sfrewards: 0,
      rates: 0,
      historical_rates: 0,
      leaderboard: 0,
      gmx: 0,
      clTest: 0,
    })
  }

  await preLoadCoingeckoPrices()
  await getTokenStats()
  if (DEBUG_MODE) {
    updateCallCountCache('tokenStats')
    resetCallCount()
  }

  await getPools()

  logMem('Memory usage after getPools:')

  await getVaults()

  logMem('Memory usage after getVaults:')

  await getMainnetUserTransactions()
  await getPolygonUserTransactions()
  await getArbitrumUserTransactions()
  await getBaseUserTransactions()
  await getZkSyncUserTransactions()
  await getHyperEVMUserTransactions()

  if (ACTIVE_ENDPOINTS === ENDPOINT_TYPES.ALL || ACTIVE_ENDPOINTS === ENDPOINT_TYPES.EXTERNAL) {
    await getTotalGmv()
    if (DEBUG_MODE) {
      updateCallCountCache('gmv')
      resetCallCount()
    }

    await getWeeklyBuybacks()
    if (DEBUG_MODE) {
      updateCallCountCache('profit')
      resetCallCount()
    }

    await getTotalRevenue()
    if (DEBUG_MODE) {
      updateCallCountCache('revenue')
      resetCallCount()
    }

    await getTVL()
    if (DEBUG_MODE) {
      updateCallCountCache('tvl')
      resetCallCount()
    }

    // await getNanolyData()
    // if (DEBUG_MODE) {
    //   updateCallCountCache('nanoly')
    //   resetCallCount()
    // }

    // await getSuperformRewardData()
    // if (DEBUG_MODE) {
    //   updateCallCountCache('sfrewards')
    //   resetCallCount()
    // }
  }

  await checkFoldingLeverage()

  await getCurrencyRates()
  if (DEBUG_MODE) {
    updateCallCountCache('rates')
    resetCallCount()
  }

  await getHistoricalRates()
  if (DEBUG_MODE) {
    updateCallCountCache('historical_rates')
    resetCallCount()
  }

  await getLeaderboardData()
  if (DEBUG_MODE) {
    updateCallCountCache('leaderboard')
    resetCallCount()
  }

  await getGmxData()
  if (DEBUG_MODE) {
    updateCallCountCache('gmx')
    resetCallCount()
  }

  await getCLData()
  if (DEBUG_MODE) {
    updateCallCountCache('clTest')
    resetCallCount()
  }

  if (DEBUG_MODE) {
    printCallCountResults()
  }
  console.log('-- Done with data fetching --')
  logMem('Memory usage at end of update loop:')
}

const startPollers = async () => {
  await runUpdateLoop()

  setInterval(async () => {
    await runUpdateLoop()
  }, UPDATE_LOOP_INTERVAL_MS)
}

const cliPreload = async () => {
  await preLoadCoingeckoPrices()
  await getTokenStats()
}

module.exports = {
  startPollers,
  cliPreload,
  getLeaderboardData,
}
