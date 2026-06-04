const { countFunctionCall } = require('../..')

const getPositions = (tokenId, instance) =>
  countFunctionCall(instance.methods.positions(tokenId).call())

module.exports = {
  getPositions,
}
