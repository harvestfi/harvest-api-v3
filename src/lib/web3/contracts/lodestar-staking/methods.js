const { countFunctionCall } = require('../..')

const getRewardPerSecond = instance => countFunctionCall(instance.methods.wethPerSecond().call())
const getStakingToken = instance => countFunctionCall(instance.methods.LODE().call())
const getRewardToken = instance => countFunctionCall(instance.methods.WETH().call())
const getTotalSupply = instance => countFunctionCall(instance.methods.totalSupply().call())

module.exports = {
  getRewardPerSecond,
  getStakingToken,
  getRewardToken,
  getTotalSupply,
}
