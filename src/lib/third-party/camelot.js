const { get } = require('lodash')
const axios = require('axios')

const getCamelotData = isV3 => {
  let uri = isV3
    ? 'https://api.camelot.exchange/liquidity-v3-data?chainId=42161'
    : 'https://api.camelot.exchange/liquidity-v2-pools-data?chainId=42161'
  let res = axios
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
