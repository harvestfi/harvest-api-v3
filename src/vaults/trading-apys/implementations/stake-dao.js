const BigNumber = require('bignumber.js')
const { STAKE_DAO_API_URL } = require('../../../lib/constants.js')
const { client } = require('../../../lib/http')

const getStakeDaoAprDetails = async vaultAddress => {
  try {
    const response = await client.get(STAKE_DAO_API_URL, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'PostmanRuntime/7.43.4',
      },
    })

    const vaults = response?.data?.data ?? response?.data ?? []
    const target = vaultAddress.toLowerCase()
    const entry = (Array.isArray(vaults) ? vaults : []).find(
      v => (v?.vault ?? '').toLowerCase() === target,
    )

    return entry?.apr?.current?.details ?? []
  } catch (err) {
    console.error('Stake DAO API error: ', err)
    return []
  }
}

const isTradingFees = label => (label ?? '').toLowerCase().includes('trading fees')

const getTradingApy = async vaultAddress => {
  let apy

  try {
    const aprDetails = (await getStakeDaoAprDetails(vaultAddress)) ?? []

    apy = aprDetails
      .filter(d => isTradingFees(d?.label))
      .reduce((sum, d) => {
        const values = Array.isArray(d?.value) ? d.value : [d?.value]
        return values.reduce((acc, v) => acc.plus(new BigNumber(v ?? 0)), sum)
      }, new BigNumber(0))
  } catch (err) {
    console.error('Stake DAO API error: ', err)
    apy = new BigNumber(0)
  }

  return apy.isNaN() ? '0' : apy.toFixed(2, 1)
}

module.exports = {
  getTradingApy,
}
