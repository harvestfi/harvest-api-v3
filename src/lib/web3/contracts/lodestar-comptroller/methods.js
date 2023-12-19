const { countFunctionCall } = require('../..')

const getBorrowRewardRate = (cToken, instance) =>
  countFunctionCall(instance.methods.compBorrowSpeeds(cToken).call())
const getSupplyRewardRate = (cToken, instance) =>
  countFunctionCall(instance.methods.compSupplySpeeds(cToken).call())
const getAllMarkets = instance => countFunctionCall(instance.methods.getAllMarkets().call())

module.exports = {
  getBorrowRewardRate,
  getSupplyRewardRate,
  getAllMarkets,
}
