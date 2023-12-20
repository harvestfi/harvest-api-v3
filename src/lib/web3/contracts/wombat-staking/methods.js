const { countFunctionCall } = require('../..')

const getPools = (lpAddress, instance) =>
  countFunctionCall(instance.methods.pools(lpAddress).call())

const getMasterMagpie = instance => countFunctionCall(instance.methods.masterMagpie().call())

const getMasterWombat = instance => countFunctionCall(instance.methods.masterWombat().call())

module.exports = { getPools, getMasterMagpie, getMasterWombat }
