const BigNumber = require('bignumber.js')
const { web3MATIC } = require('../../lib/web3')

const uniswapContract = require('../../lib/web3/contracts/uniswap/contract.json')
const uniswapMethods = require('../../lib/web3/contracts/uniswap/methods')
const { getCachedContract } = require('../../lib/web3/contractCache')

const addresses = require('../../../data/mainnet/addresses.json')

const getPrice = async (
  inTokenAddress,
  outTokenAddress = addresses.MATIC.USDC,
  outTokenDecimals = 6,
) => {
  const selectedAddresses = [inTokenAddress, outTokenAddress]

  const uniswapInstance = getCachedContract({
    web3: web3MATIC,
    abi: uniswapContract.abi,
    address: '0x10f4A785F458Bc144e3706575924889954946639',
  })

  const result = await uniswapMethods.getAmountsOut(
    new BigNumber(10).pow(18).toString(),
    selectedAddresses,
    uniswapInstance,
  )

  const price = new BigNumber(result[1]).dividedBy(new BigNumber(10).pow(outTokenDecimals))

  return price.toString()
}

module.exports = {
  getPrice,
}
