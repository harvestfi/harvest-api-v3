const { get } = require('lodash')
const { client } = require('../../../lib/http')
const { ZKSWAP_URL } = require('../../../lib/constants')

const getTradingApy = async pair => {
  let apy

  try {
    const response = await client.get(ZKSWAP_URL)
    apy = get(
      get(response, `data`, []).find(pool => pool.address === pair),
      'feeApr',
      0,
    )
  } catch (err) {
    console.error('zkswap API error', {
      message: err.message,
      status: err.response?.status,
      url: err.config?.url,
    })
    apy = 0
  }

  return apy !== 0 ? apy.toFixed(2, 1) : 0
}

module.exports = {
  getTradingApy,
}
