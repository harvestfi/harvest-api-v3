const { get } = require('lodash')
const axios = require('axios')
const { HARVEST_SUBGRAPH_URLS } = require('../constants')

const executeGraphCall = async (chain, query, variables) => {
  let retry = 0
  let response
  try {
    response = await axios.post(HARVEST_SUBGRAPH_URLS[chain], {
      query: query,
      variables: variables,
    })
  } catch (error) {
    response = error.response
  }
  while (retry < 5 && response.status == 429) {
    console.log('Retry', retry + 1, 'Waiting 16s for rate-limit')
    await new Promise(r => setTimeout(r, 16000))
    try {
      response = await axios.post(HARVEST_SUBGRAPH_URLS[chain], {
        query: query,
        variables: variables,
      })
    } catch (error) {
      response = error.response
    }
    retry += 1
  }
  const data = get(response, 'data.data')
  if (data) {
    return data
  } else {
    console.log(response)
    return null
  }
}

const getTvlData = async (chain, first, skip, sequence_gt, vault = null) => {
  const tQuery = `
    query getTVLsQuery($first: Int!, $skip: Int!, $sequence_gt: Int!) {
      totalTvlHistoryV2S(
        orderBy: timestamp
        orderDirection: asc
        first: $first
        skip: $skip
        where: {sequenceId_gt: $sequence_gt}
      ) {
        value
        timestamp
        sequenceId
      }
    }
  `

  const vaultQuery = `
    query getTVLsQuery($vault: String!, $first: Int!, $skip: Int!, $sequence_gt: BigInt!) {
      tvls(
        orderBy: timestamp
        orderDirection: asc
        first: $first
        skip: $skip
        where: {vault: $vault, sequenceId_gt: $sequence_gt}
      ) {
        value
        timestamp
        sequenceId
      }
    }
  `
  const query = vault ? vaultQuery : tQuery
  const variables = vault ? { vault, first, skip, sequence_gt } : { first, skip, sequence_gt }
  const resultKey = vault ? 'tvls' : 'totalTvlHistoryV2S'

  let result
  try {
    const { [resultKey]: callResult } = await executeGraphCall(chain, query, variables)
    result = callResult
  } catch (err) {
    console.error('Subgraph TVL error:', err)
    result = []
  }

  return result
}

const getTvlDataLength = async chain => {
  const query = `
    query {
      totalTvlCounts {
        length
      }
    }
  `

  const queryResponse = await executeGraphCall(chain, query, {})
  const length = parseInt(queryResponse?.totalTvlCounts[0]?.length ?? 0)
  return length
}

const getFarmTvlLength = async () => {
  const query = `
    query {
      tvlSequnceIds(
        where:{id:"0xa0246c9032bc3a600820415ae600c6388619a14d"}
      ) {
        lastSequenceId
      }
    }
  `

  const queryResponse = await executeGraphCall(1, query, {})

  const length = parseInt(queryResponse?.tvlSequnceIds[0].lastSequenceId ?? 0)
  return length
}

const getBalanceData = async (chain, maxValue) => {
  const query = `
      query {
          userBalances(
              first: 1000
              orderBy: value
              orderDirection: desc
              where: { value_lt: "${maxValue}", value_gt: "0" }
          ) {
              userAddress
              value
              poolBalance
              vault {
                  id
                  priceUnderlying
                  lastSharePrice
                  decimal
                  pool {id}
              }
          }
      }
          `

  const queryResponse = await executeGraphCall(chain, query, {})

  return queryResponse
}

module.exports = {
  getTvlDataLength,
  getFarmTvlLength,
  getTvlData,
  getBalanceData,
}
