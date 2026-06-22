/*
 * Standalone RPC diagnostic. Run INSIDE the failing environment:
 *   heroku run -a <prod-app> node diagnose-rpc.js
 * It uses only Node built-ins (no app code, no node-fetch, no keep-alive)
 * so it isolates the network/environment from our application layer.
 */
const https = require('https')
const { URL } = require('url')

const ARB = process.env.ARBITRUM_RPC_URL // the chain that fails in the logs
const BASE = process.env.BASE_RPC_URL // the chain that works in the logs

const body = JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'eth_blockNumber', params: [] })

// One fresh connection, no keep-alive, raw https — closest to "just curl it".
const rawPost = (label, urlStr) =>
  new Promise(resolve => {
    if (!urlStr) {
      console.log(`[${label}] no URL configured`)
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
        // no agent => one-off connection, no socket reuse
        agent: false,
        timeout: 15000,
      },
      res => {
        let data = ''
        res.on('data', c => (data += c))
        res.on('end', () =>
          resolve(
            console.log(
              `[${label}] OK  status=${res.statusCode}  ${Date.now() - started}ms  bytes=${data.length}  body=${data.slice(0, 80)}`,
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
      resolve(console.log(`[${label}] ERROR ${err.code || err.message}  after ${Date.now() - started}ms`)),
    )
    req.end(body)
  })

const egressIp = () =>
  new Promise(resolve => {
    https
      .get('https://api.ipify.org', res => {
        let d = ''
        res.on('data', c => (d += c))
        res.on('end', () => resolve(console.log(`egress IP: ${d}`)))
      })
      .on('error', e => resolve(console.log(`egress IP lookup failed: ${e.code || e.message}`)))
  })

;(async () => {
  console.log('=== RPC diagnostic ===')
  console.log('node', process.version)
  await egressIp()

  console.log('\n-- single raw calls (fresh connection each) --')
  await rawPost('ARB  single', ARB)
  await rawPost('BASE single', BASE)

  console.log('\n-- 10 rapid sequential ARB calls (does it degrade under burst?) --')
  for (let i = 1; i <= 10; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await rawPost(`ARB  #${i}`, ARB)
  }
  console.log('\n=== done ===')
})()
