const { countFunctionCall } = require('../..')

const getRewardsLength = instance =>
  countFunctionCall(instance.methods.distributedTokensLength().call())
const getRewardToken = (idx, instance) =>
  countFunctionCall(instance.methods.distributedToken(idx).call())
const getRewardInfo = (rewardToken, instance) =>
  countFunctionCall(instance.methods.dividendsInfo(rewardToken).call())
const getCycleDuration = instance =>
  countFunctionCall(instance.methods.cycleDurationSeconds().call())
const getTotalAllocation = instance => countFunctionCall(instance.methods.totalAllocation().call())

module.exports = {
  getRewardsLength,
  getRewardToken,
  getRewardInfo,
  getCycleDuration,
  getTotalAllocation,
}
