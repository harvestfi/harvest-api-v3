const { countFunctionCall } = require('../..')

const getPoolInfo = instance => countFunctionCall(instance.methods.getPoolInfo().call())
const getStakingPosition = (id, instance) =>
  countFunctionCall(instance.methods.getStakingPosition(id).call())
const getXGrailShare = instance => countFunctionCall(instance.methods.xGrailRewardsShare().call())
const getMaster = instance => countFunctionCall(instance.methods.master().call())
const getPosId = (strategyAddress, instance) =>
  countFunctionCall(instance.methods.tokenOfOwnerByIndex(strategyAddress, 0).call())

module.exports = { getPoolInfo, getStakingPosition, getXGrailShare, getMaster, getPosId }
