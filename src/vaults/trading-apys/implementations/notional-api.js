const BigNumber = require('bignumber.js')
const axios = require('axios')
const { get } = require('lodash')
const { NOTIONAL_ENDPOINT } = require('../../../lib/constants')
const { CHAIN_IDS } = require('../../../../data/constants')

const getTradingApy = async (poolAddress, chainId = CHAIN_IDS.ETH_MAINNET) => {
  let response, apy
  let chain = chainId === CHAIN_IDS.ETH_MAINNET ? 'mainnet' : 'arbitrum'
  let dataValues = chainId === CHAIN_IDS.ETH_MAINNET ? `data.values[7][1]` : `data.values[14][1]`

  try {
    response = await axios.get(`${NOTIONAL_ENDPOINT}/${chain}/views/analytics`)
    const interest = new BigNumber(
      get(
        get(response, dataValues, []).find(
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
        get(response, dataValues, []).find(
          oracle =>
            oracle.quote == poolAddress.toLowerCase() && oracle.oracleType == 'nTokenFeeRate',
        ),
        'latestRate',
        0,
      ),
    )
    apy = interest.div(1e9).plus(fee.div(1e9)).times(100)
  } catch (err) {
    console.error('Notional API error: ', err)
    apy = 0
  }

  return apy.toFixed(4)
}

module.exports = {
  getTradingApy,
}
