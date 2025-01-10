const { get } = require('lodash')
const { MERKL_ENDPOINT } = require('../../../lib/constants')
const { cachedAxios } = require('../../../lib/db/models/cache')

const getApy = async (userAddress, poolAddress, chainId, reduction) => {
  let response, apy = 0

  try {
    response = await cachedAxios.get(`${MERKL_ENDPOINT}opportunity?campaigns=true&chainId=${chainId}&mainParameter=${poolAddress}`)
    const data = get(response, `data`, 0)
    const keys = Object.keys(data)
    for (let key of keys) {
      const campaigns = get(data, `${key}.campaigns.active`)
      for (let campaign of campaigns) {
        if (campaign.campaignParameters.blacklist.includes(userAddress)) {
          continue
        }
        apy += campaign.apr
      }
    }
    console.log(apy)
    apy = parseFloat(apy) * parseFloat(reduction)
    if (isNaN(apy)) {
      apy = 0
    }
  } catch (err) {
    console.error('MERKL API error: ', err)
    apy = 0
  }

  return apy
}

module.exports = {
  getApy,
}
