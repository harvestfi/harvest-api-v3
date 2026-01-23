const { get } = require('lodash')
const { cachedAxios } = require('../db/models/cache')
const { CHAIN_IDS, ROCKETPOOL_API_URLS } = require('../constants')
const logger = require('../logger')

const getYearlyAPR = networkId => {
  let apiURL
  if (networkId == CHAIN_IDS.ETH) {
    apiURL = ROCKETPOOL_API_URLS.ETH
  }

  return cachedAxios
    .get(apiURL)
    .then(response => {
      const data = get(response, `data.yearlyAPR`)
      if (data) {
        return data
      } else {
        logger.error(get(response, 'data.errors', response))
        return null
      }
    })
    .catch(error => {
      logger.error(`Rocket Pool APRs api failed:`, error)
      return null
    })
}

module.exports = { getYearlyAPR }
