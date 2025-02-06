const { countFunctionCall } = require('../..')

const getBaseRate = instance => countFunctionCall(instance.methods.baseRatePerTimestamp().call())
const getMultiplier = instance =>
  countFunctionCall(instance.methods.multiplierPerTimestamp().call())
const getJumpMultiplier = instance =>
  countFunctionCall(instance.methods.jumpMultiplierPerTimestamp().call())
const getKink = instance => countFunctionCall(instance.methods.kink().call())
const getTimestampsPerYear = instance =>
  countFunctionCall(instance.methods.timestampsPerYear().call())
const getUtil = (cash, borrows, reserves, instance) =>
  countFunctionCall(instance.methods.utilizationRate(cash, borrows, reserves).call())
const getBorrowRate = (cash, borrows, reserves, instance) =>
  countFunctionCall(instance.methods.getBorrowRate(cash, borrows, reserves).call())
const getSupplyRate = (cash, borrows, reserves, reserveFactor, instance) =>
  countFunctionCall(instance.methods.getSupplyRate(cash, borrows, reserves, reserveFactor).call())

module.exports = {
  getBaseRate,
  getMultiplier,
  getJumpMultiplier,
  getKink,
  getTimestampsPerYear,
  getUtil,
  getBorrowRate,
  getSupplyRate,
}
