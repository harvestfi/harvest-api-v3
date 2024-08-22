const { getWeb3 } = require('../../../lib/web3')
const { pendleMarket } = require('../../../lib/web3/contracts')
const { PENDLE_ENDPOINT } = require('../../../lib/constants')
const BigNumber = require('bignumber.js')
const axios = require('axios')
const { get } = require('lodash')

const getApy = async (underlying, chainId, reduction = 1) => {
  const web3 = getWeb3(chainId)
  const {
    contract: { abi: pendleMarketAbi },
    methods: pendleMarketMethods,
  } = pendleMarket

  const penpieStaking =
    chainId == 1
      ? '0x6E799758CEE75DAe3d84e09D40dc416eCf713652'
      : '0x6DB96BBEB081d2a85E0954C252f2c1dC108b3f81'
  const marketInstance = new web3.eth.Contract(pendleMarketAbi, underlying)

  const activeBalance = new BigNumber(
    await pendleMarketMethods.getActiveBalance(penpieStaking, marketInstance),
  )
  const poolBalance = new BigNumber(
    await pendleMarketMethods.balanceOf(penpieStaking, marketInstance),
  )

  const boost = activeBalance.div(poolBalance).times(2.5)

  let response, apyData
  try {
    response = await axios.get(`${PENDLE_ENDPOINT}${chainId}/markets/${underlying}/data`)
    apyData = get(response, `data`, 0)
  } catch (err) {
    console.error('MERKL API error: ', err)
    apyData = 0
    return '0'
  }
  const pendleApy = new BigNumber(apyData.pendleApy ? apyData.pendleApy : 0).times(boost).times(90)
  const arbApy = new BigNumber(apyData.arbApy ? apyData.arbApy : 0).times(boost).times(90)

  const apy = pendleApy.plus(arbApy).times(reduction)

  return apy.toFixed(2)
}

module.exports = {
  getApy,
}
