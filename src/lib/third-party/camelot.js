const { get } = require('lodash')
const { cachedAxios } = require('../db/models/cache')

const getCamelotData = () =>
  cachedAxios
    .get('https://api.camelot.exchange/pools-v2/')
    .then(response => get(response, 'data'))
    .catch(error => {
      console.error('getCamelotData() failed:', error)
      return null
    })

module.exports = {
  getCamelotData,
}
