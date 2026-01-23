function safeError(err) {
  if (!err) return err

  // Axios error
  if (err.isAxiosError) {
    return {
      name: err.name,
      message: err.message,
      code: err.code,
      status: err.response?.status,
      url: err.config?.url,
      method: err.config?.method,
    }
  }

  // Mongoose / Mongo error
  if (err.name?.includes('Mongo')) {
    return {
      name: err.name,
      message: err.message,
      code: err.code,
    }
  }

  // Web3 / RPC error
  if (err.message?.includes('revert') || err.message?.includes('execution')) {
    return {
      name: err.name,
      message: err.message,
    }
  }

  // Generic error
  return {
    name: err.name,
    message: err.message,
    stack:
      process.env.NODE_ENV === 'production'
        ? undefined
        : err.stack?.split('\n').slice(0, 3).join('\n'),
  }
}

function error(msg, err, extra = {}) {
  if (err) {
    console.error(msg, {
      error: safeError(err),
      ...extra,
    })
  } else {
    console.error(msg, extra)
  }
}

function warn(msg, extra = {}) {
  console.warn(msg, extra)
}

function info(msg, extra = {}) {
  console.log(msg, extra)
}

module.exports = {
  error,
  warn,
  info,
}
