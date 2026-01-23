const { get } = require('lodash')
const { cachedAxios } = require('../db/models/cache')
const logger = require('../logger')

const getDefiLlamaData = () =>
  cachedAxios
    .get('https://yields.llama.fi/pools')
    .then(response => get(response, 'data'))
    .catch(error => {
      logger.error('getDefiLlamaData() failed:', error)
      return null
    })

module.exports = {
  getDefiLlamaData,
}
