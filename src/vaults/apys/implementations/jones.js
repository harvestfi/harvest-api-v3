const BigNumber = require('bignumber.js')
const { web3ARBITRUM } = require('../../../lib/web3/index.js')
const masterContract = require('../../../lib/web3/contracts/jones-masterchef/contract.json')
const {
  getPoolInfo,
  getTotalAllocPoint,
  getRewardPerSecond,
} = require('../../../lib/web3/contracts/jones-masterchef/methods.js')

const { token: tokenContractData } = require('../../../lib/web3/contracts/index.js')
const { getTokenPrice } = require('../../../prices/index.js')

const getPoolWeight = async (poolInfo, masterInstance) => {
  const totalAllocPoint = await getTotalAllocPoint(masterInstance)

  return new BigNumber(poolInfo.allocPoint).div(new BigNumber(totalAllocPoint))
}

const getApy = async (poolId, lpToken, reduction) => {
  const {
    methods: { getBalance },
    contract: { abi },
  } = tokenContractData

  const web3 = web3ARBITRUM

  const rewardPriceUSD = await getTokenPrice('ARB')
  const lpPriceUSD = await getTokenPrice(lpToken, 42161)

  const masterInstance = new web3.eth.Contract(masterContract.abi, masterContract.address.mainnet)

  const secondsPerYear = 31536000
  const rewardPerSecond = new BigNumber(await getRewardPerSecond(masterInstance)).dividedBy(
    new BigNumber(10).exponentiatedBy(18),
  )
  const poolInfo = await getPoolInfo(poolId, masterInstance)

  const tokenInstance = new web3.eth.Contract(abi, lpToken)
  const totalSupply = new BigNumber(
    await getBalance(masterContract.address.mainnet, tokenInstance),
  ).dividedBy(new BigNumber(10).exponentiatedBy(18))

  const poolWeight = await getPoolWeight(poolInfo, masterInstance)

  const totalSupplyUSD = totalSupply.multipliedBy(lpPriceUSD)

  let apy = new BigNumber(rewardPriceUSD)
    .times(rewardPerSecond)
    .times(secondsPerYear)
    .times(poolWeight)
    .div(totalSupplyUSD)

  if (reduction) {
    apy = apy.multipliedBy(reduction)
  }

  return apy.multipliedBy(100).toFixed(2, 1)
}

module.exports = {
  getApy,
}
