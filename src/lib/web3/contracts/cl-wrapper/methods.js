const { countFunctionCall } = require('../..')

const getAsset = instance => countFunctionCall(instance.methods.asset().call())
const getTotalSupply = instance => countFunctionCall(instance.methods.totalSupply().call())
const getTotalAssets = instance => countFunctionCall(instance.methods.totalAssets().call())
const convertToAssets = (shares, instance) =>
  countFunctionCall(instance.methods.convertToAssets(shares).call())

module.exports = {
  getAsset,
  getTotalSupply,
  getTotalAssets,
  convertToAssets,
}
