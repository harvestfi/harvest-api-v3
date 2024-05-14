const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../lib/web3')
const { hypervisor, token } = require('../../lib/web3/contracts')
const { getTokenPrice } = require('..')

const getPrice = async (hypervisorAddress, chain) => {
  const web3 = await getWeb3(chain)
  const { methods: visorMethods, contract: visorContract } = hypervisor
  const { methods: tokenMethods, contract: tokenContract } = token

  const visorInstance = new web3.eth.Contract(visorContract.abi, hypervisorAddress)
  const token0 = await visorMethods.getToken0(visorInstance)
  const token1 = await visorMethods.getToken1(visorInstance)
  const tokenAmounts = await visorMethods.getTotalAmounts(visorInstance)
  const amountToken0 = new BigNumber(tokenAmounts[0])
  const amountToken1 = new BigNumber(tokenAmounts[1])

  const token0Instance = new web3.eth.Contract(tokenContract.abi, token0)
  const token0Decimals = await tokenMethods.getDecimals(token0Instance)
  const token1Instance = new web3.eth.Contract(tokenContract.abi, token1)
  const token1Decimals = await tokenMethods.getDecimals(token1Instance)

  const priceToken0 = await getTokenPrice(token0, chain)
  const priceToken1 = await getTokenPrice(token1, chain)

  const totalSupply = new BigNumber(await visorMethods.getTotalSupply(visorInstance))

  const price = amountToken0
    .times(priceToken0)
    .div(10 ** token0Decimals)
    .plus(amountToken1.times(priceToken1).div(10 ** token1Decimals))
    .times(1e18)
    .div(totalSupply)

  return price
}

module.exports = {
  getPrice,
}
