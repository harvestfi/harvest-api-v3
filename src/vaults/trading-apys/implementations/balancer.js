const { getPoolInfo } = require('../../../lib/third-party/balancer')
const { get } = require('lodash')

const getTradingApy = async (poolId, networkId) => {
  try {
    const poolInfo = await getPoolInfo(poolId, networkId)
    const dynamicData = get(poolInfo, 'dynamicData', {})

    if (!dynamicData.aprItems) {
      console.error('Something went wrong with the Balancer API. Swap APY not available')
      return 0
    }

    const aprItem = dynamicData.aprItems.find(item => item.id === `${poolId}-swap-apr`)
    const ibYieldItems = dynamicData.aprItems.filter(item => item.type === 'IB_YIELD')

    const baseApr = aprItem ? parseFloat(aprItem.apr) * 100 : 0
    const boostedApr = ibYieldItems.reduce((total, item) => total + parseFloat(item.apr) * 100, 0)

    return (baseApr + boostedApr).toFixed(2)
  } catch (error) {
    console.error('Failed to retrieve Balancer trading APY:', error)
    return 0
  }
}

module.exports = {
  getTradingApy,
}
