const axios = require('axios')
const { get } = require('lodash')
const { MERKL_ENDPOINT } = require('../../../lib/constants')

const getApy = async (underlying, poolAddress, chainId, reduction) => {
  let response, apy

  try {
    response = await axios.get(`${MERKL_ENDPOINT}?chainIds[]=${chainId}`)
    apy = get(response, `data.${chainId}.pools.${poolAddress}.alm.${underlying}.almAPR`, 0)
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
