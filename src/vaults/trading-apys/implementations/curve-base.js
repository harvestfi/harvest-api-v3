const axios = require('axios')
const { get } = require('lodash')
const { CURVE_FINANCE_API_URL } = require('../../../lib/constants')

const getTradingApy = async poolAddress => {
  let response, poolDetails, poolDetail, apy
  try {
    response = await axios.get(`${CURVE_FINANCE_API_URL}/getFactoryAPYs-base`)
    poolDetails = get(response, 'data.data.poolDetails', 0)
  } catch (err) {
    console.error('DexScreener API error: ', err)
    response = null
    poolDetails = null
  }

  if (poolDetails != null) {
    poolDetail = poolDetails.find(obj => obj.poolAddress.toLowerCase() == poolAddress.toLowerCase())
  } else {
    poolDetail = null
  }

  if (poolDetail != null) {
    apy = parseFloat(poolDetail.apy)
    apy = apy.toFixed(2, 1)
  } else {
    apy = 0
  }

  return apy
}

module.exports = {
  getTradingApy,
}
