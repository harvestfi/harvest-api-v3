const { createClient } = require('@supabase/supabase-js')
const { SUPABASE_URL } = require('../constants')

const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.warn(
    'Supabase credentials not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_ANON_KEY) environment variables.',
  )
}

// Create Supabase client
const supabase = SUPABASE_URL && SUPABASE_KEY ? createClient(SUPABASE_URL, SUPABASE_KEY) : null

const isWalletLoggedToday = async (walletAddress, date = new Date()) => {
  if (!supabase) {
    throw new Error(
      'Supabase client not initialized. Please configure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables.',
    )
  }

  const startOfDay = new Date(date)
  startOfDay.setUTCHours(0, 0, 0, 0)
  const endOfDay = new Date(date)
  endOfDay.setUTCHours(23, 59, 59, 999)

  const { data, error } = await supabase
    .from('wallet_connections')
    .select('wallet_address')
    .eq('wallet_address', walletAddress.toLowerCase())
    .gte('connected_at', startOfDay.toISOString())
    .lte('connected_at', endOfDay.toISOString())
    .limit(1)

  if (error) {
    console.error('Error checking if wallet logged today:', error)
    throw error
  }

  return data && data.length > 0
}

const saveWalletConnection = async ({ walletAddress, connectedAt, balance }) => {
  if (!supabase) {
    throw new Error(
      'Supabase client not initialized. Please configure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables.',
    )
  }

  try {
    // Wallet not logged today - create new entry
    const { data, error } = await supabase
      .from('wallet_connections')
      .insert({
        wallet_address: walletAddress.toLowerCase(),
        connected_at: connectedAt.toISOString(),
        balance: balance || 0,
      })
      .select()

    if (error) {
      console.error('Error saving wallet connection to Supabase:', error)
      throw error
    }

    return { data, alreadyLogged: false }
  } catch (error) {
    console.error('Error in saveWalletConnection:', error)
    throw error
  }
}

module.exports = {
  supabase,
  saveWalletConnection,
  isWalletLoggedToday,
}
