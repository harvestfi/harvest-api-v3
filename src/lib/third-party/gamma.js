const { GAMMA_ENDPOINT } = require('../constants')
const { client } = require('../http')
const { getShared } = require('../cached-fetch')

// Every Gamma endpoint we consume returns the full set of hypervisors (or rewards) keyed
// by address, and each caller only reads a single key out of it. Fetching per pool burned
// ~21 requests a cycle against Gamma's 4 req/sec limit and returned 429s, so each distinct
// path is fetched once per cycle and shared.
const HYPERVISOR_PATHS = {
  QUICKSWAP: 'quickswap/polygon/hypervisors/allData',
  UNISWAP: 'polygon/hypervisors/allData',
}
const REWARDS_PATHS = {
  QUICKSWAP: 'quickswap/polygon/allRewards2',
}

const CACHE_TTL_SECONDS = 300

const getGammaData = path =>
  getShared(`gammaApi${path}`, CACHE_TTL_SECONDS, async () => {
    const response = await client.get(`${GAMMA_ENDPOINT}${path}`)
    const data = response && response.data

    if (!data || typeof data !== 'object') {
      throw new Error(`Gamma API returned no data for ${path}`)
    }

    return data
  })

module.exports = {
  getGammaData,
  HYPERVISOR_PATHS,
  REWARDS_PATHS,
}
