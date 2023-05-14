const { countFunctionCall } = require('../..')

const getTotalSupply = instance => countFunctionCall(instance.methods.totalSupply().call())
const getRewardPerSecond = instance => countFunctionCall(instance.methods.rewardRate().call())

module.exports = { getTotalSupply, getRewardPerSecond }
