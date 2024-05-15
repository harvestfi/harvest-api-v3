const { countFunctionCall } = require('../..')

const getPoolInfo = (poolId, instance) =>
  countFunctionCall(instance.methods.poolInfo(poolId).call())
const getTotalAllocPoint = instance => countFunctionCall(instance.methods.totalAllocPoint().call())
const getRewardPerSec = instance => countFunctionCall(instance.methods.zfPerSecond().call())
const getRewardToken = instance => countFunctionCall(instance.methods.zf().call())

module.exports = { getPoolInfo, getTotalAllocPoint, getRewardPerSec, getRewardToken }
