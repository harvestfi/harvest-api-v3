const { web3 } = require('./web3')
const { find } = require('lodash')
const BigNumber = require('bignumber.js')
const { pool: poolContractData } = require('./web3/contracts')
const addresses = require('./data/addresses.json')
const { UI_DATA_FILES } = require('./constants')
const { getUIData } = require('./data')
const { getTokenPrice } = require('../prices')
const { getCachedContract } = require('./web3/contractCache')

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

  const farmPoolInstance = getCachedContract({
    web3,
    abi: poolContract.abi,
    address: farmPool.contractAddress,
  })

  const farmPoolTotalSupply = await poolMethods.totalSupply(farmPoolInstance)

  const profitSharingPoolStakedFarm = new BigNumber(farmPoolTotalSupply)

  const result = BigNumber(profitSharingPoolStakedFarm)
    .dividedBy(new BigNumber(10).pow(18))
    .dividedBy(totalSupply)
    .times(100)
    .toString()

  return result
}

module.exports = {
  getPercentOfFARMStaked,
  getTotalFARMSupply,
  getTotalMarketCap,
}
