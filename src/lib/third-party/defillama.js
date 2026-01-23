const { get } = require('lodash')
const { cachedAxios } = require('../db/models/cache')

const getDefiLlamaData = () =>
  cachedAxios
    .get('https://yields.llama.fi/pools')
    .then(response => get(response, 'data'))
    .catch(error => {
      console.error('getDefiLlamaData() failed:', error)
      return null
    })

module.exports = {
  getDefiLlamaData,
}
