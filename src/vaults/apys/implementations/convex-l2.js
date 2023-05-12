const { get } = require('lodash')
const { cachedAxios } = require('../../../lib/db/models/cache.js')
const { CONVEX_API_URLS } = require('../../../lib/constants')

const getApy = async (address, poolId, profitSharingFactor, chain) => {
  let apy

  const url = CONVEX_API_URLS[chain]
  let prefix
  if (chain == '137') {
    prefix = 'polygon-'
  } else if (chain == '42161') {
    prefix = 'arbitrum-'
  }

  try {
    let poolName = prefix + address.toLowerCase() + '-' + poolId
    const response = await cachedAxios.get(url)
    const apyResult = get(response, `data.apys.` + poolName, [])
    apy = (apyResult.crvApy + apyResult.cvxApy) * profitSharingFactor
    if (isNaN(apy)) {
      apy = 0
    }
  } catch (err) {
    console.error('Arbitrum Convex API error: ', err)
    apy = 0
  }

  return apy
}

module.exports = {
  getApy,
}
