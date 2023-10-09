const { get } = require('lodash')
const { cachedAxios } = require('../db/models/cache')

const getCamelotData = (isV3) => {
  let uri = isV3 ? 'https://api.camelot.exchange/v2/liquidity-v3-data/' : 'https://api.camelot.exchange/pools-v2/'
  let res = cachedAxios
    .get(uri)
    .then(response => get(response, 'data'))
    .catch(error => {
      console.error('getCamelotData() failed:', error)
      return null
    })

    return res
}

module.exports = {
  getCamelotData,
}
