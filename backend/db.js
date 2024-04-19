const { createPool } = require('mysql');
require('dotenv').config();

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD,
    database: 'automobile',
    connectionLimit: 10
});

pool.query(`SELECT * FROM brands`, (err, results) => {
    if (err) {
        return console.log("ERROR:->", err);
    }
    return console.log(results);
});

module.exports = pool;
