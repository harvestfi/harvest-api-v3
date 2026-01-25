const BigNumber = require('bignumber.js')
const { get } = require('lodash')
const { client } = require('../../../lib/http')

const getApy = async (gaugeAddress, profitSharingFactor) => {
  let apy

  try {
    const response = await client.get('https://api.curve.fi/api/getFactoGaugesCrvRewards/arbitrum')
    const apyResults = get(response, `data.data.sideChainGaugesApys`, [])
    const result = apyResults.find(
      value => value.address.toLowerCase() === gaugeAddress.toLowerCase(),
    )
    apy = new BigNumber(result.apy).times(profitSharingFactor)
  } catch (err) {
    console.error('arbitrum CRV API error: ', err)
    apy = new BigNumber(0)
  }

  return apy.isNaN() ? '0' : apy.toFixed(2, BigNumber.ROUND_DOWN)
}

module.exports = {
  getApy,
}
