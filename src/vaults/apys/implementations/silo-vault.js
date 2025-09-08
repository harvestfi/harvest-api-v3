const BigNumber = require('bignumber.js')
const { SILO_ENDPOINT } = require('../../../lib/constants.js')
const { cachedAxios } = require('../../../lib/db/models/cache.js')
const { get } = require('lodash')

const getApy = async (siloVault, factor, chain) => {
  let apy

  const chainNames = {
    1: 'ethereum',
    42161: 'arbitrum',
  }

  try {
    const response = await cachedAxios.get(`${SILO_ENDPOINT}/${chainNames[chain]}-${siloVault}`)
    const apyResult = get(response, `data.supplyApr`, '0')
    apy = new BigNumber(apyResult).div(1e16)
  } catch (err) {
    console.error('Silo API error: ', err)
    apy = new BigNumber(0)
  }

  apy = apy.times(factor)

  return apy.toFixed()
}

module.exports = {
  getApy,
}
