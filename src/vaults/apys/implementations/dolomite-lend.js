const BigNumber = require('bignumber.js')
const { web3ARBITRUM } = require('../../../lib/web3')
const { dolomiteMargin } = require('../../../lib/web3/contracts')

const getApy = async (marketId, reduction) => {
  const web3 = web3ARBITRUM
  const {
    contract: { abi: dolomiteAbi, address: dolomiteAddresses },
    methods: dolomiteMethods,
  } = dolomiteMargin

  const secondsPerYear = 3600 * 24 * 365

  const dolomiteInstance = new web3.eth.Contract(dolomiteAbi, dolomiteAddresses.mainnet)
  const marketInfo = await dolomiteMethods.getMarketInfo(marketId, dolomiteInstance)
  const earningsRate = new BigNumber(await dolomiteMethods.getEarningsRate(dolomiteInstance)).div(
    1e18,
  )

  const borrowed = new BigNumber(marketInfo[0].totalPar.borrow).times(marketInfo[0].index.borrow)
  const supplied = new BigNumber(marketInfo[0].totalPar.supply).times(marketInfo[0].index.supply)
  const util = borrowed.div(supplied)

  const supplyAPR = new BigNumber(marketInfo[3].value)
    .times(secondsPerYear)
    .div(1e18)
    .times(earningsRate)
    .times(util)
    .times(100)

  return supplyAPR.times(reduction).toFixed()
}

module.exports = {
  getApy,
}
