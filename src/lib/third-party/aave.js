const { get } = require('lodash')
const { cachedAxios } = require('../db/models/cache')
const logger = require('../logger')

const getAaveV2Market = () =>
  cachedAxios
    .get('https://aave-api-v2.aave.com/data/markets-data/')
    .then(response => get(response, 'data'))
    .catch(error => {
      logger.error('getAaveV2Market() failed:', error, {
        url: 'https://aave-api-v2.aave.com/data/markets-data/',
      })
      return null
    })

module.exports = {
  getAaveV2Market,
}
