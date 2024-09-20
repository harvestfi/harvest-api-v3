const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const { abi: notionalAbi } = require('../../../lib/web3/contracts/notional/contract.json')
const {
  abi: notionalRewardAbi,
} = require('../../../lib/web3/contracts/notional-reward/contract.json')
const {
  getNTokenAccount,
  getSecondaryIncentiveRewarder,
} = require('../../../lib/web3/contracts/notional/methods')
const {
  getRewardToken,
  getEmissionRate,
  getEndTime,
} = require('../../../lib/web3/contracts/notional-reward/methods')
const { getTokenPrice } = require('../../../prices')
const getNTokenPrice = require('../../../prices/implementations/notional.js').getPrice
const { CHAIN_IDS } = require('../../../../data/constants')
const notionalProxy_mainnet = '0x6e7058c91F85E0F6db4fc9da2CA41241f5e4263f'
const notionalProxy_arbitrum = '0x1344A36A1B56144C3Bc62E7757377D288fDE0369'

const getApy = async (
  currencyId,
  note,
  nToken,
  underlyingToken,
  reduction,
  chainId = CHAIN_IDS.ETH_MAINNET,
) => {
  let notionalProxy =
    chainId == CHAIN_IDS.ETH_MAINNET ? notionalProxy_mainnet : notionalProxy_arbitrum
  const web3 = getWeb3(chainId)

  const notePrice = await getTokenPrice(note)
  const nTokenPrice = await getNTokenPrice(currencyId, nToken, underlyingToken, chainId)

  const notionalInstance = new web3.eth.Contract(notionalAbi, notionalProxy)
  const { totalSupply, incentiveAnnualEmissionRate } = await getNTokenAccount(
    nToken,
    notionalInstance,
  )

  const secRewards = await getSecondaryIncentiveRewarder(currencyId, notionalInstance)

  let secUsdPerYearPerNToken = new BigNumber(0)
  if (secRewards > 0) {
    const rewardsInstance = new web3.eth.Contract(notionalRewardAbi, secRewards)
    const now = Date.now() / 1000
    const endTime = await getEndTime(rewardsInstance)
    if (now <= endTime) {
      const rewardToken = await getRewardToken(rewardsInstance)
      const rewardPrice = await getTokenPrice(rewardToken)

      const emissionRate = new BigNumber(await getEmissionRate(rewardsInstance))

      secUsdPerYearPerNToken = emissionRate.times(rewardPrice).div(totalSupply)
    }
  }

  const annualNOTEAccumulatedPerNToken = new BigNumber(incentiveAnnualEmissionRate)
    .multipliedBy(new BigNumber(1e8)) // nToken decimal
    .multipliedBy(new BigNumber(1e18)) // accuracy decimal
    .dividedBy(new BigNumber(totalSupply))

  const casted = new BigNumber(annualNOTEAccumulatedPerNToken).dividedBy(1e18) // accuracy decimal

  let apy = casted
    .times(new BigNumber(notePrice))
    .plus(secUsdPerYearPerNToken)
    .dividedBy(new BigNumber(nTokenPrice))

  if (reduction) {
    apy = apy.multipliedBy(reduction)
  }

  return apy.multipliedBy(100).toFixed(2, 1)
}

module.exports = {
  getApy,
}
