const { get } = require('lodash')
const axios = require('axios')
const { SYNCSWAP_SUBGRAPH_URL } = require('../constants')
const logger = require('../logger')

const executeSyncswapCall = (url, type, query, variables) => {
  return axios
    .post(url, {
      query: query,
      variables: variables,
    })
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
      logger.error(`Syncswap subgraph (${query}) failed:`, error)
      return null
    })
}

const getTradingVolumeDaily = async (pair, date) => {
  const tradingVolQuery = `
    query DailyData($pair: Bytes!, $date: Int!) {
      pairDayDatas(
      where: { pairAddress: $pair, date: $date }
      ) {
        dailyVolumeUSD
      }}
`

  const variables = { pair, date }

  const tradingVolInfo = await executeSyncswapCall(
    SYNCSWAP_SUBGRAPH_URL,
    null,
    tradingVolQuery,
    variables,
  )
  return parseFloat(tradingVolInfo?.pairDayDatas[0].dailyVolumeUSD)
}

module.exports = {
  getTradingVolumeDaily,
}
