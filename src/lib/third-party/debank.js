const { get } = require('lodash')
const { DEBANK_API_URL } = require('../constants')
const logger = require('../logger')
const { client } = require('../http')

const DEBANK_API_KEY = process.env.DEBANK_API_KEY || ''

const getTotalBalance = async walletAddress => {
  if (!walletAddress) {
    logger.error('getTotalBalance: walletAddress is required')
    return 0
  }

  if (!DEBANK_API_KEY) {
    console.warn('DEBANK_API_KEY not set. Balance fetching will be skipped.')
    return 0
  }

  try {
    const url = `${DEBANK_API_URL}/v1/user/total_balance`
    const headers = {
      accept: 'application/json',
      AccessKey: DEBANK_API_KEY,
    }
    const params = {
      id: walletAddress.toLowerCase(),
    }

    const response = await client.get(url, {
      headers,
      params,
      timeout: 10000, // 10 second timeout
    })

    // DeBank API returns balance in the response
    const totalUsdValue = get(response, 'data.total_usd_value', 0)
    return parseFloat(totalUsdValue) || 0
  } catch (error) {
    logger.error(`Error fetching DeBank balance for ${walletAddress}:`, error.message)
    // Return 0 on error instead of throwing
    return 0
  }
}

const getHarvestBalance = async walletAddress => {
  if (!walletAddress) {
    logger.error('getHarvestBalance: walletAddress is required')
    return 0
  }

  if (!DEBANK_API_KEY) {
    console.warn('DEBANK_API_KEY not set. Balance fetching will be skipped.')
    return 0
  }

  try {
    const url = `${DEBANK_API_URL}/v1/user/all_simple_protocol_list`
    const headers = {
      accept: 'application/json',
      AccessKey: DEBANK_API_KEY,
    }
    const params = {
      id: walletAddress.toLowerCase(),
    }

    const response = await client.get(url, {
      headers,
      params,
      timeout: 10000, // 10 second timeout
    })

    const totalHarvestUsd = response.data
      .filter(item => item.id.toLowerCase().includes('harvest'))
      .reduce((sum, item) => sum + (parseFloat(item.net_usd_value) || 0), 0)

    return totalHarvestUsd
  } catch (error) {
    logger.error(`Error fetching DeBank protocol list for ${walletAddress}:`, error.message)
    // Return 0 on error instead of throwing
    return 0
  }
}

module.exports = {
  getTotalBalance,
  getHarvestBalance,
}
