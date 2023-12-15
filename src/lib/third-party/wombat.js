const { get } = require('lodash')
const { cachedAxios } = require('../db/models/cache')
const { WOMBAT_ARB_SUBGRAPH_URL } = require('../constants')

const executeWombatCall = (type, query) => {
  return cachedAxios
    .post(WOMBAT_ARB_SUBGRAPH_URL, JSON.stringify({ query }))
    .then(response => {
      const data = get(response, `data.data.${type}`)
      if (data) {
        return data
      } else {
        console.error(get(response, 'data.errors', response))
        return null
      }
    })
    .catch(error => {
      console.error(`Wombat subgraph (${query}) failed:`, error)
      return null
    })
}

const getWomAprSubgraph = async underlyingAddr => {
  const womAPRQuery = `query {
    assets (where: {id: "${underlyingAddr.toLowerCase()}"}) { 
      avgBoostedApr,
      coverageRatio
    }}`

  const aprInfo = await executeWombatCall('assets[0]', womAPRQuery)
  return { apr: aprInfo.avgBoostedApr, ratio: aprInfo.coverageRatio }
}

module.exports = {
  getWomAprSubgraph,
}
