const { Cache, appendData } = require('../../lib/db/models/cache')
const { DB_CACHE_IDS } = require('../../lib/constants')
const axios = require('axios')
const { get } = require('lodash')
require('dotenv').config()
const initDb = require('../../lib/db')

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const main = async () => {
  console.log('\n-- Getting Historical Rates data --')

  await initDb()

  const type = DB_CACHE_IDS.HISTORICAL_RATES
  const historical_rates = (await Cache.collection.findOne({ type })) ?? []
  const startTimeStamp = 1598918400000 // Sep.01.2020
  const defaultTimeSpac = 86400000
  let hasErrors = false

  const now = new Date()
  now.setHours(0, 0, 0, 0) // Set hours, minutes, seconds, and milliseconds to 0
  const curTimeStamp = now.getTime()

  const length = historical_rates?.USD?.length ?? 0
  let lastTimeStamp =
    length === 0 ? startTimeStamp : historical_rates.USD[length - 1].timestamp + defaultTimeSpac

  while (lastTimeStamp < curTimeStamp) {
    const date = new Date(lastTimeStamp)

    // Get the components of the date (year, month, and day)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0') // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0')

    // Construct the date string in the format "YYYY-MM-DD"
    const dateString = `${year}-${month}-${day}`
    console.log('date of rate : ', dateString)

    let response = {}

    try {
      response = await axios.get(
        `https://api.freecurrencyapi.com/v1/historical?apikey=${process.env.CURRENCY_API_KEY}&date=${dateString}`,
      )

      let rates = get(response, `data.data.${dateString}`)
      let appendDetail = {}
      for (const [currency, price] of Object.entries(rates)) {
        appendDetail[currency] = { timestamp: lastTimeStamp, price: price }
      }
      await appendData(Cache, DB_CACHE_IDS.HISTORICAL_RATES, appendDetail, hasErrors)
      await sleep(7000) // Sleep for 7000 milliseconds (7 seconds)
    } catch (err) {
      console.error('Error getting historical rates: ', err, lastTimeStamp)
      await sleep(7000) // Sleep for 7000 milliseconds (7 seconds)
    }

    lastTimeStamp = lastTimeStamp + defaultTimeSpac
  }
  console.log('-- Done getting Historical Rates data --\n')
}

main()
