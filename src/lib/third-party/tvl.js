const { get } = require('lodash')
const axios = require('axios')
const { HARVEST_SUBGRAPH_URLS } = require('../../lib/constants')
// const { cachedAxios } = require('../db/models/cache')

const executeGraphCall = (chain, query, variables) =>
  axios
    .post(HARVEST_SUBGRAPH_URLS[chain], JSON.stringify({ query, variables }))
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
      console.error(
        `executeGraphCall(${HARVEST_SUBGRAPH_URLS[chain]}, ${query}, ${variables}) failed:`,
        error,
      )
      return null
    })

const getTvlData = async (chain, first, skip, sequence_gt) => {
  const arbQuery = `
  query getTVLsQuery($first: Int!, $skip: Int!, $sequence_gt: Int!) {
    totalTvlHistories(
      orderBy: createAtBlock
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

  const query = `
  query getTVLsQuery($first: Int!, $skip: Int!, $sequence_gt: Int!) {
    totalTvlHistoryV2S(
      orderBy: createAtBlock
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

  const queryReponse = await executeGraphCall(chain, chain == 42161 ? arbQuery : query, {
    first,
    skip,
    sequence_gt,
  })
  return chain == 42161 ? queryReponse.totalTvlHistories : queryReponse.totalTvlHistoryV2S
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
  const length = parseInt(queryResponse?.totalTvlCounts[0].length ?? 0)
  return length
}

module.exports = {
  getTvlDataLength,
  getTvlData,
}
