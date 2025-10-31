const { sumBy, orderBy, isArray } = require('lodash')
const Web3 = require('web3')
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
  INFURA_WS_URL,
} = require('../constants')
const { cache } = require('../cache')

const web3 = new Web3(INFURA_URL)
const web3MATIC = new Web3(MATIC_RPC_URL)
const web3ARBITRUM = new Web3(ARBITRUM_RPC_URL)
const web3BASE = new Web3(BASE_RPC_URL)
const web3ZKSYNC = new Web3(ZKSYNC_RPC_URL)
const web3HYPEREVM = new Web3(HYPEREVM_RPC_URL)

const web3Socket = new Web3(new Web3.providers.WebsocketProvider(INFURA_WS_URL))

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

const countFunctionCall = fn => {
  const count = cache.get(WEB3_CALL_COUNT_KEY) || 0
  cache.set(WEB3_CALL_COUNT_KEY, count + 1)

  return fn
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
  web3Socket,
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
