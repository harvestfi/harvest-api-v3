const { countFunctionCall } = require('../..')

const getBaseRate = instance => countFunctionCall(instance.methods.baseRatePerBlock().call())
const getMultiplier = instance => countFunctionCall(instance.methods.multiplierPerBlock().call())
const getJumpMultiplier = instance =>
  countFunctionCall(instance.methods.jumpMultiplierPerBlock().call())
const getKink = instance => countFunctionCall(instance.methods.kink().call())
const getTimestampsPerYear = instance =>
  countFunctionCall(instance.methods.blocksOrSecondsPerYear().call())
const getUtil = (cash, borrows, reserves, badDebt, instance) =>
  countFunctionCall(instance.methods.utilizationRate(cash, borrows, reserves, badDebt).call())
const getBorrowRate = (cash, borrows, reserves, badDebt, instance) =>
  countFunctionCall(instance.methods.getBorrowRate(cash, borrows, reserves, badDebt).call())
const getSupplyRate = (cash, borrows, reserves, reserveFactor, badDebt, instance) =>
  countFunctionCall(
    instance.methods.getSupplyRate(cash, borrows, reserves, reserveFactor, badDebt).call(),
  )

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
