const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const { fluidLendingResolver, fluidLiquidityResolver } = require('../../../lib/web3/contracts')

const getApy = async (underlying, fToken, reduction, chain) => {
  const web3 = getWeb3(chain)
  const {
    contract: { abi: lendingAbi, address: lendingAddresses },
    methods: lendingMethods,
  } = fluidLendingResolver
  const {
    contract: { abi: liquidityAbi, address: liquidityAddresses },
    methods: liquidityMethods,
  } = fluidLiquidityResolver

  const liquidityInstance = new web3.eth.Contract(liquidityAbi, liquidityAddresses[chain])
  const tokenData = await liquidityMethods.getTokenData(underlying, liquidityInstance)
  const supplyAPR = new BigNumber(tokenData.supplyRate).div(100)

  const lendingInstance = new web3.eth.Contract(lendingAbi, lendingAddresses[chain])
  const rewardData = await lendingMethods.getRewardData(fToken, lendingInstance)
  const rewardAPR = new BigNumber(rewardData.rewardsRate_).div(1e12)

  return supplyAPR.plus(rewardAPR).times(reduction).toFixed()
}

module.exports = {
  getApy,
}
