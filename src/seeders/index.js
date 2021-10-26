const { connectDb } = require('../../services/db')
connectDb();

const runSeeders = async () => {
  try {
    await require('./user')(),
    await require('./category')(),
    await require('./product')(),
    await require('./order')(),
    console.log('Seeding completed')
  } catch(error) {
    console.log(error)
    process.exit(1)
  }

  process.exit(0)
}

runSeeders();