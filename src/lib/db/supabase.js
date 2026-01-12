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

const saveWalletConnection = async ({ walletAddress, connectedAt, balance }) => {
  if (!supabase) {
    throw new Error(
      'Supabase client not initialized. Please configure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables.',
    )
  }

  try {
    // Check if wallet address exists
    const { data: existingWallets, error: queryError } = await supabase
      .from('wallet_connections')
      .select('wallet_address')
      .eq('wallet_address', walletAddress.toLowerCase())
      .limit(1)

    if (queryError) {
      console.error('Error checking wallet existence:', queryError)
      throw queryError
    }

    const walletExists = existingWallets && existingWallets.length > 0

    if (walletExists) {
      // Update existing wallet: update connected_at and balance
      const { data, error } = await supabase
        .from('wallet_connections')
        .update({
          connected_at: connectedAt.toISOString(),
          balance: balance || 0,
        })
        .eq('wallet_address', walletAddress.toLowerCase())
        .select()

      if (error) {
        console.error('Error updating wallet connection in Supabase:', error)
        throw error
      }

      return { data, updated: true }
    } else {
      // Insert new wallet record
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

      return { data, updated: false }
    }
  } catch (error) {
    console.error('Error in saveWalletConnection:', error)
    throw error
  }
}

module.exports = {
  supabase,
  saveWalletConnection,
}
