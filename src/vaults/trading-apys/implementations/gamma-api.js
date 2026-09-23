const { get } = require('lodash')
const { getGammaData, HYPERVISOR_PATHS } = require('../../../lib/third-party/gamma')

const getTradingApy = async poolAddress => {
  const data = await getGammaData(HYPERVISOR_PATHS.QUICKSWAP)
  const apy = parseFloat(get(data, `${poolAddress.toLowerCase()}.returns.daily.feeApr`, 0)) * 100

  return Number.isFinite(apy) ? apy.toFixed(2) : '0.00'
}

module.exports = {
  getTradingApy,
}
