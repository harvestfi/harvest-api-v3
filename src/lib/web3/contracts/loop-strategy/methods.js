const { countFunctionCall } = require('../..')

const getBorrowPriceInSupply = instance =>
  countFunctionCall(instance.methods.getBorrowPriceInSupply().call())

module.exports = {
  getBorrowPriceInSupply,
}
