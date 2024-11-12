const { get } = require('lodash')
const { CHAIN_IDS, BALANCER_GRAPHQL_URL } = require('../constants')
const axios = require('axios')

const getChainName = networkId => {
  if (networkId == CHAIN_IDS.ETH) {
    return 'MAINNET'
  } else if (networkId == CHAIN_IDS.POLYGON) {
    return 'POLYGON'
  } else if (networkId == CHAIN_IDS.BASE) {
    return 'BASE'
  } else if (networkId == CHAIN_IDS.ZKSYNC) {
    return 'ZKEVM'
  } else if (networkId == CHAIN_IDS.ARBITRUM_ONE) {
    return 'ARBITRUM'
  }
}

const executeBalancerCall = (type, query, variables) => {
  return axios
    .post(BALANCER_GRAPHQL_URL, {
      query: query,
      variables: variables,
    })
    .then(response => {
      const data = get(response, `data.data.${type}`)
      if (data) {
        return data
      } else {
        console.error(get(response, 'data.errors', response))
        return null
      }
    })
    .catch(error => {
      console.error(`Balancer subgraph (${query}) failed:`, error)
      return null
    })
}

const getPoolInfo = async (poolId, networkId) => {
  const chainName = getChainName(networkId)
  const poolQuery = `
    query GetPool($poolId: String!, $chainName: GqlChain!) {
      poolGetPool(id: $poolId, chain: $chainName){
        dynamicData {
          aprItems {
            id
            apr
            type
          },
          totalLiquidity
        }
      }
    }
  `

  const variables = {
    poolId: poolId,
    chainName: chainName,
  }

  const poolInfo = await executeBalancerCall('poolGetPool', poolQuery, variables)

  return poolInfo
}

module.exports = {
  getPoolInfo,
}
