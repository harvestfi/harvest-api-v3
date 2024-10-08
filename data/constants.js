const CHAIN_IDS = {
  ETH_MAINNET: '1',
  ETH_ROPSTEN: '3',
  POLYGON_MAINNET: '137',
  BASE: '8453',
  ARBITRUM_ONE: '42161',
  ZKSYNC: '324',
}

const GET_PRICE_TYPES = {
  NULL: 'NULL',
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
  BALANCER_POLYGON: 'BALANCER_POLYGON',
  LP_TOKEN_THREE_WAY: 'LP_TOKEN_THREE_WAY',
  KYBER_PAIR: 'KYBER_PAIR',
  NOTIONAL: 'NOTIONAL',
  MESHSWAP_PAIR: 'MESHSWAP_PAIR',
  WRAPPED_TOKEN: 'WRAPPED_TOKEN',
  GAMMA_API: 'GAMMA_API',
  GAMMA_ONCHAIN: 'GAMMA_ONCHAIN',
  STARGATE_LP_TOKEN: 'STARGATE_LP_TOKEN',
  VERSE: 'VERSE',
  BASESWAP_PAIR: 'BASESWAP_PAIR',
  AERODROME_PAIR: 'AERODROME_PAIR',
  PENDLE_MARKET: 'PENDLE_MARKET',
  VELOCORE: 'VELOCORE',
  HOP_LP: 'HOP_LP',
  SYNCSWAP_POOL: 'SYNCSWAP_POOL',
}

const ESTIMATED_APY_TYPES = {
  NULL: 'NULL',
  CRV_GENERAL: 'CRV_GENERAL',
  CURVE_GAUGE: 'CURVE_GAUGE',
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
  BDO: 'BDO',
  SWIRL: 'SWIRL',
  COMPFI: 'COMPFI',
  CONVEX: 'CONVEX',
  BALANCER: 'BALANCER',
  BALANCER_POLYGON: 'BALANCER_POLYGON',
  UNI_V3: 'UNI_V3',
  LOOKSRARE: 'LOOKSRARE',
  QUICKSWAP_DUAL_REWARD: 'QUICKSWAP_DUAL_REWARD',
  MSTABLE: 'MSTABLE',
  LOOKSRARE_SINGLE_ASSET: 'LOOKSRARE_SINGLE_ASSET',
  STAKEWISE: 'STAKEWISE',
  BALANCER_GAUGE: 'BALANCER_GAUGE',
  BALANCER_GAUGE_SIDECHAIN: 'BALANCER_GAUGE_SIDECHAIN',
  NOTIONAL: 'NOTIONAL',
  APE: 'APE',
  MESHSWAP: 'MESHSWAP',
  AURA: 'AURA',
  APE_STAKE: 'APE_STAKE',
  GAMMA_API: 'GAMMA_API',
  ARBITRUM_CURVE: 'ARBITRUM_CURVE',
  STARGATE: 'STARGATE',
  SOLIDLIZARD: 'SOLIDLIZARD',
  POISON: 'POISON',
  POISON_HODL: 'POISON_HODL',
  CONVEX_L2: 'CONVEX_L2',
  VERSE: 'VERSE',
  CAMELOT_XGRAIL: 'CAMELOT_XGRAIL',
  CAMELOT_LP: 'CAMELOT_LP',
  BASESWAP: 'BASESWAP',
  BASESWAP_V2: 'BASESWAP_V2',
  COMPOUND_V3: 'COMPOUND_V3',
  AERODROME: 'AERODROME',
  CAVIAR: 'CAVIAR',
  PEARL_HODL: 'PEARL_HODL',
  BASED: 'BASED',
  MOONWELL_FOLD: 'MOONWELL_FOLD',
  MOONWELL_SUPPLY: 'MOONWELL_SUPPLY',
  JONES: 'JONES',
  MAGPIE: 'MAGPIE',
  LODESTAR_FOLD: 'LODESTAR_FOLD',
  LODESTAR_FOLD_HODL_COMPOUNDING: 'LODESTAR_FOLD_HODL_COMPOUNDING',
  LODESTAR_FOLD_HODL_HODLING: 'LODESTAR_FOLD_HODL_HODLING',
  LODESTAR_STAKE: 'LODESTAR_STAKE',
  SEAMLESS_FOLD: 'SEAMLESS_FOLD',
  RADPIE: 'RADPIE',
  MERKL: 'MERKL',
  AAVE_SUPPLY: 'AAVE_SUPPLY',
  PENPIE: 'PENPIE',
  ZKSWAP: 'ZKSWAP',
  VELOCORE: 'VELOCORE',
  REACTORFUSION_FOLD: 'REACTORFUSION_FOLD',
  HOP: 'HOP',
  UNISWAP_GAMMA: 'UNISWAP_GAMMA',
  EXTRAFI_LEND: 'EXTRAFI_LEND',
  FLUID_LEND: 'FLUID_LEND',
  DOLOMITE_LEND: 'DOLOMITE_LEND',
  SYNCSWAP: 'SYNCSWAP',
}

const COLLATERAL_TYPE = {
  NULL: 'NULL',
  BTC: 'BTC',
  ETH: 'ETH',
  LP: 'LP',
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

const TRADING_APY_TYPES = {
  LP: 'LP',
  BALANCER: 'BALANCER',
  UNIV3: 'UNIV3',
  UNIV3_V2: 'UNIV3_V2',
  UNIV3_V3: 'UNIV3_V3',
  UNIV3_APYVISION: 'UNIV3_APYVISION',
  RARI_FARMSTEAD_USDC: 'RARI_FARMSTEAD_USDC',
  CONVEX: 'CONVEX',
  MSTABLE: 'MSTABLE',
  LOOKS: 'LOOKS',
  APE: 'APE',
  GAMMA_API: 'GAMMA_API',
  ARBITRUM_CURVE: 'ARBITRUM_CURVE',
  CONVEX_L2: 'CONVEX_L2',
  CAMELOT: 'CAMELOT',
  BASESWAP: 'BASESWAP',
  CURVE_API: 'CURVE_API',
  MAGPIE: 'MAGPIE',
  PENPIE: 'PENPIE',
  PROFIT_SHARE: 'PROFIT_SHARE',
  UNISWAP_GAMMA_API: 'UNISWAP_GAMMA_API',
  NOTIONAL_API: 'NOTIONAL_API',
  ZKSWAP: 'ZKSWAP',
}

const POOL_TYPES = {
  INCENTIVE: 'INCENTIVE',
  PROFIT_SHARING: 'PROFIT_SHARING',
  INCENTIVE_BUYBACK: 'INCENTIVE_BUYBACK',
  INACTIVE: 'INACTIVE',
  UNIV3: 'UNIV3',
}

const ARBITRUM_SUSHI_POOLS_IDS = {
  ETH_DAI: 14,
  ETH_GOHM: 12,
  ETH_MAGIC: 13,
  ETH_MIM: 9,
  ETH_SPELL: 11,
  ETH_SUSHI: 2,
}

module.exports = {
  CHAIN_IDS,
  GET_PRICE_TYPES,
  ESTIMATED_APY_TYPES,
  COLLATERAL_TYPE,
  SUSHI_POOLS_IDS,
  TRADING_APY_TYPES,
  POOL_TYPES,
  ARBITRUM_SUSHI_POOLS_IDS,
}
