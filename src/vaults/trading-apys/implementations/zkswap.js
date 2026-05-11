const { getJson } = require('../../../lib/http-tls')
const { ZKSWAP_URL } = require('../../../lib/constants')

const REQUEST_HEADERS = {
  Referer: 'https://zkswap.finance/',
  Origin: 'https://zkswap.finance',
}

const getTradingApy = async lpAddress => {
  try {
    const data = await getJson(ZKSWAP_URL, { headers: REQUEST_HEADERS })
    const apr = Number(data?.[lpAddress.toLowerCase()]?.apr24h) || 0
    return apr ? apr.toFixed(2) : 0
  } catch (err) {
    console.error('zkswap API error', {
      message: err.message,
      status: err.status,
      url: ZKSWAP_URL,
    })
    return 0
  }
}

module.exports = {
  getTradingApy,
}
