const axios = require('axios')
const { FLUID_ENDPOINT } = require('../../../lib/constants')

const getApy = async (fToken, reduction, chain) => {
  let apy

  try {
    const response = await axios.get(`${FLUID_ENDPOINT}/${chain}/tokens`)
    const tokenData = response.data.data.find(
      token => token.address.toLowerCase() === fToken.toLowerCase(),
    )
    let rewardAPR = 0
    if (tokenData.rewards) {
      for (const reward of tokenData.rewards) {
        rewardAPR += parseFloat(reward.rate) / 100
      }
    }
    const underlyingAPR = parseFloat(tokenData.totalRate) / 100
    apy = underlyingAPR + rewardAPR
  } catch (err) {
    console.error('Gamma API error: ', err)
    apy = 0
  }

  if (reduction) {
    apy = apy * parseFloat(reduction)
  }

  return apy
}

module.exports = {
  getApy,
}
