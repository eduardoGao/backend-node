require('dotenv').config()

const config = {
  //CONFIG
  port: 3000,
  //cors= process.env.CORS,

  //MONGO DB
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME
}

module.exports = { config }