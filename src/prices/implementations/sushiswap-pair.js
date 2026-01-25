const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../lib/web3')

const sushiSwapRouterContract = require('../../lib/web3/contracts/sushiswap-router/contract.json')
const sushiSwapRouterMethods = require('../../lib/web3/contracts/sushiswap-router/methods')
const { getCachedContract } = require('../../lib/web3/contractCache')

const addresses = require('../../lib/data/addresses.json')
const { getTokenPrice } = require('..')
const { CHAIN_IDS } = require('../../../data/constants')

const getPrice = async (
  inTokenAddress,
  outTokenAddress = addresses.USDC,
  outTokenDecimals = 6,
  chain = 1,
) => {
  const selectedAddresses = [inTokenAddress, outTokenAddress]

  const web3 = getWeb3(chain)

  let routerAddress
  if (chain == CHAIN_IDS.ARBITRUM_ONE) {
    routerAddress = sushiSwapRouterContract.address.arb
  } else {
    routerAddress = sushiSwapRouterContract.address.mainnet
  }

  const sushiSwapRouterInstance = getCachedContract({
    web3,
    abi: sushiSwapRouterContract.abi,
    address: routerAddress,
  })

  const result = await sushiSwapRouterMethods.getAmountsOut(
    new BigNumber(10).pow(18).toString(),
    selectedAddresses,
    sushiSwapRouterInstance,
  )

  const price = new BigNumber(result[1]).dividedBy(new BigNumber(10).pow(outTokenDecimals))

  const outTokenPrice = await getTokenPrice(outTokenAddress)

  return new BigNumber(outTokenPrice).times(price).toString()
}

module.exports = {
  getPrice,
}
