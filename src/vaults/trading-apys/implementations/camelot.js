const { getCamelotData } = require('../../../lib/third-party/camelot')
const { get } = require('lodash')

const getTradingApy = async (poolAddress, isV3 = false) => {
  let apy
  try {
    const data = await getCamelotData(isV3)
    apy = get(data, `data.pools.${poolAddress}.oneDayAverageAPR`, 0) // 1 day moving average APY from trading fees
  } catch (err) {
    console.error('Camelot API error: ', err)
    apy = 0
  }

  return apy
}

module.exports = {
  getTradingApy,
}
