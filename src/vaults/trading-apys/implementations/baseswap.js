const axios = require('axios')
const { get } = require('lodash')
const { DEXSCREENER_API_URL } = require('../../../lib/constants')

//Base token should be lp's main token
const getTradingApy = async (lpToken, baseToken) => {
  let response, pairs, pair, apy
  try {
    response = await axios.get(`${DEXSCREENER_API_URL}/${baseToken}`)
    pairs = get(response, 'data.pairs', 0)
  } catch (err) {
    console.error('DexScreener API error: ', err)
    response = null
    pairs = null
  }

  if (pairs != null) {
    pair = pairs.find(obj => obj.pairAddress.toLowerCase() == lpToken.toLowerCase())
  } else {
    pair = null
  }

  if (pair != null) {
    let dailyVolume = parseFloat(pair.volume?.h24)
    let tvlInUSD = parseFloat(pair.liquidity?.usd)

    // feeTier on Baseswap is 0.17 %
    // apy = (dailyVolume * 365 * 0.0017 / tvlInUSD) * 100
    apy = (dailyVolume * 365 * 0.17) / tvlInUSD // 1 day moving average APY from trading fees
    apy = apy.toFixed(2, 1)
  } else {
    apy = 0
  }

  return apy
}

module.exports = {
  getTradingApy,
}
