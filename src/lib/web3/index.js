const http = require('http')
const https = require('https')
const { URL } = require('url')
const { sumBy, orderBy, isArray } = require('lodash')
const { Web3 } = require('web3')
const { HttpProvider } = require('web3-providers-http')
const { ResponseError } = require('web3-errors')
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

// web3 v4's stock HttpProvider sends JSON-RPC over node-fetch@2 (via cross-fetch),
// which fails every request with ERR_STREAM_PREMATURE_CLOSE on our Node 24 Heroku
// dynos, while Node's built-in https hits the same endpoints from the same dyno with
// zero errors. So we keep web3 but run its transport over native http/https, pooled
// with keep-alive (freeSocketTimeout evicts idle sockets before they go stale).
const keepAliveOptions = {
  keepAlive: true,
  maxSockets: 50,
  maxFreeSockets: 10,
  timeout: 60_000,
  freeSocketTimeout: 4_000,
}
const httpKeepAliveAgent = new HttpAgent(keepAliveOptions)
const httpsKeepAliveAgent = new HttpsAgent(keepAliveOptions)

// Drop-in replacement for web3's HttpProvider that POSTs the JSON-RPC body with
// Node's native http/https instead of node-fetch. Same contract: resolves the
// parsed JSON-RPC response, throws ResponseError on a non-2xx status.
class NodeHttpProvider extends HttpProvider {
  request(payload, requestOptions) {
    return new Promise((resolve, reject) => {
      const urlObj = new URL(this.clientUrl)
      const lib = urlObj.protocol === 'http:' ? http : https
      const body = JSON.stringify(payload)
      const req = lib.request(
        {
          protocol: urlObj.protocol,
          hostname: urlObj.hostname,
          port: urlObj.port || (urlObj.protocol === 'http:' ? 80 : 443),
          path: urlObj.pathname + urlObj.search,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...(requestOptions && requestOptions.headers),
            'Content-Length': Buffer.byteLength(body),
          },
          agent: urlObj.protocol === 'http:' ? httpKeepAliveAgent : httpsKeepAliveAgent,
          timeout: 30_000,
        },
        res => {
          let data = ''
          res.setEncoding('utf8')
          res.on('data', chunk => {
            data += chunk
          })
          res.on('end', () => {
            const status = res.statusCode || 0
            let parsed
            try {
              parsed = data ? JSON.parse(data) : undefined
            } catch (err) {
              return reject(err)
            }
            if (status < 200 || status >= 300) {
              return reject(new ResponseError(parsed, undefined, undefined, status))
            }
            return resolve(parsed)
          })
        },
      )
      req.on('timeout', () =>
        req.destroy(Object.assign(new Error('Request timeout'), { code: 'ETIMEDOUT' })),
      )
      req.on('error', reject)
      req.end(body)
    })
  }
}

const web3 = new Web3(new NodeHttpProvider(INFURA_URL))
web3._chainId = CHAIN_IDS.ETH

const web3MATIC = new Web3(new NodeHttpProvider(MATIC_RPC_URL))
web3MATIC._chainId = CHAIN_IDS.POLYGON

const web3ARBITRUM = new Web3(new NodeHttpProvider(ARBITRUM_RPC_URL))
web3ARBITRUM._chainId = CHAIN_IDS.ARBITRUM_ONE

const web3BASE = new Web3(new NodeHttpProvider(BASE_RPC_URL))
web3BASE._chainId = CHAIN_IDS.BASE

const web3ZKSYNC = new Web3(new NodeHttpProvider(ZKSYNC_RPC_URL))
web3ZKSYNC._chainId = CHAIN_IDS.ZKSYNC

const web3HYPEREVM = new Web3(new NodeHttpProvider(HYPEREVM_RPC_URL))
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
