const axios = require('axios')
const { get } = require('lodash')
const { CURVE_FINANCE_BASE_API_URL } = require('../../../lib/constants')

const getTradingApy = async poolAddress => {
  let response, poolDetails, poolDetail, apy

  try {
    response = await axios.get(`${CURVE_FINANCE_BASE_API_URL}`)
    poolDetails = get(response, 'data.data', 0)
  } catch (err) {
    console.error('Curve API error: ', err)
    response = null
    poolDetails = null
  }

  if (poolDetails != null) {
    poolDetail = poolDetails.find(obj => obj.address.toLowerCase() == poolAddress.toLowerCase())
  } else {
    poolDetail = null
  }

  if (poolDetail != null) {
    apy = parseFloat(poolDetail.base_daily_apr) * 100
    apy = apy.toFixed(2, 1)
  } else {
    apy = 0
  }

  return apy
}

module.exports = {
  getTradingApy,
}
