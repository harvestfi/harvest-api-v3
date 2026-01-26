const axios = require('axios')
const http = require('http')
const https = require('https')

const httpAgent = new http.Agent({
  keepAlive: true,
  maxSockets: 20,
  maxFreeSockets: 5,
  timeout: 10_000,
  freeSocketTimeout: 10_000, // close idle sockets sooner (Node supports this)})
})

const httpsAgent = new https.Agent({
  keepAlive: true,
  maxSockets: 20,
  maxFreeSockets: 5,
  timeout: 10_000,
  freeSocketTimeout: 10_000, // close idle sockets sooner (Node supports this)})
})

const client = axios.create({
  timeout: 10_000,
  httpAgent,
  httpsAgent,
  maxContentLength: 5 * 1024 * 1024,
  maxBodyLength: 5 * 1024 * 1024,
  decompress: true,
  validateStatus: status => status >= 200 && status < 300,
})

module.exports = { client }
