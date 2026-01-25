const BigNumber = require('bignumber.js')
const { web3 } = require('../../../lib/web3')
const tokenAddresses = require('../../../lib/data/addresses.json')
const looksRewardPool = require('../../../lib/web3/contracts/looks-rewardpool/contract.json')
const {
  getRewardPerBlock,
  getStakedToken,
} = require('../../../lib/web3/contracts/looks-rewardpool/methods')
const { token: tokenContractData } = require('../../../lib/web3/contracts')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const { getTokenPrice } = require('../../../prices')

const getApy = async (rewardPool, reduction) => {
  const rewardPoolInstance = getCachedContract({
    web3,
    abi: looksRewardPool.abi,
    address: rewardPool,
  })
  const {
    methods: { getBalance },
    contract: { abi },
  } = tokenContractData

  let looksPerBlock = new BigNumber(await getRewardPerBlock(rewardPoolInstance)).dividedBy(
    new BigNumber(10).exponentiatedBy(18),
  )
  let blocksPerYear = new BigNumber(2336000)
  let stakedToken = await getStakedToken(rewardPoolInstance)

  const tokenInstance = getCachedContract({
    web3,
    abi,
    address: stakedToken,
  })
  const totalSupply = new BigNumber(await getBalance(rewardPool, tokenInstance)).dividedBy(
    new BigNumber(10).exponentiatedBy(18),
  )

  const looksPriceInUsd = await getTokenPrice(tokenAddresses.LOOKS)
  const lpTokenPrice = await getTokenPrice(stakedToken)
  const totalSupplyInUsd = totalSupply.multipliedBy(lpTokenPrice)

  let rewardInUsdPerYear = new BigNumber(looksPriceInUsd).times(looksPerBlock).times(blocksPerYear)

  let apy = rewardInUsdPerYear.div(totalSupplyInUsd)

  if (reduction) {
    apy = apy.multipliedBy(reduction)
  }

  return apy.multipliedBy(100).toFixed(2, 1)
}

module.exports = {
  getApy,
}
