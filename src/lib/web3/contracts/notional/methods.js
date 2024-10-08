const { countFunctionCall } = require('../..')

const getNTokenPresentValueUnderlyingDenominated = (currencyId, instance) =>
  countFunctionCall(instance.methods.nTokenPresentValueUnderlyingDenominated(currencyId).call())

const getNTokenGetClaimableIncentives = (account, blockTime, instance) =>
  countFunctionCall(instance.methods.nTokenGetClaimableIncentives(account, blockTime).call())

const getNTokenAccount = (tokenAddress, instance) =>
  countFunctionCall(instance.methods.getNTokenAccount(tokenAddress).call())

const getSecondaryIncentiveRewarder = (currencyId, instance) =>
  countFunctionCall(instance.methods.getSecondaryIncentiveRewarder(currencyId).call())

module.exports = {
  getNTokenPresentValueUnderlyingDenominated,
  getNTokenGetClaimableIncentives,
  getNTokenAccount,
  getSecondaryIncentiveRewarder,
}
