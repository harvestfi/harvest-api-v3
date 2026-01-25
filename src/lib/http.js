const axios = require('axios')
const http = require('http')
const https = require('https')

const httpAgent = new http.Agent({
  keepAlive: true,
  maxSockets: 50,
  maxFreeSockets: 20,
  timeout: 30_000,
})

const httpsAgent = new https.Agent({
  keepAlive: true,
  maxSockets: 50,
  maxFreeSockets: 20,
  timeout: 30_000,
})

const client = axios.create({
  timeout: 15_000, // prevents hanging sockets
  httpAgent,
  httpsAgent,
  maxContentLength: 5 * 1024 * 1024, // optional: 5MB cap
  maxBodyLength: 5 * 1024 * 1024,
  decompress: true,
  validateStatus: status => status >= 200 && status < 300, // fail fast on 404/500 etc
})

module.exports = { client }
