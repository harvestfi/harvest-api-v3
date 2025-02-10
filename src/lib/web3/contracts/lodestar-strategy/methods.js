const { countFunctionCall } = require('../..')

const getBorrowBalance = instance =>
  countFunctionCall(instance.methods.borrowedInUnderlying().call())
const getSupplyBalance = instance =>
  countFunctionCall(instance.methods.suppliedInUnderlying().call())
const getInvestedBalance = instance =>
  countFunctionCall(instance.methods.investedUnderlyingBalance().call())
const getCollateralFactor = instance =>
  countFunctionCall(instance.methods.collateralFactorNumerator().call())
const fold = instance => countFunctionCall(instance.methods.fold().call())

module.exports = {
  getBorrowBalance,
  getSupplyBalance,
  getInvestedBalance,
  getCollateralFactor,
  fold,
}
