const { countFunctionCall } = require('../..')

const getPoolInfo = (poolId, instance) =>
  countFunctionCall(instance.methods.poolInfo(poolId).call())
const getTotalAllocPoint = instance => countFunctionCall(instance.methods.totalAllocPoint().call())
const getRewardPerSecond = instance => countFunctionCall(instance.methods.sushiPerSecond().call())

module.exports = { getPoolInfo, getTotalAllocPoint, getRewardPerSecond }
