const axios = require('axios')
const { get } = require('lodash')
const { CURVE_API_URLS } = require('../../../lib/constants')

const getTradingApy = async (poolAddress, chainId) => {
  let response, poolDetails, poolDetail, apy

  const url = CURVE_API_URLS[chainId]

  try {
    response = await axios.get(`${url}`)
    poolDetails = get(response, 'data.data.pools', 0)
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
    apy = parseFloat(poolDetail.latestDailyApyPcent)
    apy = apy.toFixed(2, 1)
  } else {
    apy = 0
  }

  return apy
}

module.exports = {
  getTradingApy,
}
