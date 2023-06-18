const BigNumber = require('bignumber.js')
const { format } = require('timeago.js')

const allChains = process.env.SUPPORTED_CHAINS?.trim()
  ?.split(';')
  ?.map(value => Number.parseInt(value).toString())
  ?.filter(value => value !== 'NaN')

const isSpecialPool = pool => pool.id === 'profit-sharing-farm'

const shouldGetPoolWithChain = chain => !allChains || allChains.indexOf(chain) !== -1

const getDailyCompound = yearlyApr =>
  new BigNumber(1)
    .plus(new BigNumber(yearlyApr).dividedBy(36500))
    .exponentiatedBy(365)
    .minus(1)
    .multipliedBy(100)
    .toFixed(2)

const getWeeklyCompound = yearlyApr =>
  new BigNumber(1)
    .plus(new BigNumber(yearlyApr).dividedBy(5200))
    .exponentiatedBy(52)
    .minus(1)
    .multipliedBy(100)
    .toFixed(2)

const formatTimeago = date => {
  const diff = Math.floor(new Date() - date)
  if (diff < 3600000 || diff % 3600000 < 60000) {
    return format(date)
  } else {
    const diff1 = diff % 3600000
    return (
      format(new Date() - (diff - diff1)) +
      ', ' +
      format(date, 'en_US', { relativeDate: new Date() - (diff - diff1) })
    )
  }
}

const getStartTimestamp = timestamp => {
  const date = new Date(timestamp * 1000) // convert to milliseconds
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)
  return Math.floor(date.getTime() / 1000)
}

module.exports = {
  isSpecialPool,
  shouldGetPoolWithChain,
  getDailyCompound,
  getWeeklyCompound,
  formatTimeago,
  getStartTimestamp,
}
