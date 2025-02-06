const { countFunctionCall } = require('../..')

const getMarketConfig = (mToken, rewardToken, instance) =>
  countFunctionCall(instance.methods.getConfigForMarket(mToken, rewardToken).call())
const getAllMarketConfigs = (mToken, instance) =>
  countFunctionCall(instance.methods.getAllMarketConfigs(mToken).call())

module.exports = {
  getMarketConfig,
  getAllMarketConfigs,
}
