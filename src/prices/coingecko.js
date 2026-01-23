const axios = require('axios')
const { get } = require('lodash')
const rateLimit = require('axios-rate-limit')
const { setupCache, buildStorage } = require('axios-cache-interceptor')

const { cache } = require('../lib/cache')
const {
  COINGECKO_PRICE_API_ENDPOINT_CONTRACT,
  COINGECKO_PRICE_API_ENDPOINT_ID,
  COINGECKO_API_KEY,
  CG_CACHE_TTL,
  CHAIN_IDS,
} = require('../lib/constants')

const cacheMap = new Map()

const storage = buildStorage({
  find(key) {
    return cacheMap.get(key)
  },
  set(key, value) {
    cacheMap.set(key, value)
  },
  remove(key) {
    cacheMap.delete(key)
  },
  clear() {
    cacheMap.clear()
  },
})
// Base axios instance
const base = rateLimit(
  axios.create({
    timeout: 15_000, // important: avoid hanging sockets
  }),
  { maxRequests: 95, perMilliseconds: 60_000, maxRPS: 1 },
)

// Attach cache interceptor
const cgCall = setupCache(base, {
  ttl: CG_CACHE_TTL, // ms
  storage,
  // cacheTakeover: false, // optional
  // interpretHeader: false, // optional
})

setInterval(() => {
  // crude byte estimate (optional; can be expensive if values are huge)
  let approxBytes = 0
  for (const v of cacheMap.values()) {
    try {
      approxBytes += Buffer.byteLength(JSON.stringify(v))
    } catch (_) {}
  }

  console.log('[cg cache]', {
    entries: cacheMap.size,
    approxMB: Math.round((approxBytes / 1024 / 1024) * 10) / 10,
  })
  const keys = [...cacheMap.keys()]
  console.log('[cg cache keys]', {
    total: keys.length,
    sample: keys.slice(0, 20),
  })
}, 10_000)

const getPlatformId = chain => {
  switch (chain) {
    case CHAIN_IDS.POLYGON:
      return 'polygon-pos'
    case CHAIN_IDS.ARBITRUM_ONE:
      return 'arbitrum-one'
    case CHAIN_IDS.BASE:
      return 'base'
    case CHAIN_IDS.ZKSYNC:
      return 'zksync'
    case CHAIN_IDS.HYPEREVM:
      return 'hyperevm'
    default:
      return 'ethereum'
  }
}

const priceByAddresses = (contractAddresses, ourChainId = CHAIN_IDS.ETH, currency = 'usd') =>
  cgCall
    .get(`${COINGECKO_PRICE_API_ENDPOINT_CONTRACT}/${getPlatformId(ourChainId)}`, {
      params: {
        contract_addresses: contractAddresses,
        vs_currencies: currency,
        x_cg_pro_api_key: COINGECKO_API_KEY,
      },
    })
    .then(res => {
      if (!res?.data || !Object.keys(res.data).length) {
        throw new Error(`No price for ${contractAddresses}`)
      }
      return Object.keys(res.data).map(address => {
        const fetchedAddress = address.toLowerCase()
        const fetchedPrice = get(res, `data[${address}][${currency}]`, 0)
        cache.set(`tokenPrice${fetchedAddress}${ourChainId}${currency}`, fetchedPrice)
        return fetchedPrice
      })
    })
    .catch(err => {
      console.error(`Error getting price from CoinGecko for token at: ${contractAddresses}`, {
        message: err.message,
        status: err.response?.status,
      })
      throw err
    })

const priceByIds = (ids, currency) =>
  cgCall
    .get(COINGECKO_PRICE_API_ENDPOINT_ID, {
      params: {
        ids,
        vs_currencies: currency,
        x_cg_pro_api_key: COINGECKO_API_KEY,
      },
    })
    .then(res => {
      if (!res?.data || !Object.keys(res.data).length) {
        throw new Error(`No price for ${ids}`)
      }
      return Object.keys(res.data).map(id => {
        const fetchedPrice = get(res, `data[${id}][${currency}]`, 0)
        cache.set(`tokenPrice${id}${CHAIN_IDS.ETH}${currency}`, fetchedPrice)
        return fetchedPrice
      })
    })
    .catch(err => {
      console.error(`Error getting price from CoinGecko for token at: ${ids}`, {
        message: err.message,
        status: err.response?.status,
      })
      throw err
    })

const getTokenPriceByAddress = async (
  contractAddress,
  ourChainId = CHAIN_IDS.ETH,
  currency = 'usd',
) => {
  const formatted = contractAddress.toLowerCase()
  const cached = cache.get(`tokenPrice${formatted}${ourChainId}${currency}`)
  if (cached) return cached
  const result = await priceByAddresses(formatted, ourChainId, currency)
  return result[0]
}

const getTokenPriceById = async (id, currency = 'usd', ourChainId = CHAIN_IDS.ETH) => {
  const cached = cache.get(`tokenPrice${id}${ourChainId}${currency}`)
  if (cached) return cached
  const result = await priceByIds(id, currency)
  return result[0]
}

module.exports = {
  getTokenPriceByAddress,
  getTokenPriceById,
  priceByAddresses,
  priceByIds,
}
