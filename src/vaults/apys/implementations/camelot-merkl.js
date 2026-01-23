const { get } = require('lodash')
const { CAMELOT_MERKL_ENDPOINT } = require('../../../lib/constants')
const { client } = require('../../../lib/http')

const getApy = async (gammaAddress, poolAddress, reduction) => {
  let response,
    apy = 0
  const now = Math.floor(Date.now() / 1000)

  try {
    response = await client.get(`${CAMELOT_MERKL_ENDPOINT}`)
    let data = get(response, `data.data.campaigns`, 0)
    data = data.filter(function (a) {
      return a.pool == poolAddress
    })

    for (let reward of data) {
      if (reward.endTime > now) {
        for (let vault of reward.vaults) {
          if (vault.address.toLowerCase() == gammaAddress.toLowerCase()) {
            apy += parseFloat(vault.apr)
          }
        }
      }
    }

    apy = parseFloat(apy) * parseFloat(reduction)
  } catch (err) {
    console.error('MERKL API error: ', err)
    apy = 0
  }

  return apy
}

module.exports = {
  getApy,
}
