const { countFunctionCall } = require('../..')

const balanceOf = (address, instance) =>
  countFunctionCall(instance.methods.balanceOf(address).call())

const getActiveBalance = (address, instance) =>
  countFunctionCall(instance.methods.activeBalance(address).call())

module.exports = {
  balanceOf,
  getActiveBalance,
}
