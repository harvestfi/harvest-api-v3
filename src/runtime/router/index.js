const {
  API_KEY,
  ENDPOINT_TYPES,
  ACTIVE_ENDPOINTS,
  DB_CACHE_IDS,
  HEALTH_ALERT_TIME_MS,
  CHAIN_IDS,
  CURRENCY_RATES,
} = require('../../lib/constants')
const {
  validateAPIKey,
  asyncWrap,
  validateTokenSymbol,
  walletConnectRateLimit,
} = require('./middleware')
const { Cache } = require('../../lib/db/models/cache')
const { getTotalBalance } = require('../../lib/third-party/debank')
const { saveWalletConnection, isWalletLoggedToday } = require('../../lib/db/supabase')
const { get } = require('lodash')
const cors = require('cors')
const { default: BigNumber } = require('bignumber.js')
const { formatTimeago } = require('../../lib/utils.js')

const initRouter = app => {
  app.use(validateAPIKey(API_KEY))

  if (ACTIVE_ENDPOINTS === ENDPOINT_TYPES.ALL || ACTIVE_ENDPOINTS === ENDPOINT_TYPES.EXTERNAL) {
    app.get(
      '/revenue/total',
      asyncWrap(async (req, res) => {
        const dbField = 'data.totalRevenue'
        const queryResponse = await Cache.findOne({ type: DB_CACHE_IDS.STATS }, { [dbField]: 1 })
        res.send(get(queryResponse, dbField, '0'))
      }),
    )

    app.get(
      '/revenue/monthly',
      asyncWrap(async (req, res) => {
        const dbField = 'data.monthlyRevenue'
        const queryResponse = await Cache.findOne({ type: DB_CACHE_IDS.STATS }, { [dbField]: 1 })
        res.send(get(queryResponse, dbField, '0'))
      }),
    )

    app.get(
      '/gmv/total',
      asyncWrap(async (req, res) => {
        const dbField = 'data.totalGmv'
        const queryResponse = await Cache.findOne({ type: DB_CACHE_IDS.STATS }, { [dbField]: 1 })
        res.send(get(queryResponse, dbField, '0'))
      }),
    )

    app.get(
      '/token-stats',
      asyncWrap(async (req, res) => {
        const dbField = 'data.tokenStats'
        const queryResponse = await Cache.findOne({ type: DB_CACHE_IDS.STATS }, { [dbField]: 1 })
        res.send(get(queryResponse, dbField, {}))
      }),
    )

    app.get(
      '/buybacks/total',
      asyncWrap(async (req, res) => {
        const dbField = 'data.weeklyBuyback'
        const queryResponse = await Cache.findOne({ type: DB_CACHE_IDS.STATS }, { [dbField]: 1 })
        res.send(get(queryResponse, dbField, {}))
      }),
    )

    app.get(
      '/buybacks/per-network',
      asyncWrap(async (req, res) => {
        const dbField = 'data.weeklyBuybackPerNetwork'
        const queryResponse = await Cache.findOne({ type: DB_CACHE_IDS.STATS }, { [dbField]: 1 })
        res.send(get(queryResponse, dbField, {}))
      }),
    )

    app.get(
      '/buybacks/per-vault',
      asyncWrap(async (req, res) => {
        const dbField = 'data.weeklyBuybackPerVault'
        const queryResponse = await Cache.findOne({ type: DB_CACHE_IDS.STATS }, { [dbField]: 1 })
        res.send(get(queryResponse, dbField, {}))
      }),
    )

    app.get(
      '/buybacks/:symbol',
      validateTokenSymbol,
      asyncWrap(async (req, res) => {
        const tokenSymbol = req.params.symbol.toUpperCase()

        const dbField = `data.weeklyBuybackPerVault.${tokenSymbol}`
        const queryResponse = await Cache.findOne({ type: DB_CACHE_IDS.STATS }, { [dbField]: 1 })
        res.send(get(queryResponse, dbField, '0'))
      }),
    )

    app.get(
      '/revenue/_debug',
      asyncWrap(async (req, res) => {
        const results = {}

        const allVaults = await Cache.findOne({ type: DB_CACHE_IDS.VAULTS })
        const allStats = await Cache.findOne({ type: DB_CACHE_IDS.STATS })

        for (let chainName of Object.keys(allVaults.data)) {
          results[chainName] = Object.keys(allVaults.data[chainName]).map(name => {
            const vault = get(allVaults, `data.[${chainName}][${name}]`, {})
            const tvl = new BigNumber(vault.underlyingBalanceWithInvestment)
              .dividedBy(new BigNumber(10).pow(18))
              .times(vault.usdPrice)
              .toFixed(2)
            const yearlyApy = get(allStats, `data.apyList.${name}`, 0)
            const dailyApr = Math.pow(Number(yearlyApy / 100) + 1, 1 / 365) - 1
            const monthlyApy = ((Math.pow(1 + dailyApr, 30) - 1) * 100).toString()
            const yearlyProfit = get(allStats, `data.revenueList.${name}`, 0)
            const monthlyProfit = get(allStats, `data.revenueListMonthly.${name}`, 0)
            const percentageOfMonthlyRevenue = new BigNumber(monthlyProfit)
              .dividedBy(get(allStats, 'data.monthlyRevenue', 1))
              .times(100)
              .toFixed()

            return {
              name,
              tvl,
              yearlyApy,
              monthlyApy: monthlyApy.toString(),
              dailyApr: dailyApr.toString(),
              percentageOfMonthlyRevenue,
              yearlyProfit,
              monthlyProfit,
            }
          })
        }

        res.send(results)
      }),
    )

    app.get(
      '/revenue/:symbol',
      validateTokenSymbol,
      asyncWrap(async (req, res) => {
        const tokenSymbol = req.params.symbol.toUpperCase()

        const dbField = `data.revenueList.${tokenSymbol}`
        const queryResponse = await Cache.findOne({ type: DB_CACHE_IDS.STATS }, { [dbField]: 1 })
        res.send(get(queryResponse, dbField, '0'))
      }),
    )

    app.get(
      '/apy/:symbol',
      validateTokenSymbol,
      asyncWrap(async (req, res) => {
        const tokenSymbol = req.params.symbol.toUpperCase()

        const dbField = `data.apyList.${tokenSymbol}`
        const queryResponse = await Cache.findOne({ type: DB_CACHE_IDS.STATS }, { [dbField]: 1 })
        res.send(get(queryResponse, dbField, '0'))
      }),
    )

    app.get(
      '/gmv/:symbol',
      validateTokenSymbol,
      asyncWrap(async (req, res) => {
        const tokenSymbol = req.params.symbol.toUpperCase()

        const dbField = `data.gmvList.${tokenSymbol}`
        const queryResponse = await Cache.findOne({ type: DB_CACHE_IDS.STATS }, { [dbField]: 1 })
        res.send(get(queryResponse, dbField, '0'))
      }),
    )

    app.get(
      '/tokens-info',
      asyncWrap(async (req, res) => {
        const tokenStatsData = await Cache.findOne(
          { type: DB_CACHE_IDS.STATS },
          { ['data.tokenStats']: 1 },
        )
        const monthlyStatsData = await Cache.findOne(
          { type: DB_CACHE_IDS.STATS },
          { ['data.monthlyRevenue']: 1 },
        )
        res.send({
          tokenStats: get(tokenStatsData, 'data.tokenStats', {}),
          monthly: get(monthlyStatsData, 'data.monthlyRevenue', '0'),
        })
      }),
    )

    app.get(
      '/nanoly',
      asyncWrap(async (req, res) => {
        const dbField = 'data.nanolyEndPointData'
        const queryResponse = await Cache.findOne({ type: DB_CACHE_IDS.STATS }, { [dbField]: 1 })

        res.send(get(queryResponse, dbField, {}))
      }),
    )

    app.get(
      '/tvl',
      asyncWrap(async (req, res) => {
        let dataInit = {},
          dataFinal = {}
        for (const chain of Object.keys(CHAIN_IDS)) {
          const chainId = CHAIN_IDS[chain]
          dataInit[chainId] = await Cache.findOne({ type: DB_CACHE_IDS.TVL }, { [chainId]: 1 })
        }
        dataInit['FARM'] = await Cache.findOne({ type: DB_CACHE_IDS.TVL }, { ['FARM']: 1 })

        for (const i of Object.keys(dataInit)) {
          dataFinal[i] = get(dataInit[i], i, [])
        }

        res.send(dataFinal)
      }),
    )

    app.get(
      '/superform-reward/:vault',
      asyncWrap(async (req, res) => {
        const vaultAddress = req.params.vault.toLowerCase()

        const dbField = `data.${vaultAddress}`
        const queryResponse = await Cache.findOne(
          { type: DB_CACHE_IDS.SF_REWARDS },
          { [dbField]: 1 },
        )
        res.send(get(queryResponse, dbField, '0'))
      }),
    )
  }

  if (ACTIVE_ENDPOINTS === ENDPOINT_TYPES.ALL || ACTIVE_ENDPOINTS === ENDPOINT_TYPES.INTERNAL) {
    app.get(
      '/pools',
      asyncWrap(async (req, res) => {
        const allPools = await Cache.findOne({ type: DB_CACHE_IDS.POOLS })
        const updatedAt = get(allPools, 'updatedAt')
        res.send({
          updatedAt: {
            apiData: updatedAt,
            lastUpdated: formatTimeago(updatedAt),
          },
          ...get(allPools, 'data', {}),
        })
      }),
    )

    app.get(
      '/vaults',
      asyncWrap(async (req, res) => {
        const allVaults = await Cache.findOne({ type: DB_CACHE_IDS.VAULTS })
        const updatedAt = get(allVaults, 'updatedAt')
        res.send({
          updatedAt: {
            apiData: updatedAt,
            lastUpdated: formatTimeago(updatedAt),
          },
          ...get(allVaults, 'data', {}),
        })
      }),
    )
  }

  // api health
  app.get(
    '/health',
    asyncWrap(async (req, res) => {
      const vaultsData = await Cache.findOne({ type: DB_CACHE_IDS.VAULTS })
      const poolsData = await Cache.findOne({ type: DB_CACHE_IDS.POOLS })
      const vaultsUpdateTime = get(vaultsData, 'updatedAt')
      const vaultsDiff = new Date().getTime() - new Date(vaultsUpdateTime).getTime()
      const poolsUpdateTime = get(poolsData, 'updatedAt')
      const poolsDiff = new Date().getTime() - new Date(poolsUpdateTime).getTime()
      res.send({
        vaults: {
          updatedAt: vaultsUpdateTime,
          lastUpdated: formatTimeago(vaultsUpdateTime),
          status: vaultsDiff > HEALTH_ALERT_TIME_MS ? 'NOT OK' : 'OK',
        },
        pools: {
          updatedAt: poolsUpdateTime,
          lastUpdated: formatTimeago(poolsUpdateTime),
          status: poolsDiff > HEALTH_ALERT_TIME_MS ? 'NOT OK' : 'OK',
        },
      })
    }),
  )

  // currency rates
  app.get(
    '/rates',
    asyncWrap(async (req, res) => {
      const rate = await Cache.findOne({ type: DB_CACHE_IDS.RATES })
      res.send({
        ...get(rate, 'data', {}),
      })
    }),
  )

  // historical currency rates
  app.get(
    '/historical-rates',
    asyncWrap(async (req, res) => {
      const rate = await Cache.findOne({ type: DB_CACHE_IDS.HISTORICAL_RATES })
      let currencyRates = {}
      CURRENCY_RATES.forEach(currency => {
        currencyRates[currency] = rate.get(currency)
      })
      res.send(currencyRates)
    }),
  )

  app.get(
    '/leaderboard',
    asyncWrap(async (req, res) => {
      const data = await Cache.findOne({ type: DB_CACHE_IDS.LEADERBOARD })
      res.send({
        ...get(data, 'data', {}),
      })
    }),
  )

  app.get(
    '/gmx-data',
    asyncWrap(async (req, res) => {
      const data = await Cache.findOne({ type: DB_CACHE_IDS.GMX_DATA })
      res.send({
        ...get(data, 'data', {}),
      })
    }),
  )

  app.get(
    '/cl-data',
    asyncWrap(async (req, res) => {
      const data = await Cache.findOne({ type: DB_CACHE_IDS.CL_DATA })
      res.send({
        ...get(data, 'data', {}),
      })
    }),
  )

  // Apply specific CORS settings for this endpoint (explicit origins, credentials: false)
  const walletConnectCors = cors({
    origin: process.env.WALLET_CONNECT_CORS_ORIGINS
      ? process.env.WALLET_CONNECT_CORS_ORIGINS.split(';').filter(Boolean)
      : ['http://localhost:3001'], // Default for development
    credentials: false,
    methods: ['POST'],
    allowedHeaders: ['Content-Type'],
  })

  // Wallet connect endpoint - stores wallet addresses from frontend to Supabase
  app.post(
    '/wallet-connect',
    walletConnectCors, // Apply specific CORS settings
    walletConnectRateLimit, // Apply rate limiting
    asyncWrap(async (req, res) => {
      const { walletAddress } = req.body

      if (!walletAddress) {
        return res.status(400).json({ error: 'walletAddress is required' })
      }

      // Validate wallet address format (basic check - should be hex string)
      const addressRegex = /^0x[a-fA-F0-9]{40}$/
      if (!addressRegex.test(walletAddress)) {
        return res.status(400).json({ error: 'Invalid wallet address format' })
      }

      try {
        const connectedAt = new Date()
        const normalizedAddress = walletAddress.toLowerCase()

        const alreadyLogged = await isWalletLoggedToday(normalizedAddress, connectedAt)

        if (alreadyLogged) {
          return res.json({
            success: true,
            message: 'Wallet already logged today',
            walletAddress: normalizedAddress,
            alreadyLogged: true,
          })
        }

        const balance = await getTotalBalance(normalizedAddress)

        await saveWalletConnection({
          walletAddress: normalizedAddress,
          connectedAt,
          balance,
        })

        res.json({
          success: true,
          message: 'Wallet connection recorded',
          walletAddress: normalizedAddress,
          connectedAt,
          balance,
        })
      } catch (error) {
        console.error('Error saving wallet connection:', error)
        // If Supabase is not configured, provide helpful error message
        if (error.message && error.message.includes('Supabase client not initialized')) {
          return res.status(500).json({
            error: 'Database not configured. Please configure Supabase credentials.',
          })
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }),
  )
}

module.exports = { initRouter }
