const pool = require('../db');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM customers`, (err, results) => {
        res.send(results);
    });
});

module.exports = router;