const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const { drip } = require('../../../lib/web3/contracts')

const getApy = async (vaultAddr, dripAddr, chain) => {
  const web3 = getWeb3(chain)
  const { methods: dripMethods, contract: dripContract } = drip

  const dripInstance = new web3.eth.Contract(dripContract.abi, dripAddr)
  let foundDrip = false
  let idx = 0
  let dripData
  while (!foundDrip) {
    try {
      dripData = await dripMethods.getDrip(idx, dripInstance)
      if (dripData.vault == vaultAddr) {
        foundDrip = true
      }
    } catch (e) {
      foundDrip = true
      dripData = null
    }
    idx++
  }

  let dripApy = new BigNumber(0)
  if (dripData) {
    if (dripData.mode == 1) {
      dripApy = new BigNumber(dripData.perSecond).times(3600).times(24).times(365).div(1e16)
    }
  }

  return dripApy.toFixed()
}

module.exports = {
  getApy,
}
