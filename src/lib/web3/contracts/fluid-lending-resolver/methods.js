const { countFunctionCall } = require('../..')

const getRewardData = (fToken, instance) =>
  countFunctionCall(instance.methods.getFTokenRewards(fToken).call())

module.exports = {
  getRewardData,
}
