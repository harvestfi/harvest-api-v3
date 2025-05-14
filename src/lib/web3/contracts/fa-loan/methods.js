const { countFunctionCall } = require('../..')

const getLastEpochReward = instance => countFunctionCall(instance.methods.lastEpochReward().call())

module.exports = {
  getLastEpochReward,
}
