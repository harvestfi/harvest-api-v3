const { get } = require('lodash')
const axios = require('axios')

const getDefiLlamaData = () =>
  axios
    .get('https://yields.llama.fi/pools')
    .then(response => get(response, 'data'))
    .catch(error => {
      console.error('getDefiLlamaData() failed:', error)
      return null
    })

module.exports = {
  getDefiLlamaData,
}
