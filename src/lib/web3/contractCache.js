const { LRUCache } = require('lru-cache')
const crypto = require('crypto')

/**
 * IMPORTANT:
 * - bounded size
 * - TTL
 * - no clones
 * - reuse Contract instances
 */

const cache = new LRUCache({
  max: 3000,
  ttl: 10 * 60 * 1000, // 10 minutes
  updateAgeOnGet: true,
})

/**
 * ABI hashing:
 * - hash once
 * - reuse hash
 * - WeakMap avoids memory leaks
 */
const abiHash = new WeakMap()

function getAbiHash(abi) {
  if (!abi) return 'abi:none'
  if (abiHash.has(abi)) return abiHash.get(abi)
  const h = crypto.createHash('sha1').update(JSON.stringify(abi)).digest('hex')
  abiHash.set(abi, h)
  return h
}

function normalizeAddress(addr) {
  return addr.toLowerCase()
}

function makeKey(chainId, address, abi) {
  return `${chainId}:${normalizeAddress(address)}:${getAbiHash(abi)}`
}

function getCachedContract({ web3, abi, address }) {
  const key = makeKey(web3._chainId, address, abi)
  let contract = cache.get(key)

  if (!contract) {
    contract = new web3.eth.Contract(abi, address)
    cache.set(key, contract)
  }

  return contract
}

function stats() {
  return { size: cache.size, max: cache.max }
}

module.exports = {
  getCachedContract,
  contractCacheStats: stats,
  _contractCache: cache, // optional (debug)
}
