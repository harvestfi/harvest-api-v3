const { countFunctionCall } = require('../..')

const getRewardRate = (epoch, instance) =>
  countFunctionCall(instance.methods.epochBasedPerSecond(epoch).call())
const getRewardToken = instance => countFunctionCall(instance.methods.based().call())
const getPoolInfo = (pid, instance) => countFunctionCall(instance.methods.poolInfo(pid).call())
const getEpochFinishTime = (epoch, instance) =>
  countFunctionCall(instance.methods.epochEndTimes(epoch).call())
const getTotalAllocPoint = instance => countFunctionCall(instance.methods.totalAllocPoint().call())

module.exports = {
  getRewardRate,
  getRewardToken,
  getPoolInfo,
  getEpochFinishTime,
  getTotalAllocPoint,
}
