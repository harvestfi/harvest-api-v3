const BigNumber = require('bignumber.js')
const { CHAIN_IDS } = require('../../../lib/constants')
const { getWeb3 } = require('../../../lib/web3')
const tokenAddresses = require('../../../../data/mainnet/addresses.json')
const lizardGaugeContract = require('../../../lib/web3/contracts/solidlizard/contract.json')
const { rewardRate, derivedSupply } = require('../../../lib/web3/contracts/solidlizard/methods')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const { getTokenPrice } = require('../../../prices')

const getApy = async (underlying, gauge, reduction) => {
  const web3Instance = getWeb3(CHAIN_IDS.ARBITRUM_ONE)
  const gaugeInstance = getCachedContract({
    web3: web3Instance,
    abi: lizardGaugeContract,
    address: gauge,
  })

  const slizRewardRate = await rewardRate(tokenAddresses.ARBITRUM_ONE.SLIZ, gaugeInstance)
  const gaugeDerivedSupply = await derivedSupply(gaugeInstance)

  const lpTokenPrice = await getTokenPrice(underlying, CHAIN_IDS.ARBITRUM_ONE)
  const slizPrice = await getTokenPrice(tokenAddresses.ARBITRUM_ONE.SLIZ)

  let apy = new BigNumber(slizPrice)
    .times(slizRewardRate)
    .times(86400)
    .times(365)
    .div(2.5)
    .div(gaugeDerivedSupply)
    .div(lpTokenPrice)
    .div(1e18)

  if (reduction) {
    apy = apy.multipliedBy(reduction)
  }

  return apy.multipliedBy(100).toFixed(2, 1)
}

module.exports = {
  getApy,
}
