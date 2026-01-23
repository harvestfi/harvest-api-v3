const BigNumber = require('bignumber.js')
const { get } = require('lodash')
const { client } = require('../../../lib/http')

const getTradingApy = async poolId => {
  let apy

  try {
    const response = await client.get('http://stats.curve.fi/raw-stats-arbitrum/apys.json')

    apy = new BigNumber(get(response, `data.apy.day[${poolId}]`, 0))
  } catch (err) {
    console.error('arbitrum CRV API error: ', err)
    apy = new BigNumber(0)
  }

  return apy.isNaN() ? '0' : apy.times('100').toFixed(2, BigNumber.ROUND_DOWN)
}

module.exports = {
  getTradingApy,
}
