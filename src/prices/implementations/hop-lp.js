const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../lib/web3')
const { hopLPToken, hopSwap } = require('../../lib/web3/contracts')
const { getTokenPrice } = require('..')

const getPrice = async (lpToken, chain) => {
  const web3 = await getWeb3(chain)
  const { methods: lpMethods, contract: lpContract } = hopLPToken
  const { methods: swapMethods, contract: swapContract } = hopSwap

  const lpInstance = new web3.eth.Contract(lpContract.abi, lpToken)
  const swap = await lpMethods.getSwap(lpInstance)
  const swapInstance = new web3.eth.Contract(swapContract.abi, swap)
  const underlying = await swapMethods.getToken(0, swapInstance)
  const virtualPrice = new BigNumber(await swapMethods.getVirtualPrice(swapInstance))
  const underlyingPrice = await getTokenPrice(underlying, chain)

  const price = virtualPrice.times(underlyingPrice).div(1e18)

  return price.toFixed()
}

module.exports = {
  getPrice,
}
