const BigNumber = require('bignumber.js')
const { web3BASE: web3 } = require('../../../lib/web3')
const tokenAddresses = require('../../../../data/mainnet/addresses.json')
const masterChefContract = require('../../../lib/web3/contracts/baseswap-masterchef/contract.json')
const {
  getPoolInfo,
  getTotalAllocPoint,
  getBswapPerSec,
} = require('../../../lib/web3/contracts/baseswap-masterchef/methods')

const { token: tokenContractData } = require('../../../lib/web3/contracts')
const { getTokenPrice } = require('../../../prices')

const getPoolWeight = async (poolInfo, masterChefInstance) => {
  const totalAllocPoint = await getTotalAllocPoint(masterChefInstance)

  return new BigNumber(poolInfo.allocPoint).div(new BigNumber(totalAllocPoint))
}

const getApy = async (underlying, poolId, reduction) => {
  const {
    methods: { getBalance },
    contract: { abi },
  } = tokenContractData

  let apy,
    rewardPerSec,
    secsPerYear,
    poolInfo = {}

  const rewardPriceInUsd = await getTokenPrice(tokenAddresses.BASE.BSWAP)

  const masterChefInstance = new web3.eth.Contract(
    masterChefContract.abi,
    masterChefContract.address.mainnet,
  )

  rewardPerSec = new BigNumber(await getBswapPerSec(masterChefInstance)).dividedBy(
    new BigNumber(10).exponentiatedBy(18),
  )
  secsPerYear = new BigNumber(365.25 * 24 * 3600)
  poolInfo = await getPoolInfo(poolId, masterChefInstance)

  const tokenInstance = new web3.eth.Contract(abi, poolInfo.lpToken)
  const totalSupply = new BigNumber(
    await getBalance(masterChefContract.address.mainnet, tokenInstance),
  ).dividedBy(new BigNumber(10).exponentiatedBy(18))

  const poolWeight = await getPoolWeight(poolInfo, masterChefInstance)

  const lpTokenPrice = await getTokenPrice(underlying)

  const totalSupplyInUsd = totalSupply.multipliedBy(lpTokenPrice)

  apy = new BigNumber(rewardPriceInUsd)

  apy = apy.times(rewardPerSec).times(secsPerYear)

  apy = apy.times(poolWeight).div(totalSupplyInUsd)

  if (reduction) {
    apy = apy.multipliedBy(reduction)
  }

  return apy.multipliedBy(100).toFixed(2, 1)
}

module.exports = {
  getApy,
}
