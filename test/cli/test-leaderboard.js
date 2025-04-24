const { getLeaderboardData } = require('../../src/runtime/pollers')
const initDb = require('../../src/lib/db')
const { cliPreload } = require('../../src/runtime/pollers')

const main = async () => {
  await initDb()
  await cliPreload()
  await getLeaderboardData()
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
