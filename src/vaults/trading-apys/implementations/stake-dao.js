const BigNumber = require('bignumber.js')
const { STAKE_DAO_API_URL } = require('../../../lib/constants.js')
const { client } = require('../../../lib/http')

const VAULT_APR_QUERY = `
  query GetAllVaultsWithAssets($address: String!) {
    Vault(where: { address: { _eq: $address } }) {
      gauge {
        aprDetails {
          yieldType
          apr
        }
      }
    }
  }
`

const getStakeDaoAprDetails = async address => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'User-Agent': 'PostmanRuntime/7.43.4',
  }

  try {
    const response = await client.post(
      STAKE_DAO_API_URL,
      {
        operationName: 'GetAllVaultsWithAssets',
        query: VAULT_APR_QUERY,
        variables: { address },
      },
      { headers },
    )

    return response?.data?.data?.Vault?.[0]?.gauge?.aprDetails ?? []
  } catch (err) {
    console.error('Stake DAO API error: ', err)
  }
}

const getTradingApy = async vaultAddress => {
  let apy

  try {
    const aprDetails = (await getStakeDaoAprDetails(vaultAddress)) ?? []

    const tradingDetail = aprDetails.find(d => d.yieldType === 'TRADING_FEES')
    apy = new BigNumber(tradingDetail?.apr ?? 0).times(100)
  } catch (err) {
    console.error('Stake DAO API error: ', err)
    apy = new BigNumber(0)
  }

  return apy.isNaN() ? '0' : apy.toFixed(2, 1)
}

module.exports = {
  getTradingApy,
}
