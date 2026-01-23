const BigNumber = require('bignumber.js')
const { get } = require('lodash')
const { client } = require('../../../lib/http')

const getTradingApy = async poolId => {
  let apy

  try {
    const response = await client.get('https://www.convexfinance.com/api/curve-apys')

    apy = new BigNumber(get(response, `data.apys[${poolId}].baseApy`, 0))
  } catch (err) {
    console.error('convex API error: ', err)
    apy = new BigNumber(0)
  }

  return apy.isNaN() ? '0' : apy.toFixed(2, 1)
}

module.exports = {
  getTradingApy,
}
