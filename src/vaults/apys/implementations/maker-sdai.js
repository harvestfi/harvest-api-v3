const BigNumber = require('bignumber.js')
const { web3 } = require('../../../lib/web3')
const { savingsPot } = require('../../../lib/web3/contracts')

const getApy = async (potAddress, reduction) => {
  const {
    contract: { abi: potAbi },
    methods: potMethods,
  } = savingsPot

  const potInstance = new web3.eth.Contract(potAbi, potAddress)
  const dsr = new BigNumber(await potMethods.getSavingsRate(potInstance))

  const rate = new BigNumber(dsr.div(1e27).pow(3600).toFixed(12)).pow(24 * 365)

  let apy = rate.minus(1).times(100)
  if (reduction) {
    apy = apy.multipliedBy(reduction)
  }
  return apy.toFixed(2)
}

module.exports = {
  getApy,
}
