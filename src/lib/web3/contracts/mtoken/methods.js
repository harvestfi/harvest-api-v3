const { countFunctionCall } = require('../..')

const getSupplyRate = instance =>
  countFunctionCall(instance.methods.supplyRatePerTimestamp().call())
const getBorrowRate = instance =>
  countFunctionCall(instance.methods.borrowRatePerTimestamp().call())
const totalSupply = instance => countFunctionCall(instance.methods.totalSupply().call())
const totalBorrows = instance => countFunctionCall(instance.methods.totalBorrows().call())
const getExchangeRate = instance => countFunctionCall(instance.methods.exchangeRateStored().call())

module.exports = {
  getSupplyRate,
  getBorrowRate,
  totalSupply,
  totalBorrows,
  getExchangeRate,
}
