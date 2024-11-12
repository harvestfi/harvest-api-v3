const { get } = require('lodash')
const { MERKL_ENDPOINT } = require('../../../lib/constants')
const { cachedAxios } = require('../../../lib/db/models/cache')

const getApy = async (underlying, poolAddress, chainId, reduction) => {
  let response, apy

  try {
    response = await cachedAxios.get(`${MERKL_ENDPOINT}?chainIds[]=${chainId}`)
    const aprLabel = `Gamma ${underlying}`
    apy = get(response, `data.${chainId}.pools.${poolAddress}.aprs.${aprLabel}`, 0)
    apy = parseFloat(apy) * parseFloat(reduction)
    if (isNaN(apy)) {
      apy = 0
    }
  } catch (err) {
    console.error('MERKL API error: ', err)
    apy = 0
  }

  return apy
}

module.exports = {
  getApy,
}
