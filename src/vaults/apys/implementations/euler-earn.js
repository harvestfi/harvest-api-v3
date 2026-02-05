const BigNumber = require('bignumber.js')
const { EULER_ENDPOINT } = require('../../../lib/constants')
const { client } = require('../../../lib/http')
const { get } = require('lodash')
const { getApy: getMerklApy } = require('./merkl')
const { logger } = require('../../../lib/logger')

const getApy = async (eulerVault, strategyAddr, factor, chain) => {
  let apy

  try {
    const response = await client.get(
      `${EULER_ENDPOINT}?chainId=${chain}&vaultAddress=${eulerVault}`,
    )
    const apyResult = get(response, `data.vault.apyCurrent`, '0')
    apy = new BigNumber(apyResult)
  } catch (err) {
    logger.error('Euler API error: ', err)
    apy = new BigNumber(0)
  }

  let merklAPR = new BigNumber(await getMerklApy(strategyAddr, eulerVault, chain, 1))

  apy = apy.plus(merklAPR).times(factor)

  return apy.toFixed()
}

module.exports = {
  getApy,
}
