const { get } = require('lodash')
const { client } = require('../http')
const { WOMBAT_ARB_SUBGRAPH_URL } = require('../constants')
const logger = require('../logger')

const executeWombatCall = (url, type, query) => {
  return client
    .post(url, JSON.stringify({ query }))
    .then(response => {
      let data
      if (type) {
        data = get(response, `data.data.${type}`)
      } else {
        data = get(response, `data.data`)
      }
      if (data) {
        return data
      } else {
        logger.error(get(response, 'data.errors', response))
        return null
      }
    })
    .catch(error => {
      logger.error(`Wombat subgraph (${query}) failed:`, error)
      return null
    })
}

const getTradingVolumeDaily = async (underlyingAddr, blockNum) => {
  const tradingVolQuery = `query {
    assetsNow:assets (where: {id: "${underlyingAddr.toLowerCase()}"}) { 
      totalTradeVolumeUSD,
      tvlUSD
    }
    assets24hAgo: assets(where: {id: "${underlyingAddr.toLowerCase()}"} block:{number:${blockNum}}){
      totalTradeVolumeUSD
    }
  }`

  const tradingVolInfo = await executeWombatCall(WOMBAT_ARB_SUBGRAPH_URL, null, tradingVolQuery)
  const dailyTradingVol =
    parseFloat(tradingVolInfo.assetsNow[0].totalTradeVolumeUSD) -
    parseFloat(tradingVolInfo.assets24hAgo[0].totalTradeVolumeUSD)
  return { dailyTradingVol, tvlUSD: parseFloat(tradingVolInfo.assetsNow[0].tvlUSD) }
}

module.exports = {
  getTradingVolumeDaily,
}
