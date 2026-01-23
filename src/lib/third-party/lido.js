const { get } = require('lodash')
const { client } = require('../http')
const { CHAIN_IDS, LIDO_API_URLS } = require('../constants')
const logger = require('../logger')

const get7MAAPRs = networkId => {
  let apiURL
  if (networkId == CHAIN_IDS.ETH) {
    apiURL = LIDO_API_URLS.ETH
  }

  return client
    .get(apiURL)
    .then(response => {
      const data = get(response, `data.data.smaApr`)
      if (data) {
        return data
      } else {
        logger.error(get(response, 'data.errors', response))
        return null
      }
    })
    .catch(error => {
      logger.error(`Lido APRs api failed:`, error)
      return null
    })
}

module.exports = { get7MAAPRs }
