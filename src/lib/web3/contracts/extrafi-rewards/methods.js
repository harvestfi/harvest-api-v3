const { countFunctionCall } = require('../..')

const getRewardsLength = instance =>
  countFunctionCall(instance.methods.rewardsTokenListLength().call())
const getRewardToken = (i, instance) => countFunctionCall(instance.methods.rewardTokens(i).call())
const getRewardData = (token, instance) =>
  countFunctionCall(instance.methods.rewardData(token).call())
const getStakedToken = instance => countFunctionCall(instance.methods.stakedToken().call())
const getTotalStaked = instance => countFunctionCall(instance.methods.totalStaked().call())

module.exports = {
  getRewardsLength,
  getRewardToken,
  getRewardData,
  getStakedToken,
  getTotalStaked,
}
