const BigNumber = require('bignumber.js')
const axios = require('axios')
const { get } = require('lodash')
const { NOTIONAL_ENDPOINT } = require('../../../lib/constants')

const getTradingApy = async poolAddress => {
  let response, apy

  try {
    response = await axios.get(NOTIONAL_ENDPOINT)
    const interest = new BigNumber(
      get(
        get(response, `data.values[7][1]`, []).find(
          oracle =>
            oracle.quote == poolAddress.toLowerCase() &&
            oracle.oracleType == 'nTokenBlendedInterestRate',
        ),
        'latestRate',
        0,
      ),
    )
    const fee = new BigNumber(
      get(
        get(response, `data.values[7][1]`, []).find(
          oracle =>
            oracle.quote == poolAddress.toLowerCase() && oracle.oracleType == 'nTokenFeeRate',
        ),
        'latestRate',
        0,
      ),
    )
    apy = interest.div(1e9).plus(fee.div(1e9)).times(100)
  } catch (err) {
    console.error('Gamma API error: ', err)
    apy = 0
  }

  return apy.toFixed(4)
}

module.exports = {
  getTradingApy,
}
