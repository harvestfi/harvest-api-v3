const BigNumber = require('bignumber.js')
const { web3BASE } = require('../../lib/web3')

const uniswapContract = require('../../lib/web3/contracts/uniswap/contract.json')
const uniswapMethods = require('../../lib/web3/contracts/uniswap/methods')
const { getCachedContract } = require('../../lib/web3/contractCache')

const addresses = require('../../../data/mainnet/addresses.json')

const getPrice = async (
  inTokenAddress,
  outTokenAddress = addresses.BASE.USDC,
  outTokenDecimals = 6,
) => {
  const selectedAddresses = [inTokenAddress, outTokenAddress]
  const isOutTokenWETH = outTokenAddress === addresses.BASE.WETH
  if (isOutTokenWETH) {
    selectedAddresses.push(addresses.BASE.USDC)
  }

  const uniswapInstance = getCachedContract({
    web3: web3BASE,
    abi: uniswapContract.abi,
    address: '0x327Df1E6de05895d2ab08513aaDD9313Fe505d86',
  })

  const result = await uniswapMethods.getAmountsOut(
    new BigNumber(10).pow(18).toString(),
    selectedAddresses,
    uniswapInstance,
  )

  const price = new BigNumber(result[isOutTokenWETH ? 2 : 1]).dividedBy(
    new BigNumber(10).pow(outTokenDecimals),
  )
  return price.toString()
}

module.exports = {
  getPrice,
}
