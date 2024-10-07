const { countFunctionCall } = require('../..')

const getRewardLength = instance => countFunctionCall(instance.methods.rewardTokensLength().call())
const getRewardToken = (i, instance) => countFunctionCall(instance.methods.rewardTokens(i).call())
const getTotalStaked = instance => countFunctionCall(instance.methods.totalStaked().call())
const getStakingToken = instance => countFunctionCall(instance.methods.shareToken().call())
const getRewardData = (rewardToken, instance) =>
  countFunctionCall(instance.methods.rewardData(rewardToken).call())

module.exports = { getRewardLength, getRewardToken, getTotalStaked, getStakingToken, getRewardData }
