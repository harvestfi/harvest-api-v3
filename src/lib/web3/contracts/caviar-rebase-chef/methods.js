const { countFunctionCall } = require('../..')

const getRewardToken = instance => countFunctionCall(instance.methods.rewardToken().call())
const getRewardPerSecond = instance => countFunctionCall(instance.methods.rewardPerSecond().call())
const getTotalSupply = instance =>
  countFunctionCall(instance.methods.underlyingTotalSupply().call())

module.exports = { getRewardToken, getRewardPerSecond, getTotalSupply }
