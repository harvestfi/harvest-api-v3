const { countFunctionCall } = require('../..')

const balanceOf = (address, instance) =>
  countFunctionCall(instance.methods.balanceOf(address).call())

const decimals = instance => countFunctionCall(instance.methods.decimals().call())

const getSymbol = instance => countFunctionCall(instance.methods.symbol().call())

const getTotalSupply = instance => countFunctionCall(instance.methods.totalSupply().call())

const getTotalAssets = instance => countFunctionCall(instance.methods.totalAssets().call())

const getAssetsInMarket = (instance, marketId) =>
  countFunctionCall(instance.methods.totalAssetsInMarket(marketId).call())

const getInstantWithdrawalFuses = instance =>
  countFunctionCall(instance.methods.getInstantWithdrawalFuses().call())

const getInstantWithdrawalFusesParams = (instance, address, index) =>
  countFunctionCall(instance.methods.getInstantWithdrawalFusesParams(address, index).call())

const getUnrealizedManagementFee = instance =>
  countFunctionCall(instance.methods.getUnrealizedManagementFee().call())

const getManagementFeeData = instance =>
  countFunctionCall(instance.methods.getManagementFeeData().call())

const deposit = (amount, address, instance) =>
  countFunctionCall(instance.methods.deposit(amount, address).send({ from: address }))

const withdraw = (amount, address, instance) =>
  countFunctionCall(instance.methods.withdraw(amount, address, address).send({ from: address }))

const getMarketSubstrates = (instance, marketId) =>
  countFunctionCall(instance.methods.getMarketSubstrates(marketId).call())

module.exports = {
  balanceOf,
  decimals,
  getSymbol,
  getTotalSupply,
  getTotalAssets,
  getAssetsInMarket,
  getInstantWithdrawalFuses,
  getInstantWithdrawalFusesParams,
  getUnrealizedManagementFee,
  getManagementFeeData,
  deposit,
  withdraw,
  getMarketSubstrates,
}
