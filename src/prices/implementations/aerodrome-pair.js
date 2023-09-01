const BigNumber = require('bignumber.js')
const { web3BASE } = require('../../lib/web3')

const routerContract = require('../../lib/web3/contracts/aerodrome-router/contract.json')
const routerMethods = require('../../lib/web3/contracts/aerodrome-router/methods')

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

  let routes = []
  for (let i = 0; i < selectedAddresses.length - 1; i++) {
    let route = {}
    route.from = selectedAddresses[i]
    route.to = selectedAddresses[i + 1]
    route.stable = false
    route.factory = '0x420DD381b31aEf6683db6B902084cB0FFECe40Da'
    routes.push(route)
  }

  const routerInstance = new web3BASE.eth.Contract(
    routerContract.abi,
    routerContract.address.mainnet,
  )

  const result = await routerMethods.getAmountsOut(
    new BigNumber(10).pow(18).toString(),
    routes,
    routerInstance,
  )

  const price = new BigNumber(result[isOutTokenWETH ? 2 : 1]).dividedBy(
    new BigNumber(10).pow(outTokenDecimals),
  )
  return price.toString()
}

module.exports = {
  getPrice,
}
