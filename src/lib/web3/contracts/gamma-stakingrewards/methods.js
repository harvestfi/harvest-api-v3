const { countFunctionCall } = require('../..')

const getRewardRate = instance => countFunctionCall(instance.methods.rewardRate().call())
const getRewardToken = instance => countFunctionCall(instance.methods.rewardsToken().call())
const getTotalSupply = instance => countFunctionCall(instance.methods.totalSupply().call())
const getPeriodFinish = instance => countFunctionCall(instance.methods.periodFinish().call())
const getBalance = (account, instance) =>
  countFunctionCall(instance.methods.balanceOf(account).call())

module.exports = {
  getRewardRate,
  getRewardToken,
  getTotalSupply,
  getPeriodFinish,
  getBalance,
}
