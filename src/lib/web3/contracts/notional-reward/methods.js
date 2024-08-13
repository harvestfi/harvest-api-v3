const { countFunctionCall } = require('../..')

const getRewardToken = instance => countFunctionCall(instance.methods.REWARD_TOKEN().call())

const getEmissionRate = instance => countFunctionCall(instance.methods.emissionRatePerYear().call())

const getEndTime = instance => countFunctionCall(instance.methods.endTime().call())

module.exports = {
  getRewardToken,
  getEmissionRate,
  getEndTime,
}
