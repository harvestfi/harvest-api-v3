const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const { dolomiteMargin, dolomiteMarginMainnet } = require('../../../lib/web3/contracts')
const { getApy: getMerklApy } = require('./merkl')

const getApy = async (marketId, reduction, chain) => {
  const web3 = getWeb3(chain)
  const {
    contract: { abi: dolomiteAbi, address: dolomiteAddresses },
    methods: dolomiteMethods,
  } = chain == 1 ? dolomiteMarginMainnet : dolomiteMargin

  const secondsPerYear = 3600 * 24 * 365

  const dolomiteInstance = new web3.eth.Contract(dolomiteAbi, dolomiteAddresses.mainnet)
  const marketInfo = await dolomiteMethods.getMarketInfo(marketId, dolomiteInstance)
  const earningsRate = new BigNumber(await dolomiteMethods.getEarningsRate(dolomiteInstance)).div(
    1e18,
  )

  const borrowed = new BigNumber(marketInfo[0].totalPar.borrow).times(marketInfo[0].index.borrow)
  const supplied = new BigNumber(marketInfo[0].totalPar.supply).times(marketInfo[0].index.supply)
  const util = borrowed.div(supplied)

  let supplyAPR = new BigNumber(marketInfo[3].value)
    .times(secondsPerYear)
    .div(1e18)
    .times(earningsRate)
    .times(util)
    .times(100)

  if (marketId == 17) {
    const merklAPR = new BigNumber(
      await getMerklApy('0x', '0xaf88d065e77c8cc2239327c5edb3a432268e5832', 42161, 1),
    )
    supplyAPR = supplyAPR.plus(merklAPR)
  } else if (marketId == 1 && chain == 1) {
    const merklAPR = new BigNumber(
      await getMerklApy('0x', '0x8d0d000ee44948fc98c9b98a4fa4921476f08b0e', 1, 1),
    )
    supplyAPR = supplyAPR.plus(merklAPR)
  }

  return supplyAPR.times(reduction).toFixed()
}

module.exports = {
  getApy,
}
