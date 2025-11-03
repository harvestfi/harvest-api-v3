require('dotenv').config()
const INFURA_URL =
  process.env.MAINNET_RPC_URL || `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`
const INFURA_WS_URL =
  process.env.MAINNET_WS_URL || `wss://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`
const COINGECKO_PRICE_API_ENDPOINT_CONTRACT = process.env.COINGECKO_API_KEY
  ? 'https://pro-api.coingecko.com/api/v3/simple/token_price'
  : 'https://api.coingecko.com/api/v3/simple/token_price'
const COINGECKO_PRICE_API_ENDPOINT_ID = process.env.COINGECKO_API_KEY
  ? 'https://pro-api.coingecko.com/api/v3/simple/price'
  : 'https://api.coingecko.com/api/v3/simple/price'
const API_KEY = process.env.API_KEY || 'harvest-key'
const APY_VISION_TOKEN = process.env.APY_VISION_TOKEN
const COINGECKO_API_KEY = process.env.COINGECKO_API_KEY
const FOLD_CHECK_DISCORD_WEBHOOK = process.env.FOLD_CHECK_DISCORD_WEBHOOK

const POOL_TYPES = {
  INCENTIVE: 'INCENTIVE',
  PROFIT_SHARING: 'PROFIT_SHARING',
  INCENTIVE_BUYBACK: 'INCENTIVE_BUYBACK',
  INACTIVE: 'INACTIVE',
  UNIV3: 'UNIV3',
}

const GET_PRICE_TYPES = {
  COINGECKO_CONTRACT: 'COINGECKO_CONTRACT',
  COINGECKO_ID: 'COINGECKO_ID',
  F_TOKEN: 'F_TOKEN',
  LP_TOKEN: 'LP_TOKEN',
  TOKEN_TO_USD_FARM: 'TOKEN_TO_USD_FARM',
  UNISWAP_PAIR: 'UNISWAP_PAIR',
  MANUAL: 'MANUAL',
  F_TOKEN_ID: 'F_TOKEN_ID',
  SUSHISWAP_PAIR: 'SUSHISWAP_PAIR',
  UNISWAP_V3: 'UNISWAP_V3',
  CURVE_POOL: 'CURVE_POOL',
  BALANCER: 'BALANCER',
  FARMSTEAD_USDC: 'FARMSTEAD_USDC',
  WRAPPED_TOKEN: 'WRAPPED_TOKEN',
}

const ESTIMATED_APY_TYPES = {
  NULL: 'NULL',
  CRV_GENERAL: 'CRV_GENERAL',
  MANUAL: 'MANUAL',
  SNX: 'SNX',
  MANUAL_NON_COMPOUNDING: 'MANUAL_NON_COMPOUNDING',
  COMPOUND: 'COMPOUND',
  SUSHI: 'SUSHI',
  IDLE_FINANCE: 'IDLE_FINANCE',
  NARWHALE: 'NARWHALE',
  NATIVE_SUSHI: 'NATIVE_SUSHI',
  SUSHI_PLUS_NATIVE: 'SUSHI_PLUS_NATIVE',
  MUSE: 'MUSE',
  ONEINCH: 'ONEINCH',
  GOOSE: 'GOOSE',
  BDO: 'BDO',
  SWIRL: 'SWIRL',
  COMPFI: 'COMPFI',
  CONVEX: 'CONVEX',
  BALANCER: 'BALANCER',
  BALANCER_POLYGON: 'BALANCER_POLYGON',
  MSTABLE: 'MSTABLE',
  LOOKSRARE_SINGLE_ASSET: 'LOOKSRARE_SINGLE_ASSET',
  STAKEWISE: 'STAKEWISE',
  AURA: 'AURA',
  BASESWAP: 'BASESWAP',
}

const TRADING_APY_TYPES = {
  BALANCER: 'BALANCER',
  UNIV3: 'UNIV3',
  UNIV3_V2: 'UNIV3_V2',
  RARI_FARMSTEAD_USDC: 'RARI_FARMSTEAD_USDC',
  CONVEX: 'CONVEX',
  MSTABLE: 'MSTABLE',
  LOOKS: 'LOOKS',
}

const COLLATERAL_TYPE = {
  NULL: 'NULL',
  BTC: 'BTC',
  ETH: 'ETH',
  LP: 'LP',
}

