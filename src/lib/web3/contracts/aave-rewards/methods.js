const { countFunctionCall } = require('../..')

const getRewardsList = instance => countFunctionCall(instance.methods.getRewardsList().call())
const getRewardsData = (asset, reward, instance) =>
  countFunctionCall(instance.methods.getRewardsData(asset, reward).call())

module.exports = {
  getRewardsList,
  getRewardsData,
}
