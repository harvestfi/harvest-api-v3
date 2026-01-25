const BigNumber = require('bignumber.js')
const { web3BASE } = require('../../../lib/web3')
const { faVault, faLoan } = require('../../../lib/web3/contracts')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getApy = async (faVaultAddress, reduction) => {
  const web3 = web3BASE
  const {
    contract: { abi: loanAbi },
    methods: loanMethods,
  } = faLoan
  const {
    contract: { abi: vaultAbi },
    methods: vaultMethods,
  } = faVault

  const vaultInstance = getCachedContract({
    web3,
    abi: vaultAbi,
    address: faVaultAddress,
  })
  const totalAssets = new BigNumber(await vaultMethods.getTotalAssets(vaultInstance))
  const loanInstance = getCachedContract({
    web3,
    abi: loanAbi,
    address: await vaultMethods.getLoanContract(vaultInstance),
  })
  const epochReward = new BigNumber(await loanMethods.getLastEpochReward(loanInstance))

  let rate = epochReward.times(52).times(100).div(totalAssets)
  if (reduction) {
    rate = rate.multipliedBy(reduction)
  }
  return rate.toFixed(4)
}

module.exports = {
  getApy,
}
