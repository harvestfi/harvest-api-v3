const { get } = require('lodash')
const axios = require('axios')
const { HARVEST_SUBGRAPH_URLS } = require('../constants')
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

const getTvlData = async (chain, first, skip, sequence_gt, vault = null) => {
  const arbTQuery = `
  query getTVLsQuery($first: Int!, $skip: Int!, $sequence_gt: Int!) {
    totalTvlHistories(
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
  const query = vault ? vaultQuery : chain === 42161 ? arbTQuery : tQuery
  const variables = vault ? { vault, first, skip, sequence_gt } : { first, skip, sequence_gt }
  const resultKey = vault ? 'tvls' : chain === 42161 ? 'totalTvlHistories' : 'totalTvlHistoryV2S'

  const { [resultKey]: result } = await executeGraphCall(chain, query, variables)

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

module.exports = {
  getTvlDataLength,
  getFarmTvlLength,
  getTvlData,
}
