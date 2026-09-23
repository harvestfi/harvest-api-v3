const { get } = require('lodash')
const { CURVE_API_URLS } = require('../constants')
const { client } = require('../http')
const { getShared } = require('../cached-fetch')

// Curve's getVolumes endpoint returns every pool on the chain, and each caller only reads
// its own pool out of it, so it is fetched once per chain and shared.
const CACHE_TTL_SECONDS = 300

const getCurvePools = async chainId => {
  const url = CURVE_API_URLS[chainId]

  if (!url) {
    return null
  }

  const data = await getShared(`curveVolumes${chainId}`, CACHE_TTL_SECONDS, async () => {
    const response = await client.get(url)
    const pools = get(response, 'data.data.pools')

    if (!Array.isArray(pools)) {
      throw new Error(`Curve API returned no pools for chain ${chainId}`)
    }

    return pools
  })

  return data
}

module.exports = {
  getCurvePools,
}
