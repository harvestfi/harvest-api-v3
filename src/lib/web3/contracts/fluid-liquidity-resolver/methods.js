const { countFunctionCall } = require('../..')

const getTokenData = (token, instance) =>
  countFunctionCall(instance.methods.getOverallTokenData(token).call())

module.exports = {
  getTokenData,
}
