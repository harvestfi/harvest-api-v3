const { get } = require('lodash')
const { client } = require('../http')
const logger = require('../logger')

const getAaveV2Market = () =>
  client
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