const ENDPOINT_TYPES = {
  ALL: 'all',
  INTERNAL: 'internal',
  EXTERNAL: 'external',
}

const CORS_SETTINGS = {
  origin: ['https://localhost:3000']
    .concat(process.env.CORS_STRINGS ? process.env.CORS_STRINGS.split(';') : [])
    .concat(
      process.env.CORS_REGEXPS
        ? process.env.CORS_REGEXPS.split(';').map(regExAsString => new RegExp(regExAsString))
        : [],
    ),
}

const UPDATE_LOOP_INTERVAL_MS = parseInt(process.env.UPDATE_LOOP_INTERVAL_MS, 10) || 3600000 // Default: 1 Hour
const HEALTH_ALERT_TIME_MS = parseInt(process.env.HEALTH_ALERT_TIME_MS, 10) || 5400000 // Default: 1.5 Hour

const ACTIVE_ENDPOINTS = (process.env.ACTIVE_ENDPOINTS || ENDPOINT_TYPES.ALL).toLowerCase() // Default: ENDPOINT_TYPES.ALL

const CG_CACHE_TTL = parseInt(process.env.CG_CACHE_TTL, 10) || 600000 // Default: 10 Mins in ms

const GENERAL_CACHE_TTL = parseInt(process.env.GENERAL_CACHE_TTL, 10) || 600 // 10 Mins in s
const UI_DATA_CACHE_TTL = parseInt(process.env.UI_DATA_CACHE_TTL, 10) || 14400 // 4 Hours in s

const MAIN_CACHE_KEYS = {
  POOLS: 'pools',
  VAULTS: 'vaults',
  REVENUE: 'totalRevenue',
  REVENUE_MONTHLY: 'totalRevenueMonthly',
  GMV: 'totalGmv',
  CMC: 'cmc',
  TOKEN_STATS: 'tokenStats',
}

const HARVEST_LAUNCH_DATE = new Date(1598986800000) // Tuesday, September 1, 2020 7:00:00 PM UTC

const COMPOUND_CTOKEN_API_URL = 'https://api.compound.finance/api/v2/ctoken'

const APY_VISION_API_URL = 'https://stats.apy.vision/api/v1'

const CONVEX_API_URLS = {
  137: 'https://curve.convexfinance.com/api/curve-polygon-apys',
  42161: 'https://curve.convexfinance.com/api/curve-arbitrum-apys',
}

const HARVEST_SUBGRAPH_URLS = {
  1:
    process.env.MAINNET_SUBGRAPH_URL ||
    'https://api.studio.thegraph.com/query/48757/harvest-mainnet-test/v0.0.10',
  137:
    process.env.POLYGON_SUBGRAPH_URL ||
    'https://api.studio.thegraph.com/query/48757/l2-polygon-test/v0.0.23',
  8453:
    process.env.BASE_SUBGRAPH_URL ||
    'https://api.studio.thegraph.com/query/48757/harvest-base/v0.0.24',
  42161:
    process.env.ARBITRUM_SUBGRAPH_URL ||
    'https://api.studio.thegraph.com/query/48757/harvest-arbitrum/v0.0.19',
  324:
    process.env.ZKSYNC_SUBGRAPH_URL ||
    'https://api.studio.thegraph.com/query/48757/l2-zksync-era/v0.1.12',
  999:
    process.env.HYPEREVM_SUBGRAPH_URL ||
    'https://api.studio.thegraph.com/query/48757/harvest-hyperliquid/v0.0.1',
}

const SUSHI_POOLS_IDS = {
  USDT: 0,
  USDC: 1,
  DAI: 2,
  WBTC: 21,
  SUSHI: 12,
  UST: 85,
  PERP: 156,
}

const SUSHI_GRAPHQL_ENDPOINTS_TYPES = {
  BAR: 'BAR',
  EXCHANGE: 'EXCHANGE',
  ETH: 'ETH',
}

const SUSHI_GRAPHQL_ENDPOINTS = {
  BAR: 'https://api.thegraph.com/subgraphs/name/sushi-labs/xsushi',
  EXCHANGE: 'https://api.thegraph.com/subgraphs/name/sushiswap/exchange',
  ETH: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks',
}

