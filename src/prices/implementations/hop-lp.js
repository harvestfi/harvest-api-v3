const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../lib/web3')
const { hopLPToken, hopSwap } = require('../../lib/web3/contracts')
const { getCachedContract } = require('../../lib/web3/contractCache')
const { getTokenPrice } = require('..')

const getPrice = async (lpToken, chain) => {
  const web3 = await getWeb3(chain)
  const { methods: lpMethods, contract: lpContract } = hopLPToken
  const { methods: swapMethods, contract: swapContract } = hopSwap

  const lpInstance = getCachedContract({
    web3,
    abi: lpContract.abi,
    address: lpToken,
  })
  const swap = await lpMethods.getSwap(lpInstance)
  const swapInstance = getCachedContract({
    web3,
    abi: swapContract.abi,
    address: swap,
  })
  const underlying = await swapMethods.getToken(0, swapInstance)
  const virtualPrice = new BigNumber(await swapMethods.getVirtualPrice(swapInstance))
  const underlyingPrice = await getTokenPrice(underlying, chain)

  const price = virtualPrice.times(underlyingPrice).div(1e18)

  return price.toFixed()
}

module.exports = {
  getPrice,
}
