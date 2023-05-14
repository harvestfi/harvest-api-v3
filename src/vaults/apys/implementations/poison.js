const BigNumber = require('bignumber.js')
const { web3ARBITRUM: web3 } = require('../../../lib/web3')
const tokenAddresses = require('../../../../data/mainnet/addresses.json')
const masterCastleContract = require('../../../lib/web3/contracts/poison-mastercastle/contract.json')
const {
  getPoolInfo,
  getTotalAllocPoint,
  getPoisonPerBlock,
} = require('../../../lib/web3/contracts/poison-mastercastle/methods')

const { token: tokenContractData } = require('../../../lib/web3/contracts')
const { getTokenPrice } = require('../../../prices')

const getPoolWeight = async (poolInfo, masterCastleInstance) => {
  const totalAllocPoint = await getTotalAllocPoint(masterCastleInstance)

  return new BigNumber(poolInfo.allocPoint).div(new BigNumber(totalAllocPoint))
}

const getApy = async (underlying, poolId, reduction) => {
  const {
    methods: { getBalance },
    contract: { abi },
  } = tokenContractData

  let apy,
    poisonPerBlock,
    blocksPerYear,
    poolInfo = {}

  const poisonPriceInUsd = await getTokenPrice(tokenAddresses.ARBITRUM_ONE.POISON)

  const masterCastleInstance = new web3.eth.Contract(
    masterCastleContract.abi,
    masterCastleContract.address.mainnet,
  )

  poisonPerBlock = new BigNumber(await getPoisonPerBlock(masterCastleInstance)).dividedBy(
    new BigNumber(10).exponentiatedBy(18),
  )
  blocksPerYear = new BigNumber(2628000)
  poolInfo = await getPoolInfo(poolId, masterCastleInstance)

  const tokenInstance = new web3.eth.Contract(abi, poolInfo.lpToken)
  const totalSupply = new BigNumber(
    await getBalance(masterCastleContract.address.mainnet, tokenInstance),
  ).dividedBy(new BigNumber(10).exponentiatedBy(18))

  const poolWeight = await getPoolWeight(poolInfo, masterCastleInstance)

  const lpTokenPrice = await getTokenPrice(underlying)

  const totalSupplyInUsd = totalSupply.multipliedBy(lpTokenPrice)

  apy = new BigNumber(poisonPriceInUsd)

  apy = apy.times(poisonPerBlock).times(blocksPerYear)

  apy = apy.times(poolWeight).div(totalSupplyInUsd)

  if (reduction) {
    apy = apy.multipliedBy(reduction)
  }

  return apy.multipliedBy(100).toFixed(2, 1)
}

module.exports = {
  getApy,
}
