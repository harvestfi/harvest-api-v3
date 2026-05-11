const initCycleTLS = require('cycletls')
const logger = require('./logger')

// Chrome 131 desktop fingerprint — matches a real browser TLS handshake so that endpoints
// gated behind Cloudflare bot management (e.g. dexapi.zkswap.finance with
// `cf-mitigated: challenge`) accept the request. Plain Node TLS handshakes get
// JA3-fingerprinted and 403'd.
const CHROME_JA3 =
  '771,4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53,0-23-65281-10-11-35-16-5-13-18-51-45-43-27-17513,29-23-24,0'
const CHROME_USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'

const DEFAULT_HEADERS = {
  Accept: 'application/json, text/plain, */*',
  'Accept-Language': 'en-US,en;q=0.9',
}

let clientPromise

const getClient = () => {
  if (clientPromise) return clientPromise

  clientPromise = initCycleTLS().then(
    client => {
      process.once('exit', () => {
        try {
          client.exit()
        } catch (_err) {
          // best-effort shutdown
        }
      })
      for (const signal of ['SIGINT', 'SIGTERM']) {
        process.once(signal, () => process.exit(0))
      }
      return client
    },
    err => {
      clientPromise = undefined
      throw err
    },
  )

  return clientPromise
}

/**
 * GET a JSON endpoint using a Chrome-like TLS handshake.
 * Use only for Cloudflare-protected hosts that reject Node's default TLS fingerprint.
 */
const getJson = async (
  url,
  { headers = {}, ja3 = CHROME_JA3, userAgent = CHROME_USER_AGENT, timeout = 15 } = {},
) => {
  const client = await getClient()
  const response = await client(
    url,
    { ja3, userAgent, timeout, headers: { ...DEFAULT_HEADERS, ...headers } },
    'get',
  )

  if (response.status >= 400) {
    throw Object.assign(new Error(`TLS-impersonating GET failed: status ${response.status}`), {
      status: response.status,
    })
  }

  try {
    return await response.json()
  } catch (err) {
    const snippet = (await response.text().catch(() => '')).slice(0, 200)
    logger.warn(`TLS-impersonating GET ${url} returned non-JSON body`, { snippet })
    throw err
  }
}

module.exports = { getJson }
