const BigNumber = require('bignumber.js')
const { web3MATIC } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const { caviarChef, caviarRebaseChef } = require('../../../lib/web3/contracts')
const { CHAIN_IDS } = require('../../../lib/constants')

const getApy = async (underlying, chef, reduction) => {
  const web3 = web3MATIC
  const {
    contract: { abi: chefAbi },
    methods: chefMethods,
  } = caviarChef
  const {
    contract: { abi: rebaseChefAbi },
    methods: rebaseChefMethods,
  } = caviarRebaseChef

  const secondsPerYear = 60 * 60 * 24 * 365.25
  const chefInstance = new web3.eth.Contract(chefAbi, chef)
  const rebaseChef = await chefMethods.getRebaseChef(chefInstance)
  const rebaseChefInstance = new web3.eth.Contract(rebaseChefAbi, rebaseChef)

  const chefRewardRate = new BigNumber(await chefMethods.getRewardPerSecond(chefInstance))
  const chefRewardToken = await chefMethods.getRewardToken(chefInstance)
  const rebaseRewardRate = new BigNumber(
    await rebaseChefMethods.getRewardPerSecond(rebaseChefInstance),
  )
  const rebaseRewardToken = await rebaseChefMethods.getRewardToken(rebaseChefInstance)

  const chefRewardPrice = await getTokenPrice(chefRewardToken, CHAIN_IDS.POLYGON)
  const rebaseRewardPrice = await getTokenPrice(rebaseRewardToken, CHAIN_IDS.POLYGON)
  const underlyingPrice = await getTokenPrice(underlying, CHAIN_IDS.POLYGON)

  const usdRewardPerYear = chefRewardRate
    .times(chefRewardPrice)
    .div(1e9)
    .plus(rebaseRewardRate.times(rebaseRewardPrice).div(1e18))
    .times(secondsPerYear)

  const totalSupply = new BigNumber(await rebaseChefMethods.getTotalSupply(rebaseChefInstance))
  const usdTotalSupply = totalSupply.times(underlyingPrice).div(1e18)

  const rewardAPR = usdRewardPerYear.div(usdTotalSupply).times(100).times(reduction)

  return rewardAPR.toFixed()
}

module.exports = {
  getApy,
}
