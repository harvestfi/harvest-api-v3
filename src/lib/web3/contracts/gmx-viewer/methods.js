const { countFunctionCall } = require('../..')

const getDepositAmountOut = (market, amountIn, staleCheck, instance) =>
  countFunctionCall(instance.methods.getDepositAmountOut(market, amountIn, staleCheck).call())
const getWithdrawalAmountOut = (market, amountIn, staleCheck, instance) =>
  countFunctionCall(instance.methods.getWithdrawalAmountOut(market, amountIn, staleCheck).call())

module.exports = {
  getDepositAmountOut,
  getWithdrawalAmountOut,
}
