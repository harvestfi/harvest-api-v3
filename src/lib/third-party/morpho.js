const { get } = require('lodash')
const axios = require('axios')
const { MORPHO_ENDPOINT } = require('../constants')
const logger = require('../logger')

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
        return null
      }
    })
    .catch(error => {
      logger.error(`executeApiCall(${MORPHO_ENDPOINT}, ${query}, ${variables}) failed:`, error)
      return null
    })

const getVaultData = async (vaultAddr, chain) => {
  const query = `
    query {
      vaultByAddress(
        address: "${vaultAddr}"
        chainId: ${chain}
      ) {
        state {
          dailyNetApy
        }
      }
  }`

  const queryResponse = await executeApiCall(query, {})

  return queryResponse
}

const getV2VaultData = async (vaultAddr, chain) => {
  const query = `
    query {
      vaultV2ByAddress(
        address: "${vaultAddr}"
        chainId: ${chain}
      ) {
        avgNetApy(lookback: ONE_DAY)
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
  getV2VaultData,
  getMarketData,
}
