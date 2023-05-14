const { countFunctionCall } = require('../..')

const getPoolInfo = (poolId, instance) =>
  countFunctionCall(instance.methods.poolInfo(poolId).call())
const getTotalAllocPoint = instance => countFunctionCall(instance.methods.totalAllocPoint().call())
const getPoisonPerBlock = instance => countFunctionCall(instance.methods.PoisonPerBlock().call())

module.exports = { getPoolInfo, getTotalAllocPoint, getPoisonPerBlock }
