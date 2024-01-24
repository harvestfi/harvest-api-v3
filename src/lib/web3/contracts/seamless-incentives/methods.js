const { countFunctionCall } = require('../..')

const getRewardsData = (asset, reward, instance) =>
  countFunctionCall(instance.methods.getRewardsData(asset, reward).call())

module.exports = {
  getRewardsData,
}
