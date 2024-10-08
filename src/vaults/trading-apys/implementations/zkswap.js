const { get } = require('lodash')
const { cachedAxios } = require('../../../lib/db/models/cache')
const { ZKSWAP_URL } = require('../../../lib/constants')

const getTradingApy = async pair => {
  let apy

  try {
    const response = await cachedAxios.get(ZKSWAP_URL)
    apy = get(
      get(response, `data`, []).find(pool => pool.address === pair),
      'feeApr',
      0,
    )
  } catch (err) {
    console.error('zkswap API error: ', err)
    apy = 0
  }

  return apy !== 0 ? apy.toFixed(2, 1) : 0
}

module.exports = {
  getTradingApy,
}
