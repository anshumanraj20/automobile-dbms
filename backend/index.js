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

app.get('/',(req,res)=>
{
  res.send(['hello']);
})

const showvehicles = require('./fetch/showvehicles');
app.use('/api/showvehicles',showvehicles);

const showcustomers = require('./fetch/showcustomers');
app.use('/api/showcustomers',showcustomers);

const showsuppliers = require('./fetch/showsuppliers');
app.use('/api/showsuppliers',showsuppliers);

const showdealers = require('./fetch/showdealers');
app.use('/api/showdealers',showdealers);

const addvehicles = require('./insert/addvehicles');
app.use('/api/addvehicles',addvehicles);

const addcustomers = require('./insert/addcustomers');
app.use('/api/addcustomers',addcustomers);

const addsuppliers = require('./insert/addsuppliers');
app.use('/api/addsuppliers',addsuppliers);

const deletecustomers = require('./delete/deletecustomers');
app.use('/api/deletecustomers',deletecustomers);


app.listen(3000, () => {
  console.log('app listening on port 3000!');
});