const { get } = require('lodash')
const axios = require('axios')
const { SYNCSWAP_SUBGRAPH_URL } = require('../constants')

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
        console.error(get(response, 'data.errors', response))
        return null
      }
    })
    .catch(error => {
      console.error(`Syncswap subgraph (${query}) failed:`, error)
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
  console.log(
    'tradingVolInfo?.pairDayDatas[0].dailyVolumeUSD: ',
    tradingVolInfo?.pairDayDatas[0].dailyVolumeUSD,
  )
  return parseFloat(tradingVolInfo?.pairDayDatas[0].dailyVolumeUSD)
}

module.exports = {
  getTradingVolumeDaily,
}
