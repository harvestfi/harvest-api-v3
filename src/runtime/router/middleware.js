const { UI_DATA_FILES } = require('../../lib/constants')
const { getUIData } = require('../../lib/data')
const rateLimit = require('express-rate-limit')

const validateAPIKey = concatenatedKeys => (req, res, next) => {
  const keys = concatenatedKeys.split(';')
  if (!keys.find(k => k === req.query.key)) {
    res.status(401).json({ error: 'invalid api key' })
  } else {
    next()
  }
}

const walletConnectRateLimit = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 20,
  message: {
    error: 'Too many wallet-connect requests, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: req => {
    const apiKey = req.query.key || 'no-key'
    const ip = req.ip || req.connection.remoteAddress || 'unknown'
    return `${ip}-${apiKey}`
  },
})

const asyncWrap = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(err => {
    console.error(`asyncWrap middleware failed: ${err.toString()}`, err.stack)
    return res.status(500).json({ error: 'internal server error' })
  })

const validateTokenSymbol = async (req, res, next) => {
  const tokens = await getUIData(UI_DATA_FILES.TOKENS)
  const tokenSymbol = req.params.symbol.toUpperCase()

  if (!tokens[tokenSymbol]) {
    res.status(401).json({ error: 'invalid token symbol' })
  } else {
    next()
  }
}

module.exports = {
  validateAPIKey,
  asyncWrap,
  validateTokenSymbol,
  walletConnectRateLimit,
}
