const BigNumber = require('bignumber.js')
const { web3ARBITRUM } = require('../../../lib/web3')
const { siloLens } = require('../../../lib/web3/contracts')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getApy = async (siloAddress, reduction) => {
  const {
    contract: { abi: lensAbi, address: lensAddress },
    methods: lensMethods,
  } = siloLens

  const lensInstance = getCachedContract({
    web3: web3ARBITRUM,
    abi: lensAbi,
    address: lensAddress.mainnet,
  })
  const rateRaw = new BigNumber(await lensMethods.getDepositAPR(siloAddress, lensInstance))

  let apy = rateRaw.div(1e16)
  if (reduction) {
    apy = apy.multipliedBy(reduction)
  }
  return apy.toFixed(2)
}

module.exports = {
  getApy,
}
