const BigNumber = require('bignumber.js')
const { web3BASE } = require('../../../lib/web3')
const { arcadiaLend } = require('../../../lib/web3/contracts')

const getApy = async (lendingPoolAddress, reduction) => {
  const web3 = web3BASE
  const {
    contract: { abi: lendAbi },
    methods: lendMethods,
  } = arcadiaLend

  const lendInstance = new web3.eth.Contract(lendAbi, lendingPoolAddress)
  const interestRate = new BigNumber(await lendMethods.getInterestRate(lendInstance))
  const totalLiquidity = new BigNumber(await lendMethods.getTotalLiquidity(lendInstance))
  const totalBorrows = new BigNumber(await lendMethods.getTotalAssets(lendInstance))

  let rate = interestRate.times(totalBorrows).times(85).div(totalLiquidity).div(1e18)
  if (reduction) {
    rate = rate.multipliedBy(reduction)
  }
  return rate.toFixed(4)
}

module.exports = {
  getApy,
}
