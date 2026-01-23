const { get } = require('lodash')
const { client } = require('../http')
const { CHAIN_IDS, ROCKETPOOL_API_URLS } = require('../constants')
const logger = require('../logger')

const getYearlyAPR = networkId => {
  let apiURL
  if (networkId == CHAIN_IDS.ETH) {
    apiURL = ROCKETPOOL_API_URLS.ETH
  }

  return client
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
