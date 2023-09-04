const { countFunctionCall } = require('../..')

const getRewardToken = instance => countFunctionCall(instance.methods.rewardToken().call())
const getRewardPerSecond = instance => countFunctionCall(instance.methods.rewardPerSecond().call())
const getRebaseChef = instance => countFunctionCall(instance.methods.rebaseChef().call())

module.exports = { getRewardToken, getRewardPerSecond, getRebaseChef }
