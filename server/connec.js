// const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: "postgres",
//   password: "noragami",
//   host: "localhost",
//   port: 5432,
//   database: "brainart"
// });

// module.exports = pool;

// const knex = require('knex')({
//   client: 'pg',
//   connection: "postgres://owgcvulacdiwsc:f9e748bb9a44d07f92dad896d2d3b3b4eb884f1e461021349477839854b9c891@ec2-52-202-66-191.compute-1.amazonaws.com:5432/dctve37mt5h3lj"
// });

// module.exports = knex


const { Client } = require('pg');
const connectionString = 'postgres://owgcvulacdiwsc:f9e748bb9a44d07f92dad896d2d3b3b4eb884f1e461021349477839854b9c891@ec2-52-202-66-191.compute-1.amazonaws.com:5432/dctve37mt5h3lj';
const client = new Client({
    connectionString: connectionString,
    ssl: { rejectUnauthorized: false }
});

module.exports = client