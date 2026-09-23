const { getCurvePools } = require('../../../lib/third-party/curve')

const getTradingApy = async (poolAddress, chainId) => {
  const pools = await getCurvePools(chainId)

  const poolDetail = pools
    ? pools.find(obj => obj.address && obj.address.toLowerCase() === poolAddress.toLowerCase())
    : null

  if (!poolDetail) {
    return 0
  }

  const apy = parseFloat(poolDetail.latestDailyApyPcent)

  return Number.isFinite(apy) ? apy.toFixed(2) : 0
}

module.exports = {
  getTradingApy,
}
