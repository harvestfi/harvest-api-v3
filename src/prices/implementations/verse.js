const BigNumber = require('bignumber.js')
const { web3 } = require('../../lib/web3')

const verseContract = require('../../lib/web3/contracts/verse/contract.json')
const verseMethods = require('../../lib/web3/contracts/verse/methods')
const { getCachedContract } = require('../../lib/web3/contractCache')

const addresses = require('../../lib/data/addresses.json')

const getPrice = async (inTokenAddress, outTokenAddress = addresses.USDC, outTokenDecimals = 6) => {
  const selectedAddresses = [inTokenAddress, outTokenAddress]
  const isOutTokenWETH = outTokenAddress === addresses.WETH

  if (isOutTokenWETH) {
    selectedAddresses.push(addresses.USDC)
  }

  const verseInstance = getCachedContract({
    web3,
    abi: verseContract.abi,
    address: verseContract.address.mainnet,
  })

  const result = await verseMethods.getAmountsOut(
    new BigNumber(10).pow(18).toString(),
    selectedAddresses,
    verseInstance,
  )

  const price = new BigNumber(result[isOutTokenWETH ? 2 : 1]).dividedBy(
    new BigNumber(10).pow(outTokenDecimals),
  )

  return price.toString()
}

module.exports = {
  getPrice,
}
