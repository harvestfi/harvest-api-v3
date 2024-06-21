const { countFunctionCall } = require('../..')

const getRewardRates = instance => countFunctionCall(instance.methods.rewardRateAll().call())

module.exports = {
  getRewardRates,
}
