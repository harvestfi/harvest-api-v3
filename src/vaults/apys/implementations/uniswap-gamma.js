const axios = require('axios')
const { get } = require('lodash')
const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const { GAMMA_ENDPOINT } = require('../../../lib/constants')

const { getTokenPrice } = require('../../../prices')

const { gammaStakingRewards: RewardsContractInfo } = require('../../../lib/web3/contracts')

const getApy = async (underlying, stakingRewards, chain, factor) => {
  let tvlUSD = 0
  try {
    let response = await axios.get(`${GAMMA_ENDPOINT}polygon/hypervisors/allData`)
    tvlUSD = get(response, `data.${underlying.toLowerCase()}.tvlUSD`, 0)
    tvlUSD = parseFloat(tvlUSD)
  } catch (err) {
    console.error('Gamma API error: ', err)
    tvlUSD = 0
  }

  const web3Instance = getWeb3(chain)
  const {
    methods: { getPeriodFinish, getRewardRate, getRewardToken },
  } = RewardsContractInfo

  const stakingInstance = new web3Instance.eth.Contract(
    RewardsContractInfo.contract.abi,
    stakingRewards,
  )

  const now = Date.now() / 1000
  const poolPeriodFinish = await getPeriodFinish(stakingInstance)
  if (now > poolPeriodFinish) {
    return '0'
  }

  const rewardTokneAddr = await getRewardToken(stakingInstance)
  const rewardTokenPrice = await getTokenPrice(rewardTokneAddr)
  const rewardRate = await getRewardRate(stakingInstance)

  const apr = new BigNumber(rewardTokenPrice)
    .times(new BigNumber(rewardRate))
    .div(new BigNumber(1e18))
    .times(new BigNumber(86400 * 365.24))
    .div(new BigNumber(tvlUSD))
    .times(100)
    .times(factor)

  return apr.toFixed(2)
}

module.exports = {
  getApy,
}
