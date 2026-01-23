const BigNumber = require('bignumber.js')
const { get } = require('lodash')
const { client } = require('../../../lib/http')
const { SYNCSWAP_API_URL, SYNCSWAP_FEE_API_URL } = require('../../../lib/constants')
const { getTokenPrice } = require('../../../prices')
const { getTradingVolumeDaily } = require('../../../lib/third-party/syncswap')

const getTradingApy = async (pair, chain) => {
  let apy

  try {
    const poolResponse = await client.get(SYNCSWAP_API_URL)
    const poolData = get(poolResponse, `data.pools`, []).find(pool => pool.p === pair)
    const token0Price = new BigNumber(await getTokenPrice(poolData.t0[0], chain))
    const token0Decimal = poolData.t0[3]
    const token1Price = new BigNumber(await getTokenPrice(poolData.t1[0], chain))
    const token1Decimal = poolData.t1[3]

    const token0VolumeUSD = new BigNumber(poolData.r0)
      .dividedBy(new BigNumber(10).pow(token0Decimal))
      .times(token0Price)
      .toFixed(2, 1)
    const token1VolumeUSD = new BigNumber(poolData.r1)
      .dividedBy(new BigNumber(10).pow(token1Decimal))
      .times(token1Price)
      .toFixed(2, 1)

    if (poolData.t == 3) {
      //aqua pool
      const feeResponse = await client.get(SYNCSWAP_FEE_API_URL)
      const feeData = get(feeResponse, `data.data`, []).find(
        data => data.pair.toLowerCase() === pair.toLowerCase(),
      )

      const token0DailyFee = new BigNumber(feeData.amount0)
        .dividedBy(new BigNumber(10).pow(token0Decimal))
        .times(token0Price)
        .toFixed(2, 1)

      const token1DailyFee = new BigNumber(feeData.amount1)
        .dividedBy(new BigNumber(10).pow(token1Decimal))
        .times(token1Price)
        .toFixed(2, 1)

      // fee apr calculation : APR = (24h volume * pool swap fee * LP fee share * 365) / TVL
      // dailyFee = 24h volume * pool swap fee
      // LP fee Share = 1 - protocolFee
      apy =
        ((Number(token0DailyFee) + Number(token1DailyFee)) *
          (1 - Number(poolData.pf) / 100000) *
          365 *
          100) /
        (Number(token0VolumeUSD) + Number(token1VolumeUSD))
    } else {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const yesterday = new Date(today)
      yesterday.setDate(today.getDate() - 1)
      const timestamp = Math.floor(yesterday.getTime() / 1000)
      const dailyVolume = await getTradingVolumeDaily(pair.toLowerCase(), timestamp)
      const swapFee = new BigNumber(poolData.f0).toFixed()
      apy =
        (Number(dailyVolume) *
          (swapFee / 100000) *
          (1 - Number(poolData.pf) / 100000) *
          365 *
          100) /
        (Number(token0VolumeUSD) + Number(token1VolumeUSD))
    }
  } catch (err) {
    console.error('syncswap API error: ', err)
    apy = 0
  }

  return apy !== 0 ? apy.toFixed(2, 1) : 0
}

module.exports = {
  getTradingApy,
}
