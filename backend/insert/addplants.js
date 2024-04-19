const pool = require('../db');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { plant_id, plant_name, plant_address } = req.body;
  
  const insertQuery = `
    INSERT INTO plants (plant_id, plant_name, plant_address)
    VALUES (?, ?, ?);
  `;

  const values = [plant_id, plant_name, plant_address];

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
