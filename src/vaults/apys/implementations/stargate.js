const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const stargateMasterchefContract = require('../../../lib/web3/contracts/stargate-masterchef/contract.json')
const {
  getPoolInfo: getPoolInfoSushi,
  getTotalAllocPoint: getTotalAllocPointStargate,
  getStargatePerBlock,
} = require('../../../lib/web3/contracts/stargate-masterchef/methods')

const { token: tokenContractData } = require('../../../lib/web3/contracts')
const { getTokenPrice } = require('../../../prices')
const { getUIData } = require('../../../lib/data')
const { UI_DATA_FILES } = require('../../../lib/constants')
const { getDailyCompound } = require('../../../lib/utils')
const { getCachedContract } = require('../../lib/web3/contractCache')

const getStargatePoolWeight = async (poolInfo, rewardPoolInstance) => {
  const totalAllocPoint = await getTotalAllocPointStargate(rewardPoolInstance)

  return new BigNumber(poolInfo.allocPoint).div(new BigNumber(totalAllocPoint))
}

const getApy = async (
  poolId,
  rewardPoolAddress,
  lpTokenSymbol,
  rewardTokenSymbol,
  reduction,
  chain,
) => {
  const {
    methods: { getBalance },
    contract: { abi },
  } = tokenContractData

  const selectedWeb3 = getWeb3(chain)
  const masterChefContract = stargateMasterchefContract

  let apr, stargatePerBlock, blocksPerYear, poolInfo

  const masterChefInstance = getCachedContract({
    web3: selectedWeb3,
    abi: masterChefContract.abi,
    address: rewardPoolAddress,
  })

  stargatePerBlock = new BigNumber(await getStargatePerBlock(masterChefInstance)).dividedBy(
    new BigNumber(10).exponentiatedBy(18),
  )

  blocksPerYear = new BigNumber(2371127)
  poolInfo = await getPoolInfoSushi(poolId, masterChefInstance)

  const tokens = await getUIData(UI_DATA_FILES.TOKENS)
  const lpToken = tokens[lpTokenSymbol]

  const tokenInstance = getCachedContract({
    web3: selectedWeb3,
    abi,
    address: poolInfo.lpToken,
  })
  const totalSupply = new BigNumber(await getBalance(rewardPoolAddress, tokenInstance)).dividedBy(
    new BigNumber(10).exponentiatedBy(lpToken.decimals),
  )

  const poolWeight = await getStargatePoolWeight(poolInfo, masterChefInstance)

  const stargatePriceInUsd = await getTokenPrice(rewardTokenSymbol)
  const lpTokenPrice = await getTokenPrice(lpTokenSymbol)

  const totalSupplyInUsd = totalSupply.multipliedBy(lpTokenPrice)

  apr = new BigNumber(stargatePriceInUsd)

  apr = apr.times(stargatePerBlock).times(blocksPerYear)

  apr = apr.times(poolWeight).div(totalSupplyInUsd)

  if (reduction) {
    apr = apr.multipliedBy(reduction)
  }

  return getDailyCompound(apr.multipliedBy(100))
}

module.exports = {
  getApy,
}
