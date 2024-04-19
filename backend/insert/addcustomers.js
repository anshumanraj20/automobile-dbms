const pool = require('../db');
const express = require('express');
const router = express.Router();



// Route to handle inserting data into the customers table
router.post('/', (req, res) => {
  const { customer_id, customer_name, phone, address, gender } = req.body;

  const insertQuery = `
    INSERT INTO customers (customer_id, customer_name, phone, address, gender)
    VALUES (?, ?, ?, ?, ?);
  `;

  const values = [customer_id, customer_name, phone, address, gender];

  pool.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error('Error executing query:', err.stack);
      res.status(500).send('Error inserting data into the customers table');
    } else {
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    }
  });
});

module.exports = router;
