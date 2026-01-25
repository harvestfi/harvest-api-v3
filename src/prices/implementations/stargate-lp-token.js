const BigNumber = require('bignumber.js')

const stargateContract = require('../../lib/web3/contracts/stargate/contract.json')
const stargateMethods = require('../../lib/web3/contracts/stargate/methods')
const { getCachedContract } = require('../../lib/web3/contractCache')

const { getTokenPrice } = require('..')
const { getUIData } = require('../../lib/data')
const { UI_DATA_FILES } = require('../../lib/constants')
const { getWeb3 } = require('../../lib/web3')

const getPrice = async (token, underlyingToken) => {
  if (!token || !underlyingToken) {
    console.error('Invalid token or underlyingToken')
    return '0'
  }

  const tokens = await getUIData(UI_DATA_FILES.TOKENS)

  const web3Instance = getWeb3(tokens[token].chain)
  const stargateInstance = getCachedContract({
    web3: web3Instance,
    abi: stargateContract.abi,
    address: tokens[token].tokenAddress,
  })

  const liquidity = await stargateMethods.totalLiquidity(stargateInstance).catch(e => {
    console.error('Could not get totalLiquidity for token ', token)
    return Promise.reject(e)
  })
  const totalSupply = await stargateMethods.totalSupply(stargateInstance).catch(e => {
    console.error('Could not get totalSupply for token ', token)
    return Promise.reject(e)
  })

  const ratio = new BigNumber(liquidity).div(totalSupply)
  const underlyingPrice = await getTokenPrice(underlyingToken, tokens[underlyingToken].chain).catch(
    e => {
      console.error('Could not get token price for underlyingToken', underlyingToken, e)
      return Promise.reject(e)
    },
  )

  return ratio.times(underlyingPrice).toString()
}

module.exports = {
  getPrice,
}
