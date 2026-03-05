const BigNumber = require('bignumber.js')
const { STAKE_DAO_API_URL } = require('../../../lib/constants.js')
const { client } = require('../../../lib/http')

const STAKE_DAO_FEE = 0.165

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

const getApy = async (poolId, profitSharingFactor) => {
  let apy

  try {
    const aprDetails = (await getStakeDaoAprDetails(poolId)) ?? []

    const stakingDetail = aprDetails.find(d => d.yieldType === 'STAKING_REWARDS')
    const stakingApr = new BigNumber(stakingDetail?.apr ?? 0).times(100)
    // Stake DAO takes 16.5% of staking rewards; vault receives 83.5%
    const afterSdFee = stakingApr.times(1 - STAKE_DAO_FEE)

    const liquidityDetail = aprDetails.find(d => d.yieldType === 'LIQUIDITY_INCENTIVES')
    const liquidityApr = new BigNumber(liquidityDetail?.apr ?? 0).times(100)
    console.log('liquidityApr: ', liquidityApr.toString())

    apy = afterSdFee.plus(liquidityApr).times(profitSharingFactor)
  } catch (err) {
    console.error('Stake DAO API error: ', err)
    apy = new BigNumber(0)
  }

  return apy.isNaN() ? '0' : apy.toFixed(2, 1)
}

module.exports = {
  getApy,
}
