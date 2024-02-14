const { countFunctionCall } = require('../..')

const getRewardsData = (asset, reward, instance) =>
  countFunctionCall(instance.methods.getRewardsData(asset, reward).call())
const getRewardsList = instance => countFunctionCall(instance.methods.getRewardsList().call())

module.exports = {
  getRewardsData,
  getRewardsList,
}
