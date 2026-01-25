const BigNumber = require('bignumber.js')
const { web3 } = require('../../../lib/web3')
const tokenAddresses = require('../../../lib/data/addresses.json')
const verseFarmContract = require('../../../lib/web3/contracts/verse-farm/contract.json')
const {
  getTotalSupply,
  getRewardPerSecond,
} = require('../../../lib/web3/contracts/verse-farm/methods')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const { getTokenPrice } = require('../../../prices')

const getApy = async (lpAddress, rewardPool, reduction) => {
  const farmInstance = getCachedContract({
    web3,
    abi: verseFarmContract.abi,
    address: rewardPool,
  })

  let versePerSecond = new BigNumber(await getRewardPerSecond(farmInstance)).dividedBy(
    new BigNumber(10).exponentiatedBy(18),
  )
  let totalSupply = new BigNumber(await getTotalSupply(farmInstance)).dividedBy(
    new BigNumber(10).exponentiatedBy(18),
  )
  let secondsPerYear = 31536000

  const versePriceInUsd = await getTokenPrice(tokenAddresses.VERSE)
  const lpTokenPrice = await getTokenPrice(lpAddress)

  const totalSupplyInUsd = totalSupply.multipliedBy(lpTokenPrice)

  let apy = new BigNumber(versePriceInUsd).times(versePerSecond).times(secondsPerYear)

  apy = apy.div(totalSupplyInUsd)

  if (reduction) {
    apy = apy.multipliedBy(reduction)
  }

  return apy.multipliedBy(100).toFixed(2, 1)
}

module.exports = {
  getApy,
}
