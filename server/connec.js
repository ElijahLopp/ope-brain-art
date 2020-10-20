const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "noragami",
  host: "localhost",
  port: 5432,
  database: "brainart"
});

module.exports = pool;
