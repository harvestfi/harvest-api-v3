const { get } = require('lodash')
const axios = require('axios')
const { MORPHO_ENDPOINT } = require('../constants')

const executeApiCall = (query, variables) =>
  axios
    .post(MORPHO_ENDPOINT, {
      query: query,
      variables: variables,
    })
    .then(response => {
      const data = get(response, 'data.data')

      if (data) {
        return data
      } else {
        console.log(response)
        return null
      }
    })
    .catch(error => {
      console.error(`executeApiCall(${MORPHO_ENDPOINT}, ${query}, ${variables}) failed:`, error)
      return null
    })

const getVaultData = async (vaultAddr, chain) => {
  const query = `
    query {
      vaultByAddress(
        address: "${vaultAddr}"
        chainId: ${chain}
      ) {
        dailyApys {
          netApy
        }
      }
  }`

  const queryResponse = await executeApiCall(query, {})

  return queryResponse
}

const getMarketData = async (marketUniqueKey, chain) => {
  const query = `
    query {
      marketByUniqueKey(
        uniqueKey: "${marketUniqueKey}"
        chainId: ${chain}
      ) {
        state {
          avgNetSupplyApy
        }
      }
  }`

  const queryResponse = await executeApiCall(query, {})

  return queryResponse
}

module.exports = {
  getVaultData,
  getMarketData,
}
