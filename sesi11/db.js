const { Pool } = require('pg')
const db = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  database: 'h8',
  port: 5432,
})

module.exports = db;