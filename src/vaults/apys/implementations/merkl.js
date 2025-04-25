const BigNumber = require('bignumber.js')
const { get } = require('lodash')
const { MERKL_ENDPOINT } = require('../../../lib/constants')
const { cachedAxios } = require('../../../lib/db/models/cache')
const { mToken } = require('../../../lib/web3/contracts')
const { web3BASE } = require('../../../lib/web3')

const getApy = async (userAddress, poolAddress, chainId, reduction, fold = false) => {
  let response,
    apy = 0

  try {
    response = await cachedAxios.get(
      `${MERKL_ENDPOINT}opportunity?campaigns=true&chainId=${chainId}&mainParameter=${poolAddress}`,
    )
    const data = get(response, `data`, 0)
    const keys = Object.keys(data)
    for (let key of keys) {
      const apr = get(data, `${key}.apr`, 0)
      apy += parseFloat(apr)
    }
    apy = parseFloat(apy) * parseFloat(reduction)
    if (isNaN(apy)) {
      apy = 0
    }
  } catch (err) {
    console.error('MERKL API error: ', err)
    apy = 0
  }

  if (fold) {
    const {
      contract: { abi: mTokenAbi },
      methods: mTokenMethods,
    } = mToken
    const web3 = web3BASE

    const mTokenInstance = new web3.eth.Contract(mTokenAbi, poolAddress)
    const snapshot = await mTokenMethods.getAccountSnapshot(userAddress, mTokenInstance)

    const supplied = new BigNumber(snapshot[1]).times(snapshot[3]).div(1e18)
    const borrowed = new BigNumber(snapshot[2])
    const invested = supplied.minus(borrowed)
    let suppliedMul
    if (invested.gt(0)) {
      suppliedMul = supplied.div(invested)
    } else {
      suppliedMul = new BigNumber(1)
    }

    apy = apy * suppliedMul
  }

  return apy
}

module.exports = {
  getApy,
}
