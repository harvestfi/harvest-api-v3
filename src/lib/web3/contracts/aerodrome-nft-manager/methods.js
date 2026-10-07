const { countFunctionCall } = require('../..')

const getPositions = (tokenId, instance) =>
  countFunctionCall(instance.methods.positions(tokenId).call())
// A position staked in a CL gauge is held by the gauge itself, so the owner tells staked from unstaked.
const getOwnerOf = (tokenId, instance) =>
  countFunctionCall(instance.methods.ownerOf(tokenId).call())

module.exports = {
  getPositions,
  getOwnerOf,
}
