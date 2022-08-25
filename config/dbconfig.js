const sql = require('mssql')
const dotenv = require("dotenv");
dotenv.config();
const sqlConfig = {
  user: process.env.USER_ID,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
  server: process.env.server_NAME,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

module.exports=sqlConfig;