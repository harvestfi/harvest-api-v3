const { countFunctionCall } = require('../..')

const getSupplyRate = instance =>
  countFunctionCall(instance.methods.supplyRatePerTimestamp().call())
const getBorrowRate = instance =>
  countFunctionCall(instance.methods.borrowRatePerTimestamp().call())
const totalSupply = instance => countFunctionCall(instance.methods.totalSupply().call())
const totalBorrows = instance => countFunctionCall(instance.methods.totalBorrows().call())
const totalReserves = instance => countFunctionCall(instance.methods.totalReserves().call())
const getExchangeRate = instance => countFunctionCall(instance.methods.exchangeRateStored().call())
const getAccountSnapshot = (holder, instance) =>
  countFunctionCall(instance.methods.getAccountSnapshot(holder).call())
const getCash = instance => countFunctionCall(instance.methods.getCash().call())
const getInterestRateModel = instance =>
  countFunctionCall(instance.methods.interestRateModel().call())
const getReserveFactor = instance =>
  countFunctionCall(instance.methods.reserveFactorMantissa().call())
const getComptroller = instance => countFunctionCall(instance.methods.comptroller().call())
const getBadDebt = instance => countFunctionCall(instance.methods.badDebt().call())

module.exports = {
  getSupplyRate,
  getBorrowRate,
  totalSupply,
  totalBorrows,
  getExchangeRate,
  getAccountSnapshot,
  getCash,
  totalReserves,
  getInterestRateModel,
  getReserveFactor,
  getComptroller,
  getBadDebt,
}
