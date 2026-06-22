const { sumBy, orderBy, isArray } = require('lodash')
const { Web3 } = require('web3')
const { HttpProvider } = require('web3-providers-http')
const HttpAgent = require('agentkeepalive')
const { HttpsAgent } = require('agentkeepalive')
const {
  INFURA_URL,
  MATIC_RPC_URL,
  ARBITRUM_RPC_URL,
  BASE_RPC_URL,
  ZKSYNC_RPC_URL,
  HYPEREVM_RPC_URL,
  CHAIN_IDS,
  WEB3_CALL_COUNT_STATS_KEY,
  WEB3_CALL_COUNT_KEY,
} = require('../constants')
const { cache } = require('../cache')

// web3 v4's HttpProvider uses node-fetch, which by default opens a brand-new
// TCP+TLS connection for every JSON-RPC call. On a shared-egress host (Heroku)
// that connection churn trips NAT/conntrack limits and the provider's per-IP
// new-connection throttling, surfacing as `ERR_STREAM_PREMATURE_CLOSE`. Reuse a
// bounded pool of keep-alive sockets and evict idle ones before they go stale.
const keepAliveOptions = {
  keepAlive: true,
  maxSockets: Number(process.env.WEB3_MAX_SOCKETS ?? 25),
  maxFreeSockets: 10,
  timeout: 60_000, // active socket inactivity timeout
  freeSocketTimeout: 4_000, // close idle sockets after 4s to avoid stale reuse
}
const httpKeepAliveAgent = new HttpAgent(keepAliveOptions)
const httpsKeepAliveAgent = new HttpsAgent(keepAliveOptions)
// node-fetch accepts `agent` as a function (parsedURL) => Agent
const agentSelector = parsedURL =>
  parsedURL.protocol === 'http:' ? httpKeepAliveAgent : httpsKeepAliveAgent

// Transient socket-level failures that are safe to retry for idempotent reads.
const RETRYABLE_CODES = new Set([
  'ERR_STREAM_PREMATURE_CLOSE',
  'ECONNRESET',
  'ETIMEDOUT',
  'EPIPE',
  'UND_ERR_SOCKET',
])

const errorCode = err => err && (err.code || (err.cause && err.cause.code))

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const createProvider = url => {
  const provider = new HttpProvider(url, {
    providerOptions: { agent: agentSelector },
  })

  const originalRequest = provider.request.bind(provider)
  const maxAttempts = Number(process.env.WEB3_MAX_RETRIES ?? 3)

  provider.request = async (payload, requestOptions) => {
    let lastError
    for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
      try {
        return await originalRequest(payload, requestOptions)
      } catch (err) {
        lastError = err
        if (!RETRYABLE_CODES.has(errorCode(err)) || attempt === maxAttempts) {
          throw err
        }
        await sleep(150 * attempt)
      }
    }
    throw lastError
  }

  return provider
}

const web3 = new Web3(createProvider(INFURA_URL))
web3._chainId = CHAIN_IDS.ETH

const web3MATIC = new Web3(createProvider(MATIC_RPC_URL))
web3MATIC._chainId = CHAIN_IDS.POLYGON

const web3ARBITRUM = new Web3(createProvider(ARBITRUM_RPC_URL))
web3ARBITRUM._chainId = CHAIN_IDS.ARBITRUM_ONE

const web3BASE = new Web3(createProvider(BASE_RPC_URL))
web3BASE._chainId = CHAIN_IDS.BASE

const web3ZKSYNC = new Web3(createProvider(ZKSYNC_RPC_URL))
web3ZKSYNC._chainId = CHAIN_IDS.ZKSYNC

const web3HYPEREVM = new Web3(createProvider(HYPEREVM_RPC_URL))
web3HYPEREVM._chainId = CHAIN_IDS.HYPEREVM

const getWeb3 = chainId => {
  switch (chainId) {
    case CHAIN_IDS.POLYGON:
      return web3MATIC
    case CHAIN_IDS.ARBITRUM_ONE:
      return web3ARBITRUM
    case CHAIN_IDS.BASE:
      return web3BASE
    case CHAIN_IDS.ZKSYNC:
      return web3ZKSYNC
    case CHAIN_IDS.HYPEREVM:
      return web3HYPEREVM
    default:
      return web3
  }
}

function bigintToStringDeep(v) {
  if (typeof v === 'bigint') {
    return v.toString(10)
  }

  if (Array.isArray(v)) {
    return v.map(bigintToStringDeep)
  }

  if (v && typeof v === 'object') {
    return Object.fromEntries(Object.entries(v).map(([k, val]) => [k, bigintToStringDeep(val)]))
  }

  return v
}

const countFunctionCall = async p => {
  const count = cache.get(WEB3_CALL_COUNT_KEY) || 0
  cache.set(WEB3_CALL_COUNT_KEY, count + 1)

  const v = await p
  return bigintToStringDeep(v)
}

const resetCallCount = () => {
  cache.set(WEB3_CALL_COUNT_KEY, 0)
}

const getCallCount = () => cache.get(WEB3_CALL_COUNT_KEY)

const updateCallCountCache = key => {
  const currentCache = cache.get(WEB3_CALL_COUNT_STATS_KEY)
  cache.set(WEB3_CALL_COUNT_STATS_KEY, { ...currentCache, [key]: getCallCount() })
}

const printCallCountResults = () => {
  const { gmv, revenue, tokenStats, cmc, vaults, pools } = cache.get(WEB3_CALL_COUNT_STATS_KEY)

  console.log('\n################## Web3 Call Count Results ###################')
  console.log('\nGMV calculation: ', gmv)
  console.log('\nRevenue calculation: ', revenue)
  console.log('\nFARM token stats calculation: ', tokenStats)
  console.log('\nCMC endpoint data calculation: ', cmc)
  console.log('\nPool data retreval total: ', sumBy(pools, 'callCount'))
  console.log('\nPool data retreval by pool: ')
  for (let { poolId, callCount } of orderBy(pools, 'callCount', 'desc')) {
    console.log(`${poolId}: ${callCount}`)
  }

  console.log('\nVault data retreval total: ', sumBy(vaults, 'callCount'))
  console.log('\nVault data retreval by vault: ')
  for (let { symbol, callCount } of orderBy(vaults, 'callCount', 'desc')) {
    console.log(`${symbol}: ${callCount}`)
  }

  console.log('\n##############################################################')
}

const hasAddress = (tokenAddress, selectedAddress) =>
  isArray(tokenAddress)
    ? tokenAddress.includes(selectedAddress.toLowerCase())
    : tokenAddress.toLowerCase() === selectedAddress.toLowerCase()

module.exports = {
  web3,
  web3MATIC,
  web3ARBITRUM,
  web3BASE,
  web3ZKSYNC,
  web3HYPEREVM,
  getWeb3,
  countFunctionCall,
  resetCallCount,
  getCallCount,
  printCallCountResults,
  updateCallCountCache,
  hasAddress,
}
