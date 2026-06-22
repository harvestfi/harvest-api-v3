/*
 * Standalone RPC diagnostic. Run INSIDE the failing environment:
 *   heroku run -a <prod-app> node diagnose-rpc.js
 *
 * Builds the Alchemy URLs from ALCHEMY_KEY exactly like src/lib/constants.js,
 * so it matches your real config. Uses only Node built-ins (no app code, no
 * node-fetch, no keep-alive) to isolate the network from the application layer.
 * You can also pass a full URL as an argument to test it directly:
 *   node diagnose-rpc.js "https://arb-mainnet.g.alchemy.com/v2/<key>"
 */
const https = require('https')
const { URL } = require('url')

const KEY = process.env.ALCHEMY_KEY
const argUrl = process.argv[2]

// Same construction as src/lib/constants.js (env override || alchemy default).
const ARB =
  argUrl || process.env.ARBITRUM_RPC_URL || (KEY && `https://arb-mainnet.g.alchemy.com/v2/${KEY}`)
const BASE = process.env.BASE_RPC_URL || (KEY && `https://base-mainnet.g.alchemy.com/v2/${KEY}`)
const ETH =
  process.env.MAINNET_RPC_URL || (KEY && `https://eth-mainnet.g.alchemy.com/v2/${KEY}`)

const body = JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'eth_blockNumber', params: [] })

// One fresh connection, no keep-alive, raw https — closest to "just curl it".
const rawPost = (label, urlStr) =>
  new Promise(resolve => {
    if (!urlStr) {
      console.log(`[${label}] no URL (ALCHEMY_KEY not set in this env?)`)
      return resolve()
    }
    const u = new URL(urlStr)
    const started = Date.now()
    const req = https.request(
      {
        hostname: u.hostname,
        path: u.pathname + u.search,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
        agent: false, // one-off connection, no socket reuse
        timeout: 15000,
      },
      res => {
        let data = ''
        res.on('data', c => (data += c))
        res.on('end', () =>
          resolve(
            console.log(
              `[${label}] OK status=${res.statusCode} ${Date.now() - started}ms bytes=${data.length} body=${data.slice(0, 70)}`,
            ),
          ),
        )
      },
    )
    req.on('timeout', () => {
      console.log(`[${label}] TIMEOUT after ${Date.now() - started}ms`)
      req.destroy()
      resolve()
    })
    req.on('error', err =>
      resolve(
        console.log(`[${label}] ERROR ${err.code || err.message} after ${Date.now() - started}ms`),
      ),
    )
    req.end(body)
  })

const httpsGet = url =>
  new Promise(resolve => {
    https
      .get(url, res => {
        let d = ''
        res.on('data', c => (d += c))
        res.on('end', () => resolve(d.trim()))
      })
      .on('error', e => resolve(`(failed: ${e.code || e.message})`))
  })

;(async () => {
  console.log('=== RPC diagnostic ===')
  console.log('node', process.version, '| STACK', process.env.STACK || '(unset)')
  console.log('ALCHEMY_KEY present:', Boolean(KEY))
  console.log('egress IP:', await httpsGet('https://api.ipify.org'))

  console.log('\n-- single raw calls (fresh connection each) --')
  await rawPost('ETH  single', ETH)
  await rawPost('ARB  single', ARB)
  await rawPost('BASE single', BASE)

  console.log('\n-- 10 rapid sequential ARB calls (does it degrade under burst?) --')
  for (let i = 1; i <= 10; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await rawPost(`ARB #${i}`, ARB)
  }
  console.log('\n=== done ===')
})()
