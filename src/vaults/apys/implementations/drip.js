const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const { drip, plasmaVault } = require('../../../lib/web3/contracts')

const getApy = async (vaultAddr, dripAddr, chain) => {
  const web3 = getWeb3(chain)
  const { methods: dripMethods, contract: dripContract } = drip
  const { methods: vaultMethods, contract: vaultContract } = plasmaVault

  const dripInstance = new web3.eth.Contract(dripContract.abi, dripAddr)
  let foundDrip = false
  let idx = 0
  let dripData, currentRate
  while (!foundDrip) {
    try {
      dripData = await dripMethods.getDrip(idx, dripInstance)
      currentRate = new BigNumber(await dripMethods.getCurrentRate(idx, dripInstance))
      if (dripData.vault == vaultAddr) {
        foundDrip = true
      }
    } catch (e) {
      foundDrip = true
    }
    idx++
  }

  let dripApy = new BigNumber(0)
  if (currentRate) {
    const vaultInstance = new web3.eth.Contract(vaultContract.abi, vaultAddr)
    const tvl = new BigNumber(await vaultMethods.getTotalAssets(vaultInstance))
    dripApy = currentRate.times(3600).times(24).times(365).times(100).div(tvl).div(1e18)
  }

  return dripApy.toFixed()
}

module.exports = {
  getApy,
}
