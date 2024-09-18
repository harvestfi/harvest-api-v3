const axios = require('axios')
const { get } = require('lodash')
const { MERKL_ENDPOINT } = require('../../../lib/constants')

const getApy = async (underlying, poolAddress, chainId, reduction) => {
  let response, apy

  try {
    response = await axios.get(`${MERKL_ENDPOINT}?chainIds[]=${chainId}`)
    const aprLabel = `Gamma ${underlying}`
    apy = get(response, `data.${chainId}.pools.${poolAddress}.aprs.${aprLabel}`, 0)
    apy = parseFloat(apy) * parseFloat(reduction)
  } catch (err) {
    console.error('MERKL API error: ', err)
    apy = 0
  }

  return apy
}

module.exports = {
  getApy,
}
