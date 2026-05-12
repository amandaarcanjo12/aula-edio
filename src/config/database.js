const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', 
  host: 'localhost',
  database: 'quitanda_Amanda', 
  password: 'senai',
  port: 5432,
});

module.exports = pool;