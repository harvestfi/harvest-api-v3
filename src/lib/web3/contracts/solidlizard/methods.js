const { countFunctionCall } = require('../..')

const rewardRate = (token, instance) => countFunctionCall(instance.methods.rewardRate(token).call())

const derivedSupply = instance => countFunctionCall(instance.methods.derivedSupply().call())

module.exports = {
  rewardRate,
  derivedSupply,
}
