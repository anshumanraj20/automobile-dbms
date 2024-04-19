const pool = require('../db');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { dealer_id, dealer_name, phone_no, dealer_address,gender } = req.body;
  
  const insertQuery = `
    INSERT INTO dealers (dealer_id, dealer_name, phone_no, dealer_address,gender)
    VALUES (?, ?, ?, ?,?);
  `;

  const values = [dealer_id, dealer_name, phone_no, dealer_address,gender];

  pool.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error('Error executing query:', err.stack);
      res.status(500).send('Error inserting data into the dealers table');
    } else {
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    }
  });
});

module.exports = router;
