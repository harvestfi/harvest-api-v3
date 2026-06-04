const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../lib/web3')
const { clVault } = require('../../lib/web3/contracts')
const { getCachedContract } = require('../../lib/web3/contractCache')
const { getTokenPriceByAddress } = require('../coingecko')
const { CHAIN_IDS } = require('../../lib/constants')

const getPrice = async (vaultAddress, underlyingAddress, chain = CHAIN_IDS.BASE) => {
  const web3 = getWeb3(chain)
  const { methods: vaultMethods, contract: vaultContract } = clVault

  const vaultInstance = getCachedContract({ web3, abi: vaultContract.abi, address: vaultAddress })

  const pricePerFullShare = new BigNumber(await vaultMethods.getPricePerFullShare(vaultInstance))
  const vaultDecimals = Number(await vaultMethods.getDecimals(vaultInstance))

  const underlyingPrice = new BigNumber(await getTokenPriceByAddress(underlyingAddress, chain))

  const price = pricePerFullShare.times(underlyingPrice).div(new BigNumber(10).pow(vaultDecimals))

  return price.toFixed()
}

module.exports = {
  getPrice,
}
