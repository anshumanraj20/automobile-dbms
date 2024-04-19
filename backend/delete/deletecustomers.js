const pool = require('../db');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { customer_id } = req.body;
  
  const insertQuery = `
    DELETE From customers where (?=?)
  `;

  const values = [customer_id,customer_id];

  pool.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error('Error executing query:', err.stack);
      res.status(500).send('Error inserting data into the suppliers table');
    } else {
      console.log('Data deleted successfully');
      res.status(200).send('Data deleted successfully');
    }
  });
});

module.exports = router;