const CHAIN_IDS = {
  ETH: '1',
  POLYGON: '137',
  BASE: '8453',
  ARBITRUM_ONE: '42161',
  ZKSYNC: '324',
  HYPEREVM: '999',
}

const MATIC_RPC_URL =
  process.env.MATIC_RPC_URL || `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`
const BASE_RPC_URL =
  process.env.BASE_RPC_URL || `https://base-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`
const ARBITRUM_RPC_URL =
  process.env.ARBITRUM_RPC_URL || `https://arb-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`
const ZKSYNC_RPC_URL =
  process.env.ZKSYNC_RPC_URL || `https://zksync-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`
const HYPEREVM_RPC_URL =
  process.env.HYPEREVM_RPC_URL || `https://hyperliquid-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`
const SWIRL_API_URL = 'https://api.swirl.cash/'
const MSTABLE_API_URL = 'https://api.mstable.org/pools'
const APE_API_URL = 'https://ape-swap-api.herokuapp.com'

const WOMBAT_ARB_SUBGRAPH_URL = `https://gateway-arbitrum.network.thegraph.com/api/${process.env.SUBGRAPH_KEY}/subgraphs/id/5YPaz7z5iYgboKtoShdvZYPohUKtrDLibcLSLzaC424M`

const BALANCER_GRAPHQL_URL = `https://api-v3.balancer.fi/graphql`

const LIDO_API_URLS = { ETH: 'https://eth-api.lido.fi/v1/protocol/steth/apr/sma' }
const ROCKETPOOL_API_URLS = { ETH: 'https://api.rocketpool.net/api/apr' }

const STAKEWISE_API_URLS = {
  LIQUIDITY: 'https://api.stakewise.io/uniswap-pools/',
  STAKING: 'https://api.stakewise.io/pool-stats/',
}

const ZKSWAP_URL =
  'https://zkswap-dex-api-git-production-buzzteam.vercel.app/api/pools-data/zksyncMainnet'

const SYNCSWAP_API_URL =
  'https://api.syncswap.xyz/api/fetchers/fetchAllPools?network=zkSyncMainnet&type=v2'

const SYNCSWAP_FEE_API_URL = 'https://api.syncswap.xyz/api/fetchers/fetchFees?network=zkSyncMainnet'

const SYNCSWAP_SUBGRAPH_URL =
  'https://api.studio.thegraph.com/query/30365/zksync-blocks/version/latest'

const DEXSCREENER_API_URL = 'https://api.dexscreener.com/latest/dex/tokens'

const CURVE_API_URLS = {
  8453: 'https://api.curve.finance/api/getVolumes/base',
  42161: 'https://api.curve.finance/api/getVolumes/arbitrum',
}

const GAMMA_ENDPOINT = 'https://wire2.gamma.xyz/'
const MERKL_ENDPOINT = 'https://api.angle.money/v3/'
const CAMELOT_MERKL_ENDPOINT = 'https://api.camelot.exchange/campaigns?chainId=42161'
const PENDLE_ENDPOINT = 'https://api-v2.pendle.finance/core/v2/'
const MORPHO_ENDPOINT = 'https://blue-api.morpho.org/graphql'
const FLUID_ENDPOINT = 'https://api.fluid.instadapp.io/v2/lending'
const EULER_ENDPOINT = 'https://indexer-main.euler.finance/v1/earn/vault'
const SILO_ENDPOINT = 'https://app.silo.finance/api/detailed-vault'

const CURRENCY_API_URL = `https://api.freecurrencyapi.com/v1/latest?apikey=${process.env.CURRENCY_API_KEY}`
const HISTORICAL_CURRENCY_API_URL = `https://api.freecurrencyapi.com/v1/historical?apikey=${process.env.CURRENCY_API_KEY}`

const DEBUG_MODE = process.env.DEBUG_MODE

const WEB3_CALL_COUNT_STATS_KEY = 'web3CallCountStats'
const WEB3_CALL_COUNT_KEY = 'web3CallCount'

const GET_POOL_DATA_BATCH_SIZE = DEBUG_MODE
  ? 1
  : parseInt(process.env.GET_POOL_DATA_BATCH_SIZE || '15', 10)
const GET_VAULT_DATA_BATCH_SIZE = DEBUG_MODE
  ? 1
  : parseInt(process.env.GET_VAULT_DATA_BATCH_SIZE || '15', 10)

