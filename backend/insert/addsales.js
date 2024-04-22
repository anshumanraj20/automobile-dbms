const pool = require('../db');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { sales_id, sale_date, dealer_id, customer_id, selling_price,vin } = req.body;

  const insertQuery = `
    INSERT INTO sales (sales_id, sale_date, dealer_id, customer_id, selling_price, vin)
    VALUES (?, ?, ?, ?, ?,?);
  `;

  const values = [sales_id, sale_date, dealer_id, customer_id, selling_price,vin];

  pool.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error('Error executing query:', err.stack);
      res.status(500).send('Error inserting data into the sales table');
    } else {
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    }
  });
});

module.exports = router;
