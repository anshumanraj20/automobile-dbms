const pool = require('../db');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { model_id, name, brand_id, price,category } = req.body;
  
  const insertQuery = `
    INSERT INTO models (model_id, name, brand_id, price,category)
    VALUES (?, ?, ?, ?,?);
  `;

  const values = [model_id, name, brand_id, price,category];

  pool.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error('Error executing query:', err.stack);
      res.status(500).send('Error inserting data into the suppliers table');
    } else {
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    }
  });
});

module.exports = router;
