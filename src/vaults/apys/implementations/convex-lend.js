const { get } = require('lodash')
const { client } = require('../../../lib/http')
const { CONVEX_API_URLS, CHAIN_IDS } = require('../../../lib/constants')

const getApy = async (poolId, profitSharingFactor) => {
  try {
    if (!poolId) {
      return '0'
    }

    const res = await client.get(CONVEX_API_URLS[CHAIN_IDS.ETH])
    const apys = get(res, 'data.apys', res?.data?.apys ?? res?.apys ?? {})
    const pool = apys[poolId]

    if (!pool) {
      return '0'
    }

    let totalApr = Number(pool.totalApr)
    if (!Number.isFinite(totalApr)) {
      totalApr =
        (Number(pool.baseApy) || 0) +
        (Number(pool.crvApy) || 0) +
        (Number(pool.cvxApy) || 0) +
        (Array.isArray(pool.extraRewards)
          ? pool.extraRewards.reduce((sum, r) => sum + (Number(r?.apy) || 0), 0)
          : 0)
    }

    const totalPct = Number(totalApr) * Number(profitSharingFactor)
    return totalPct.toFixed(2, 1)
  } catch (err) {
    console.error('convex-lend error:', err)
    return '0'
  }
}

module.exports = {
  getApy,
}
