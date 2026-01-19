const { createClient } = require('@supabase/supabase-js')
const { SUPABASE_URL } = require('../constants')
const { default: BigNumber } = require('bignumber.js')
const crypto = require('crypto')

const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.warn(
    'Supabase credentials not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_ANON_KEY) environment variables.',
  )
}

// Create Supabase client
const supabase = SUPABASE_URL && SUPABASE_KEY ? createClient(SUPABASE_URL, SUPABASE_KEY) : null

const isWalletLoggedToday = async (walletAddress, date = new Date()) => {
  if (!supabase || !process.env.SUPABASE_WALLET_CONNECTIONS_TABLE) {
    throw new Error(
      'Supabase client not initialized. Please configure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables.',
    )
  }

  const startOfDay = new Date(date)
  startOfDay.setUTCHours(0, 0, 0, 0)
  const endOfDay = new Date(date)
  endOfDay.setUTCHours(23, 59, 59, 999)

  const { data, error } = await supabase
    .from(process.env.SUPABASE_WALLET_CONNECTIONS_TABLE)
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
  if (!supabase || !process.env.SUPABASE_WALLET_CONNECTIONS_TABLE) {
    throw new Error(
      'Supabase client not initialized. Please configure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables.',
    )
  }

  try {
    // Wallet not logged today - create new entry
    const { data, error } = await supabase
      .from(process.env.SUPABASE_WALLET_CONNECTIONS_TABLE)
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

const getLastUserTransactionTimestamp = async (chainId = null) => {
  if (!supabase) {
    throw new Error(
      'Supabase client not initialized. Please configure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables.',
    )
  }

  try {
    let query = supabase
      .from('user_transactions')
      .select('date')
      .order('date', { ascending: false })
    if (chainId) {
      query = query.eq('chain', chainId.toString())
    }

    const { data, error } = await query.limit(1).single()

    if (error && error.code !== 'PGRST116') {
      console.error('Error getting last user transaction timestamp:', error)
      throw error
    }

    if (data && data.date) {
      return Math.floor(new Date(data.date).getTime() / 1000)
    }
    return null
  } catch (error) {
    console.error('Error in getLastUserTransactionTimestamp:', error)
    throw error
  }
}

const saveUserTransactions = async (transactions, chainId = null) => {
  if (!supabase) {
    throw new Error(
      'Supabase client not initialized. Please configure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables.',
    )
  }

  if (!transactions || transactions.length === 0) {
    return { data: [], count: 0 }
  }

  try {
    const transformedTransactions = transactions.map(tx => {
      let usdValue = '0'

      if (tx.vault) {
        // Note: subgraph returns 'decimal' (singular) for vault, 'decimals' (plural) for plasmaVault
        const vaultDecimals = parseInt(tx.vault.decimal || 18, 10)
        const price = new BigNumber(tx.price || 0)
        const value = new BigNumber(tx.value || 0)
        const sharePrice = new BigNumber(tx.sharePrice || 0)

        // For regular vaults: USD = price * value / 10^vaultDecimals * sharePrice / 10^vaultDecimals
        usdValue = price
          .times(value)
          .dividedBy(new BigNumber(10).pow(vaultDecimals))
          .times(sharePrice)
          .dividedBy(new BigNumber(10).pow(vaultDecimals))
          .toFixed()
      } else if (tx.plasmaVault) {
        const vaultDecimals = parseInt(tx.plasmaVault.decimals || 18, 10)
        const price = new BigNumber(tx.price || 0)
        const value = new BigNumber(tx.value || 0)
        const sharePrice = new BigNumber(tx.sharePrice || 0)

        // For plasma vaults: USD = price * value / 10^vaultDecimals * sharePrice / 10^(vaultDecimals-2)
        usdValue = price
          .times(value)
          .dividedBy(new BigNumber(10).pow(vaultDecimals))
          .times(sharePrice)
          .dividedBy(new BigNumber(10).pow(vaultDecimals - 2))
          .toFixed()
      }

      const transactionType = (tx.transactionType || '').toLowerCase()
      const action = transactionType.includes('deposit')
        ? 'IN'
        : transactionType.includes('withdraw')
        ? 'OUT'
        : 'IN' // Default to IN if unclear

      const vaultAddress = tx.vault?.id || tx.plasmaVault?.id || null
      const timestamp = parseInt(tx.timestamp, 10)
      const date = new Date(timestamp * 1000).toISOString()

      const walletAddr = tx.userAddress.toLowerCase()
      const actionValue = action.toUpperCase()
      const vaultAddr = vaultAddress ? vaultAddress.toLowerCase() : 'null'
      const txHash = tx.tx.toLowerCase()
      const keyString = `${walletAddr}_${actionValue}_${vaultAddr}_${txHash}`
      const uniqKey = crypto.createHash('sha256').update(keyString).digest('hex')

      return {
        date: date,
        wallet_address: tx.userAddress.toLowerCase(),
        chain: chainId ? parseInt(chainId, 10) : null,
        action: action,
        vault_address: vaultAddress ? vaultAddress.toLowerCase() : null,
        usd_amount: usdValue,
        tx_hash: tx.tx,
        uniq_key: uniqKey,
      }
    })

    const uniqKeys = [...new Set(transformedTransactions.map(tx => tx.uniq_key))]

    const existingUniqKeys = new Set()
    const keyChunkSize = 100

    for (let i = 0; i < uniqKeys.length; i += keyChunkSize) {
      const keyChunk = uniqKeys.slice(i, i + keyChunkSize)
      const { data: existingData, error: queryError } = await supabase
        .from('user_transactions')
        .select('uniq_key')
        .in('uniq_key', keyChunk)

      if (queryError) {
        console.warn('Error querying existing uniq_keys:', queryError)
      } else if (existingData) {
        existingData.forEach(item => {
          if (item.uniq_key) {
            existingUniqKeys.add(String(item.uniq_key).toLowerCase().trim())
          }
        })
      }
    }

    const newTransactions = transformedTransactions.filter(tx => {
      const normalizedKey = String(tx.uniq_key || '')
        .toLowerCase()
        .trim()
      return !existingUniqKeys.has(normalizedKey)
    })

    if (newTransactions.length === 0) {
      console.log('All transactions already exist in database, skipping insert')
      return { data: transformedTransactions, count: 0 }
    }

    const duplicateCount = transformedTransactions.length - newTransactions.length
    if (duplicateCount > 0) {
      console.log(
        `Filtered ${duplicateCount} duplicate transactions (by uniq_key), inserting ${newTransactions.length} new transactions`,
      )
    }

    const batchSize = 500
    let insertedCount = 0
    let skippedDuplicates = 0

    for (let i = 0; i < newTransactions.length; i += batchSize) {
      const batch = newTransactions.slice(i, i + batchSize)
      const { data, error } = await supabase.from('user_transactions').insert(batch).select()

      if (error) {
        if (
          error.code === '23505' ||
          error.message?.includes('unique') ||
          error.message?.includes('duplicate')
        ) {
          console.log(
            `Batch ${
              i / batchSize + 1
            }: Contains duplicates, inserting individually to skip them...`,
          )

          for (const tx of batch) {
            const { data: singleData, error: singleError } = await supabase
              .from('user_transactions')
              .insert(tx)
              .select()

            if (singleError) {
              if (
                singleError.code === '23505' ||
                singleError.message?.includes('unique') ||
                singleError.message?.includes('duplicate')
              ) {
                skippedDuplicates++
              } else {
                console.error(`Error inserting transaction ${tx.tx_hash}:`, singleError)
              }
            } else if (singleData) {
              insertedCount += singleData.length
            }
          }
        } else {
          console.error(`Error saving user transactions batch ${i / batchSize + 1}:`, error)
          throw error
        }
      } else {
        insertedCount += data ? data.length : 0
      }
    }

    if (skippedDuplicates > 0) {
      console.log(
        `Skipped ${skippedDuplicates} duplicate transactions (due to race conditions or concurrent inserts)`,
      )
    }

    return { data: transformedTransactions, count: insertedCount }
  } catch (error) {
    console.error('Error in saveUserTransactions:', error)
    throw error
  }
}

module.exports = {
  supabase,
  saveWalletConnection,
  isWalletLoggedToday,
  getLastUserTransactionTimestamp,
  saveUserTransactions,
}
