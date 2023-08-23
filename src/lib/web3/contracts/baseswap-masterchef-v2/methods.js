const { countFunctionCall } = require('../..')

const getPoolInfo = (poolId, instance) =>
  countFunctionCall(instance.methods.poolInfo(poolId).call())
const getTotalAllocPoint = instance => countFunctionCall(instance.methods.totalAllocPoints().call())
const getTotalAllocPointWETH = instance =>
  countFunctionCall(instance.methods.totalAllocPointsWETH().call())
const getEmissionRates = instance => countFunctionCall(instance.methods.emissionRates().call())

module.exports = { getPoolInfo, getTotalAllocPoint, getTotalAllocPointWETH, getEmissionRates }
