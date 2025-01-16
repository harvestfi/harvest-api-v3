const { countFunctionCall } = require('../..')

const getRewardDistributors = instance =>
  countFunctionCall(instance.methods.getRewardDistributors().call())

module.exports = { getRewardDistributors }
