const pool = require('../db');
const express = require('express');
const router = express.Router();



// Route to handle inserting data into the customers table
router.post('/', (req, res) => {
  const { brand_id, name } = req.body;

  const insertQuery = `
    INSERT INTO brands (brand_id, name)
    VALUES (?, ?);
  `;

  const values = [brand_id, name];

  pool.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error('Error executing query:', err.stack);
      res.status(500).send('Error inserting data into the brands table');
    } else {
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    }
  });
});

module.exports = router;