const DB_CACHE_IDS = {
  VAULTS: 0,
  POOLS: 1,
  STATS: 2,
  CMC: 3,
  UI_DATA: 4,
  EXTERNAL_API: 5,
  TVL: 6,
  RATES: 7,
  HISTORICAL_RATES: 8,
  SF_REWARDS: 9,
  LEADERBOARD: 10,
  GMX_DATA: 11,
  CL_DATA: 12,
}

const PROFIT_SHARING_POOL_ID = 'profit-sharing-farm'

const UI_DATA_FILES = {
  POOLS: 'pools',
  TOKENS: 'tokens',
}

const CURRENCY_RATES = [
  'AUD',
  'BGN',
  'BRL',
  'CAD',
  'CHF',
  'CNY',
  'CZK',
  'DKK',
  'EUR',
  'GBP',
  'HKD',
  'HRK',
  'HUF',
  'IDR',
  'ILS',
  'INR',
  'ISK',
  'JPY',
  'KRW',
  'MXN',
  'MYR',
  'NOK',
  'NZD',
  'PHP',
  'PLN',
  'RON',
  'RUB',
  'SEK',
  'SGD',
  'THB',
  'TRY',
  'USD',
  'ZAR',
]

module.exports = {
  WEB3_CALL_COUNT_STATS_KEY,
  WEB3_CALL_COUNT_KEY,
  GET_POOL_DATA_BATCH_SIZE,
  CHAIN_IDS,
  INFURA_URL,
  INFURA_WS_URL,
  COINGECKO_PRICE_API_ENDPOINT_CONTRACT,
  COINGECKO_PRICE_API_ENDPOINT_ID,
  API_KEY,
  APY_VISION_API_URL,
  APY_VISION_TOKEN,
  FOLD_CHECK_DISCORD_WEBHOOK,
  POOL_TYPES,
  GET_PRICE_TYPES,
  ESTIMATED_APY_TYPES,
  CORS_SETTINGS,
  UPDATE_LOOP_INTERVAL_MS,
  HEALTH_ALERT_TIME_MS,
  GENERAL_CACHE_TTL,
  MAIN_CACHE_KEYS,
  ENDPOINT_TYPES,
  ACTIVE_ENDPOINTS,
  HARVEST_LAUNCH_DATE,
  COMPOUND_CTOKEN_API_URL,
  GET_VAULT_DATA_BATCH_SIZE,
  SUSHI_POOLS_IDS,
  CG_CACHE_TTL,
  COLLATERAL_TYPE,
  SUSHI_GRAPHQL_ENDPOINTS_TYPES,
  SUSHI_GRAPHQL_ENDPOINTS,
  SWIRL_API_URL,
  MSTABLE_API_URL,
  DEBUG_MODE,
  DB_CACHE_IDS,
  PROFIT_SHARING_POOL_ID,
  UI_DATA_FILES,
  UI_DATA_CACHE_TTL,
  MATIC_RPC_URL,
  TRADING_APY_TYPES,
  BALANCER_GRAPHQL_URL,
  LIDO_API_URLS,
  ROCKETPOOL_API_URLS,
  STAKEWISE_API_URLS,
  APE_API_URL,
  GAMMA_ENDPOINT,
  MERKL_ENDPOINT,
  CAMELOT_MERKL_ENDPOINT,
  PENDLE_ENDPOINT,
  ARBITRUM_RPC_URL,
  CONVEX_API_URLS,
  COINGECKO_API_KEY,
  HARVEST_SUBGRAPH_URLS,
  BASE_RPC_URL,
  DEXSCREENER_API_URL,
  CURVE_API_URLS,
  WOMBAT_ARB_SUBGRAPH_URL,
  CURRENCY_API_URL,
  HISTORICAL_CURRENCY_API_URL,
  ZKSYNC_RPC_URL,
  HYPEREVM_RPC_URL,
  CURRENCY_RATES,
  ZKSWAP_URL,
  SYNCSWAP_API_URL,
  SYNCSWAP_FEE_API_URL,
  SYNCSWAP_SUBGRAPH_URL,
  MORPHO_ENDPOINT,
  FLUID_ENDPOINT,
  EULER_ENDPOINT,
  SILO_ENDPOINT,
}
