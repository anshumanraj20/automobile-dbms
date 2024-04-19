const pool = require('../db');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { supplier_id, plant_id } = req.body;
  
  const insertQuery = `
    INSERT INTO suppliers_plants (supplier_id, plant_id)
    VALUES (?, ?);
  `;

  const values = [supplier_id, plant_id ];

  pool.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error('Error executing query:', err.stack);
      res.status(500).send('Error inserting data into the suppliers_plants table');
    } else {
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    }
  });
});

module.exports = router;
