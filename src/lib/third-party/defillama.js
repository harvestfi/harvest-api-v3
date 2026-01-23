const { get } = require('lodash')
const { client } = require('../http')
const logger = require('../logger')

const getDefiLlamaData = () =>
  client
    .get('https://yields.llama.fi/pools')
    .then(response => get(response, 'data'))
    .catch(error => {
      logger.error('getDefiLlamaData() failed:', error)
      return null
    })

module.exports = {
  getDefiLlamaData,
}
