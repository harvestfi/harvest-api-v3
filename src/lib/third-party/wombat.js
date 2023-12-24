const { get } = require('lodash')
const { cachedAxios } = require('../db/models/cache')
const { WOMBAT_ARB_SUBGRAPH_URL, WOMBAT_ARB_ONE_BLOCK_URL } = require('../constants')

const executeWombatCall = (url, type, query) => {
  return cachedAxios
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
        console.error(get(response, 'data.errors', response))
        return null
      }
    })
    .catch(error => {
      console.error(`Wombat subgraph (${query}) failed:`, error)
      return null
    })
}

const getBlockNumArb = async timestamp => {
  const blockQuery = `query {
    blocks (first: 1, orderBy: timestamp, orderDirection:desc where:{timestamp_lte:${timestamp}}) { 
      number
    }}`

  const blockInfo = await executeWombatCall(WOMBAT_ARB_ONE_BLOCK_URL, 'blocks[0]', blockQuery)
  return blockInfo.number
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
  getBlockNumArb,
}
