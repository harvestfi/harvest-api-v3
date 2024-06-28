const { countFunctionCall } = require('../..')

const getStakingToken = instance => countFunctionCall(instance.methods.stakingToken().call())
const getRewardToken = instance => countFunctionCall(instance.methods.rewardsToken().call())
const getTotalSupply = instance => countFunctionCall(instance.methods.totalSupply().call())
const getRewardRate = instance => countFunctionCall(instance.methods.rewardRate().call())
const getPeriodFinish = instance => countFunctionCall(instance.methods.periodFinish().call())

module.exports = {
  getStakingToken,
  getRewardToken,
  getTotalSupply,
  getRewardRate,
  getPeriodFinish,
}
