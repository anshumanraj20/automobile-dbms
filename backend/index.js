const express = require('express');
const app = express();
const pool = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions = {
  origin: ['http://localhost:5173']
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const showbrands = require('./fetch/showbrands');
app.use('/api/showbrands',showbrands);

const showcustomers = require('./fetch/showcustomers');
app.use('/api/showcustomers',showcustomers);

const showsuppliers = require('./fetch/showsuppliers');
app.use('/api/showcustomers',showsuppliers);

const showdealers = require('./fetch/showdealers');
app.use('/api/showdealers',showdealers);

const addvehicles = require('./insert/addvehicles');
app.use('/api/addvehicles',addvehicles);

const addcustomers = require('./insert/addcustomers');
app.use('/api/addcustomers',addcustomers);

const addsuppliers = require('./insert/addsuppliers');
app.use('/api/addsuppliers',addsuppliers);

app.listen(3000, () => {
  console.log('app listening on port 3000!');
});