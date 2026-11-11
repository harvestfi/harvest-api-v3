const { get } = require('lodash')
const { client } = require('../http')
const logger = require('../logger')

const getWstETHRate = () =>
  client
    .get('https://eth-api.lido.fi/v1/protocol/steth/apr/last')
    .then(response => get(response, 'data.data.apr'))
    .catch(error => {
      logger.error('getDefiLlamaData() failed:', error)
      return null
    })

const getCbETHRate = () =>
  client
    .get('https://api.exchange.coinbase.com/wrapped-assets/CBETH')
    .then(response => get(response, 'data.apy'))
    .catch(error => {
      logger.error('getDefiLlamaData() failed:', error)
      return null
    })

module.exports = {
  getWstETHRate,
  getCbETHRate,
}
