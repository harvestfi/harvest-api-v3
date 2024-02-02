const { web3ARBITRUM } = require('../../../lib/web3')
const { radpieReader } = require('../../../lib/web3/contracts')

const getTradingApy = async poolId => {
  const web3 = web3ARBITRUM
  const {
    contract: { abi: radpieReaderAbi, address: radpieReaderAddress },
    methods: radpieReaderMethods,
  } = radpieReader

  const radpieReaderInstance = new web3.eth.Contract(radpieReaderAbi, radpieReaderAddress.mainnet)

  const account = '0x0000000000000000000000000000000000000000'

  const radpieInfo = await radpieReaderMethods.getRadpieInfo(
    account.toLowerCase(),
    radpieReaderInstance,
  )

  const radpiePoolInfo = await radpieReaderMethods.getRadpiePoolInfo(
    poolId,
    account,
    radpieInfo,
    radpieReaderInstance,
  )

  const depositApr = radpiePoolInfo?.radpieLendingInfo?.depositAPR / 100
  const borrowApr = radpiePoolInfo?.radpieLendingInfo?.borrowAPR / 100

  const apy = depositApr - borrowApr

  return apy.toFixed(2)
}

module.exports = {
  getTradingApy,
}
