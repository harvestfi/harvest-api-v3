const REDACTED = '[REDACTED]'
const MAX_STRING_LENGTH = 300
const MAX_ARRAY_ITEMS = 10
const MAX_OBJECT_KEYS = 20

const SENSITIVE_KEY_REGEX = /(authorization|api[_-]?key|token|secret|password|passphrase|private[_-]?key|cookie|set-cookie|signature)/i
const SENSITIVE_QUERY_REGEX = /([?&](?:authorization|api[_-]?key|apikey|key|token|access[_-]?token|refresh[_-]?token|secret|password|signature)=)[^&\s]+/gi

function truncateString(value) {
  if (value.length <= MAX_STRING_LENGTH) return value
  return `${value.slice(0, MAX_STRING_LENGTH)}...[truncated]`
}

function redactString(value) {
  if (typeof value !== 'string') return value
  return truncateString(
    value
      .replace(/(bearer\s+)[^\s,]+/gi, `$1${REDACTED}`)
      .replace(SENSITIVE_QUERY_REGEX, `$1${REDACTED}`),
  )
}

function sanitizeUrl(url) {
  if (typeof url !== 'string') return url
  return redactString(url)
}

function sanitizeStack(stack) {
  if (!stack || process.env.NODE_ENV === 'production') return undefined
  return stack
    .split('\n')
    .slice(0, 3)
    .map(line => redactString(line))
    .join('\n')
}

function safeError(err) {
  if (!err) return err
  if (typeof err === 'string') return redactString(err)
  if (typeof err !== 'object') return err

  if (err.isAxiosError) {
    return {
      name: err.name,
      message: redactString(err.message),
      code: err.code,
      status: err.response?.status,
      statusText: err.response?.statusText,
      method: err.config?.method,
      url: sanitizeUrl(err.config?.url),
      stack: sanitizeStack(err.stack),
    }
  }

  return {
    name: err.name,
    message: redactString(err.message || String(err)),
    code: err.code,
    stack: sanitizeStack(err.stack),
  }
}

function sanitizeArray(items) {
  return items.slice(0, MAX_ARRAY_ITEMS).map(item => {
    if (typeof item === 'string') return redactString(item)
    if (typeof item === 'number' || typeof item === 'boolean' || item == null) return item
    return '[Object]'
  })
}

function sanitizeExtra(extra) {
  if (!extra || typeof extra !== 'object' || Array.isArray(extra)) return {}

  const out = {}

  Object.keys(extra)
    .slice(0, MAX_OBJECT_KEYS)
    .forEach(key => {
      const value = extra[key]

      if (SENSITIVE_KEY_REGEX.test(key)) {
        out[key] = REDACTED
      } else if (key.toLowerCase().includes('url') && typeof value === 'string') {
        out[key] = sanitizeUrl(value)
      } else if (typeof value === 'string') {
        out[key] = redactString(value)
      } else if (typeof value === 'number' || typeof value === 'boolean' || value == null) {
        out[key] = value
      } else if (Array.isArray(value)) {
        out[key] = sanitizeArray(value)
      } else if (value instanceof Error) {
        out[key] = safeError(value)
      } else {
        out[key] = '[Object]'
      }
    })

  return out
}

function normalizeMessage(msg) {
  if (typeof msg === 'string') return redactString(msg)
  if (msg instanceof Error) return safeError(msg)
  if (msg && typeof msg === 'object') return '[Object]'
  return msg
}

function error(msg, err, extra = {}) {
  const safeMsg = normalizeMessage(msg)
  const safeExtra = sanitizeExtra(extra)

  if (err) {
    if (safeExtra && typeof safeExtra === 'object' && Object.keys(safeExtra).length > 0) {
      console.error(safeMsg, { error: safeError(err), ...safeExtra })
      return
    }

    console.error(safeMsg, { error: safeError(err) })
    return
  }

  if (safeExtra && typeof safeExtra === 'object' && Object.keys(safeExtra).length > 0) {
    console.error(safeMsg, safeExtra)
    return
  }

  console.error(safeMsg)
}

function warn(msg, extra = {}) {
  const safeMsg = normalizeMessage(msg)
  const safeExtra = sanitizeExtra(extra)

  if (safeExtra && typeof safeExtra === 'object' && Object.keys(safeExtra).length > 0) {
    console.warn(safeMsg, safeExtra)
    return
  }

  console.warn(safeMsg)
}

function info(msg, extra = {}) {
  const safeMsg = normalizeMessage(msg)
  const safeExtra = sanitizeExtra(extra)

  if (safeExtra && typeof safeExtra === 'object' && Object.keys(safeExtra).length > 0) {
    console.log(safeMsg, safeExtra)
    return
  }

  console.log(safeMsg)
}

module.exports = {
  error,
  warn,
  info,
}
