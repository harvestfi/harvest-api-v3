const { countFunctionCall } = require('../..')

const getToken = (i, instance) => countFunctionCall(instance.methods.getToken(i).call())
const getVirtualPrice = instance => countFunctionCall(instance.methods.getVirtualPrice().call())

module.exports = {
  getToken,
  getVirtualPrice,
}
