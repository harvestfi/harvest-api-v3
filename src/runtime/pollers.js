const BigNumber = require('bignumber.js')
const axios = require('axios')

const { forEach } = require('promised-loops')
const { pickBy, chunk, isArray, size } = require('lodash')

const { getVaultsData } = require('../vaults')
const { getPoolsData } = require('../pools')
const {
  getPercentOfFARMStaked,
  getHistoricalAverageProfitSharingAPY,
  getTotalGasSaved,
  getTotalMarketCap,
  getMonthlyProfits,
} = require('../lib/token-stats')
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
} = require('../lib/constants')
const { Cache } = require('../lib/db/models/cache')
const { storeData, appendData, loadData } = require('../lib/db/models/cache')
const { getUIData } = require('../lib/data')
const addresses = require('../lib/data/addresses.json')
const { getTvlDataLength, getTvlData, getFarmTvlLength } = require('../lib/third-party/tvl')

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
    default:
      return 0.85
  }
}

const getVaults = async () => {
  console.log('\n-- Getting vaults data --')
  const tokens = await getUIData(UI_DATA_FILES.TOKENS)
  let fetchedETHVaults = [],
    fetchedMATICVaults = [],
    fetchedARBITRUMVaults = [],
    fetchedBASEVaults = [],
    fetchedZKSYNCVaults = [],
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
  console.log('\n-- Getting ZKSYNC vaults data --')
  await forEach(zksyncVaultsBatches, async batch => {
    if (batch) {
      try {
        console.log('Getting vault data for: ', batch)
        const vaultsData = await getVaultsData(batch)
        fetchedZKSYNCVaults = fetchedZKSYNCVaults.concat(vaultsData)
      } catch (err) {
        hasErrors = true
        console.error(`Failed to get vault data for: ${batch}`, err)
      }
    }
  })
  console.log('\n-- Done getting ZKSYNC vaults data --')

  console.log('\n-- Getting MATIC vaults data --')
  await forEach(maticVaultsBatches, async batch => {
    try {
      console.log('Getting vault data for: ', batch)
      const vaultsData = await getVaultsData(batch)
      fetchedMATICVaults = fetchedMATICVaults.concat(vaultsData)
    } catch (err) {
      hasErrors = true
      console.error(`Failed to get vault data for: ${batch}`, err)
    }
  })
  console.log('\n-- Done getting MATIC vaults data --')

  console.log('\n-- Getting ARBITRUM vaults data --')
  await forEach(arbitrumVaultsBatches, async batch => {
    if (batch) {
      try {
        console.log('Getting vault data for: ', batch)
        const vaultsData = await getVaultsData(batch)
        fetchedARBITRUMVaults = fetchedARBITRUMVaults.concat(vaultsData)
      } catch (err) {
        hasErrors = true
        console.error(`Failed to get vault data for: ${batch}`, err)
      }
    }
  })
  console.log('\n-- Done getting ARBITRUM vaults data --')

  console.log('\n-- Getting ETH vaults data --')
  await forEach(ethVaultsBatches, async batch => {
    try {
      console.log('Getting vault data for: ', batch)
      const vaultsData = await getVaultsData(batch)
      fetchedETHVaults = fetchedETHVaults.concat(vaultsData)
    } catch (err) {
      hasErrors = true
      console.error(`Failed to get vault data for: ${batch}`, err)
    }
  })
  console.log('\n-- Done getting ETH vaults data --')

  console.log('\n-- Getting BASE vaults data --')
  await forEach(baseVaultsBatches, async batch => {
    if (batch) {
      try {
        console.log('Getting vault data for: ', batch)
        const vaultsData = await getVaultsData(batch)
        fetchedBASEVaults = fetchedBASEVaults.concat(vaultsData)
      } catch (err) {
        hasErrors = true
        console.error(`Failed to get vault data for: ${batch}`, err)
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
    console.error('Failed to get percent of farm staked: ', err)
  }

  try {
    console.log('Getting FARM price historical average')
    tokenStats.historicalAverageProfitSharingAPY = await getHistoricalAverageProfitSharingAPY()
  } catch (err) {
    console.error('Failed to get historical average of FARM price: ', err)
  }

  try {
    console.log('Getting total gas saved by protocol')
    tokenStats.totalGasSaved = await getTotalGasSaved()
  } catch (err) {
    console.error('Failed to get total gas saved by protocol: ', err)
  }

  try {
    console.log('Getting total FARM market cap')
    tokenStats.totalMarketCap = await getTotalMarketCap()
  } catch (err) {
    console.error('Failed to get total FARM market cap: ', err)
  }

  try {
    console.log('Getting monthly profit')
    tokenStats.monthlyProfits = await getMonthlyProfits()
  } catch (err) {
    console.error('Failed to get monthly profits: ', err)
  }

  const hasErrors =
    !tokenStats.percentStaked ||
    tokenStats.historicalAverageProfitSharingAPY == undefined ||
    tokenStats.historicalAverageProfitSharingAPY == null ||
    !tokenStats.totalGasSaved ||
    !tokenStats.totalMarketCap

  await storeData(
    Cache,
    DB_CACHE_IDS.STATS,
    {
      tokenStats,
    },
    hasErrors,
  )
  console.log('-- Done getting FARM token stats --\n')
}

const getPools = async () => {
  const pools = await getUIData(UI_DATA_FILES.POOLS)
  let fetchedETHPools = [],
    fetchedMATICPools = [],
    fetchedARBITRUMPools = [],
    fetchedBASEPools = [],
    fetchedZKSYNCPools = [],
    fetchedPools = [],
    hasErrors

  try {
    console.log('\n-- Getting ZKSYNC pool data --')

    const zksyncPoolBatches = chunk(
      pools.filter(pool => pool.chain === CHAIN_IDS.ZKSYNC),
      GET_POOL_DATA_BATCH_SIZE,
    )

    if (size(zksyncPoolBatches)) {
      await forEach(zksyncPoolBatches, async poolBatch => {
        const poolData = await getPoolsData(poolBatch)
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
        const poolData = await getPoolsData(poolBatch)
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
        const poolData = await getPoolsData(poolBatch)
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
        const poolData = await getPoolsData(poolBatch)
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
        const poolData = await getPoolsData(poolBatch)
        fetchedETHPools = fetchedETHPools.concat(poolData)
      })
    } else {
      console.log('No pools available')
    }
    console.log('-- Done getting ETH pool data --\n')
  } catch (err) {
    console.error('error getting pools', err)
    hasErrors = true
  }

  fetchedPools = {
    eth: fetchedETHPools,
    matic: fetchedMATICPools,
    arbitrum: fetchedARBITRUMPools,
    base: fetchedBASEPools,
    zksync: fetchedZKSYNCPools,
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
      (fetchedZKSYNCPools.includes(undefined) || fetchedZKSYNCPools.includes(null)))
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
  )
  console.log('-- Done getting total revenue --\n')
}

const getNanolyData = async () => {
  console.log('\n-- Getting Nanoly endpoint data --')

  const vaults = await loadData(Cache, DB_CACHE_IDS.VAULTS)
  const pools = await loadData(Cache, DB_CACHE_IDS.POOLS)
  const token_stats = await loadData(Cache, DB_CACHE_IDS.STATS)
  if (!vaults) {
    console.log(`Error getting Nanoly endpoint data due to missing data. Vaults: ${vaults}`)
    return
  } else if (!pools) {
    console.log(`Error getting Nanoly endpoint data due to missing data. Pools: ${pools}`)
    return
  }
  let results = [],
    hasErrors
  for (let networkId in vaults) {
    for (let symbol in vaults[networkId]) {
      if (symbol.toLowerCase().includes('univ3')) {
        continue
      }
      const vault = vaults[networkId][symbol]
      let reward = 0
      let rewards = {}
      if (!vault.inactive) {
        const pool = pools[networkId].find(
          pool =>
            pool.id === symbol ||
            (pool.collateralAddress &&
              pool.collateralAddress.toLowerCase() === vault.vaultAddress.toLowerCase()),
        )
        const vaultAddress = vault.vaultAddress
        const tokenAddress = vault.tokenAddress
        const tokens = vault.tokenNames
        let base
        if (pool && pool.tradingApy) {
          base = (Number(vault.estimatedApy) + Number(pool.tradingApy)) / 100
        } else {
          base = Number(vault.estimatedApy) / 100
        }
        if (pool && vault.id != 'IFARM') {
          pool.rewardAPY.forEach((e, i) => {
            symbol = pool.rewardTokenSymbols[i] === 'miFARM' ? 'iFARM' : pool.rewardTokenSymbols[i]
            rewards[symbol] = Number(pool.rewardAPY[i]) / 100
            reward = reward + Number(pool.rewardAPY[i]) / 100
          })
        } else {
          reward = Number(token_stats.tokenStats['historicalAverageProfitSharingAPY']) / 100
          rewards = {
            FARM: reward,
          }
        }
        const tvl = Number(vault.totalValueLocked).toFixed(2)

        const ppfs = new BigNumber(vault.pricePerFullShare).div(10 ** vault.decimals)
        const composition = {
          [tokenAddress]: ppfs.toFixed(),
        }

        let url, chain
        if (networkId == 'eth') {
          chain = 'ethereum'
          if (vault.id == 'IFARM') {
            url = `https://app.harvest.finance/ethereum/${vault.tokenAddress}`
          } else {
            url = `https://app.harvest.finance/ethereum/${vault.vaultAddress}`
          }
        } else if (networkId == 'matic') {
          chain = 'polygon'
          url = `https://app.harvest.finance/polygon/${vault.vaultAddress}`
        } else if (networkId == 'arbitrum') {
          chain = 'arbitrum'
          url = `https://app.harvest.finance/arbitrum/${vault.vaultAddress}`
        } else if (networkId == 'base') {
          chain = 'base'
          url = `https://app.harvest.finance/base/${vault.vaultAddress}`
        } else if (networkId == 'zksync') {
          chain = 'zksync'
          url = `https://app.harvest.finance/zksync/${vault.vaultAddress}`
        }

        let result = {
          chain,
          tokens,
          vaultAddress,
          tokenAddress,
          base,
          reward,
          rewards,
          url,
          tvl,
          composition,
          active: true,
        }
        results.push(result)
      }
    }
  }

  await storeData(
    Cache,
    DB_CACHE_IDS.STATS,
    {
      nanolyEndPointData: results,
    },
    hasErrors,
  )
  console.log('-- Done getting Nanoly endpoint data --\n')
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
  }
  console.log('-- Done getting TVL data --\n')
}

const getCurrencyRates = async () => {
  console.log('\n-- Getting Currency Rates data --')
  let ratesData = {},
    hasErrors
  const type = DB_CACHE_IDS.RATES
  try {
    const res = (await axios.get(CURRENCY_API_URL)).data
    ratesData = res.data
    hasErrors = false
  } catch (e) {
    hasErrors = true
    ratesData = await Cache.collection.findOne({ type })
  }

  await storeData(Cache, DB_CACHE_IDS.RATES, ratesData, hasErrors)
  console.log('-- Done getting Currency Rates data --\n')
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
  await prefetchPriceByAddresses(
    Object.keys(addresses).join(),
    undefined,
    'usd',
    () => {
      console.log(`Prices fetched successfully for ${addresses}`)
    },
    err => {
      console.log(
        `Something went wrong during the preloading of prices through addresses! ${addresses}`,
        err,
      )
    },
  )

  await prefetchPriceByIds(
    Object.keys(ids).join(),
    'usd',
    () => {
      console.log(`Prices fetched successfully for ids: ${ids}`)
    },
    err => {
      console.log(`Something went wrong during the preloading of prices through ids! ${ids}`, err)
    },
  )
}

const runUpdateLoop = async () => {
  console.log('\n-- Starting data fetching --')

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
    })
  }

  await preLoadCoingeckoPrices()
  await getTokenStats()
  if (DEBUG_MODE) {
    updateCallCountCache('tokenStats')
    resetCallCount()
  }

  await getPools()
  await getVaults()

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

    await getNanolyData()
    if (DEBUG_MODE) {
      updateCallCountCache('cmc')
      resetCallCount()
    }

    await getCurrencyRates()
    if (DEBUG_MODE) {
      updateCallCountCache('rates')
      resetCallCount()
    }
  }

  if (DEBUG_MODE) {
    printCallCountResults()
  }
  console.log('-- Done with data fetching --')
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
}
