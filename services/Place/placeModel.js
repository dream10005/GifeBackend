const mysql = require('mysql');
const dbConfig = require('../../configs/database');

const pool = mysql.createPool(dbConfig);

module.exports = pool;
