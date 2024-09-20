const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../lib/web3')
const { abi: notionalContractAbi } = require('../../lib/web3/contracts/notional/contract.json')
const {
  getNTokenPresentValueUnderlyingDenominated,
} = require('../../lib/web3/contracts/notional/methods')
const { getTokenPrice } = require('../index')
const { token: tokenContractData } = require('../../lib/web3/contracts')
const { CHAIN_IDS } = require('../../../data/constants')

const notionalProxy_mainnet = '0x6e7058c91F85E0F6db4fc9da2CA41241f5e4263f'
const notionalProxy_arbitrum = '0x1344A36A1B56144C3Bc62E7757377D288fDE0369'

const getPrice = async (currencyId, nToken, underlyingToken, chainId = CHAIN_IDS.ETH_MAINNET) => {
  let notionalProxy
  const web3 = getWeb3(chainId)
  if (chainId == CHAIN_IDS.ETH_MAINNET) notionalProxy = notionalProxy_mainnet
  else notionalProxy = notionalProxy_arbitrum
  const underlyingPrice = await getTokenPrice(underlyingToken)
  const {
    methods: { getTotalSupply },
    contract: { abi: tokenAbi },
  } = tokenContractData
  const tokenInstance = new web3.eth.Contract(tokenAbi, nToken)

  const totalSupply = new BigNumber(await getTotalSupply(tokenInstance))

  const instance = new web3.eth.Contract(notionalContractAbi, notionalProxy)
  const nTokenValueInUnderlying = new BigNumber(
    await getNTokenPresentValueUnderlyingDenominated(currencyId, instance),
  )

  const casted = nTokenValueInUnderlying.dividedBy(totalSupply)

  return casted.multipliedBy(new BigNumber(underlyingPrice))
}

module.exports = {
  getPrice,
}
