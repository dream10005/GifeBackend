const { Pool } = require('pg');
// const crypto = require('crypto');
const dbConfig = require('../configs/database');

console.log(dbConfig);

const pool = new Pool({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  port: 5432,
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;
