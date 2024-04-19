const pool = require('../db');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // const vin = Math.floor(100000000 + Math.random() * 900000000).toString(); 
  const {vin, color, manufacture_date, model_id, plant_id, supplier_id } = req.body;
  
  const insertQuery = `
    INSERT INTO vehicles (vin, color, manufacture_date, model_id, plant_id, supplier_id)
    VALUES (?, ?, ?, ?, ?, ?);
  `;

  const values = [vin, color, manufacture_date, model_id, plant_id, supplier_id];

  pool.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error('Error executing query:', err.stack);
      res.status(500).send('Error inserting data into the vehicles table');
    } else {
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    }
  });
});

module.exports = router;
