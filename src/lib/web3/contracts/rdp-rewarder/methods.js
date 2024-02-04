const { countFunctionCall } = require('../..')

const isRewardToken = (address, instance) =>
  countFunctionCall(instance.methods.isRewardToken(address).call())
const getStakingToken = instance => countFunctionCall(instance.methods.rewardTokens(0).call())
const getRewardPerToken = (rewardToken, instance) =>
  countFunctionCall(instance.methods.RewardPerToken(rewardToken).call())
const getStakingDecimals = instance => countFunctionCall(instance.methods.stakingDecimals().call())
const getTotalStaked = instance => countFunctionCall(instance.methods.totalStaked().call())

module.exports = {
  isRewardToken,
  getStakingToken,
  getRewardPerToken,
  getStakingDecimals,
  getTotalStaked,
}
