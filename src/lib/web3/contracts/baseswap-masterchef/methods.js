const { countFunctionCall } = require('../..')

const getPoolInfo = (poolId, instance) =>
  countFunctionCall(instance.methods.poolInfo(poolId).call())
const getTotalAllocPoint = instance => countFunctionCall(instance.methods.totalAllocPoint().call())
const getBswapPerSec = instance => countFunctionCall(instance.methods.bswapPerSec().call())

module.exports = { getPoolInfo, getTotalAllocPoint, getBswapPerSec }
