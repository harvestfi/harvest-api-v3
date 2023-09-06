const { countFunctionCall } = require('../..')

const getMarketConfig = (mToken, rewardToken, instance) =>
  countFunctionCall(instance.methods.getConfigForMarket(mToken, rewardToken).call())

module.exports = {
  getMarketConfig,
}
