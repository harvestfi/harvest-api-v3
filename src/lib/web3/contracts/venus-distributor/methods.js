const { countFunctionCall } = require('../..')

const getRewardToken = instance => countFunctionCall(instance.methods.rewardToken().call())
const getSupplyRate = (cToken, instance) =>
  countFunctionCall(instance.methods.rewardTokenSupplySpeeds(cToken).call())
const getBorrowRate = (cToken, instance) =>
  countFunctionCall(instance.methods.rewardTokenBorrowSpeeds(cToken).call())

module.exports = { getRewardToken, getSupplyRate, getBorrowRate }
