const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const { eulerVault } = require('../../../lib/web3/contracts')
const { getApy: getMerklApy } = require('./merkl')

const getApy = async (eulerVaultAddress, reduction, chain, strategyAddr = null) => {
  const web3 = getWeb3(chain)
  const {
    contract: { abi: vaultAbi },
    methods: vaultMethods,
  } = eulerVault

  const vaultInstance = new web3.eth.Contract(vaultAbi, eulerVaultAddress)
  const interestRate = new BigNumber(await vaultMethods.getInterestRate(vaultInstance))
  const totalAssets = new BigNumber(await vaultMethods.getTotalAssets(vaultInstance))
  const totalBorrows = new BigNumber(await vaultMethods.getTotalBorrows(vaultInstance))

  const rate = new BigNumber(interestRate)
    .times(31536000)
    .times(totalBorrows)
    .div(totalAssets)
    .div(1e27)
  let apy = rate.times(100)

  if (strategyAddr) {
    let merklAPR = new BigNumber(await getMerklApy(strategyAddr, eulerVaultAddress, chain, 1))
    apy = apy.plus(merklAPR)
  }

  if (reduction) {
    apy = apy.multipliedBy(reduction)
  }
  return apy.toFixed(2)
}

module.exports = {
  getApy,
}
