const { countFunctionCall } = require('../..')

const getRewardRate = instance => countFunctionCall(instance.methods.sharePerSecond().call())
const getRewardToken = instance => countFunctionCall(instance.methods.share().call())
const getPoolInfo = (pid, instance) => countFunctionCall(instance.methods.poolInfo(pid).call())
const getStartTime = instance => countFunctionCall(instance.methods.poolStartTime().call())
const getFinishTime = instance => countFunctionCall(instance.methods.poolEndTime().call())
const getTotalAllocPoint = instance => countFunctionCall(instance.methods.totalAllocPoint().call())

module.exports = {
  getRewardRate,
  getRewardToken,
  getPoolInfo,
  getStartTime,
  getFinishTime,
  getTotalAllocPoint,
}
