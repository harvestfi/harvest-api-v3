const { web3 } = require('./web3')
const { find } = require('lodash')
const BigNumber = require('bignumber.js')
const { pool: poolContractData } = require('./web3/contracts')
const addresses = require('./data/addresses.json')
const { UI_DATA_FILES } = require('./constants')
const { getUIData } = require('./data')
const { getTokenPrice } = require('../prices')

const getTotalFARMSupply = () => {
  return 690420
}

const getTotalMarketCap = async () => {
  const totalCirculatingSupply = getTotalFARMSupply()
  const currentFARMPrice = await getTokenPrice(addresses.FARM)

  const totalMarketCap = new BigNumber(totalCirculatingSupply).times(currentFARMPrice).toFixed(2)

  return totalMarketCap
}

const getPercentOfFARMStaked = async () => {
  const pools = await getUIData(UI_DATA_FILES.POOLS)
  const farmPool = find(pools, pool => pool.id === 'profit-sharing-farm')

  const { methods: poolMethods, contract: poolContract } = poolContractData

  const totalSupply = getTotalFARMSupply()

  const farmPoolInstance = new web3.eth.Contract(poolContract.abi, farmPool.contractAddress)

  const farmPoolTotalSupply = await poolMethods.totalSupply(farmPoolInstance)

  const profitSharingPoolStakedFarm = new BigNumber(farmPoolTotalSupply)

  const result = BigNumber(profitSharingPoolStakedFarm)
    .dividedBy(new BigNumber(10).pow(18))
    .dividedBy(totalSupply)
    .times(100)
    .toString()

  return result
}

const getStakingMetrics = async () => {
  const pools = await getUIData(UI_DATA_FILES.POOLS);
  const farmPool = find(pools, pool => pool.id === 'profit-sharing-farm');
  const currentFARMPrice = await getTokenPrice(addresses.FARM);
  
  const { methods: poolMethods, contract: poolContract } = poolContractData;
  const farmPoolInstance = new web3.eth.Contract(poolContract.abi, farmPool.contractAddress);
  
  // Get multiple metrics in one call
  const [
    farmPoolTotalSupply,
    poolRewardRate,
    totalStakers
  ] = await Promise.all([
    poolMethods.totalSupply(farmPoolInstance),
    poolMethods.rewardRate ? poolMethods.rewardRate(farmPoolInstance) : 0,
    poolMethods.totalStakers ? poolMethods.totalStakers(farmPoolInstance) : 0
  ]);
  
  const profitSharingPoolStakedFarm = new BigNumber(farmPoolTotalSupply);
  const totalSupply = getTotalFARMSupply();
  
  const stakedFarm = profitSharingPoolStakedFarm.dividedBy(new BigNumber(10).pow(18));
  const stakedValueUSD = stakedFarm.times(currentFARMPrice);
  
  const percentStaked = stakedFarm.dividedBy(totalSupply).times(100);
  
  // Calculate APR/APY if reward rate is available
  let estimatedAPR = null;
  if (poolRewardRate && poolRewardRate > 0) {
    const yearlyRewards = new BigNumber(poolRewardRate).times(365 * 24 * 60 * 60);
    const rewardsValueUSD = yearlyRewards.dividedBy(1e18).times(currentFARMPrice);
    estimatedAPR = rewardsValueUSD.dividedBy(stakedValueUSD).times(100);
  }
  
  return {
    stakedFarm: stakedFarm.toString(),
    stakedValueUSD: stakedValueUSD.toString(),
    percentStaked: percentStaked.toString(),
    totalStakers: totalStakers || 0,
    estimatedAPR: estimatedAPR ? estimatedAPR.toString() : null,
    lastUpdated: Date.now()
  };
};

module.exports = {
  getPercentOfFARMStaked,
  getTotalFARMSupply,
  getTotalMarketCap,
  getStakingMetrics,
}
