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

app.get('/', (req, res) => {
  res.send(['hello']);
})

const showvehicles = require('./fetch/showvehicles');
app.use('/api/showvehicles', showvehicles);

const showcustomers = require('./fetch/showcustomers');
app.use('/api/showcustomers', showcustomers);

const showsuppliers = require('./fetch/showsuppliers');
app.use('/api/showsuppliers', showsuppliers);

const showdealers = require('./fetch/showdealers');
app.use('/api/showdealers', showdealers);

const showbrands = require('./fetch/showbrands');
app.use('/api/showbrands', showbrands);

const showsales = require('./fetch/showsales');
app.use('/api/showsales', showsales);

const showplants = require('./fetch/showplants');
app.use('/api/showplants', showplants);

const showmodels = require('./fetch/showmodels');
app.use('/api/showmodels', showmodels);




const addvehicles = require('./insert/addvehicles');
app.use('/api/addvehicles', addvehicles);

const addcustomers = require('./insert/addcustomers');
app.use('/api/addcustomers', addcustomers);

const addsuppliers = require('./insert/addsuppliers');
app.use('/api/addsuppliers', addsuppliers);

const addmodels = require('./insert/addmodels');
app.use('/api/addmodels', addmodels);

const addplants = require('./insert/addplants');
app.use('/api/addplants', addplants);

const addbrands = require('./insert/addbrands');
app.use('/api/addbrands', addbrands);

const addsales = require('./insert/addsales');
app.use('/api/addsales', addsales);

const addsuppliersplants = require('./insert/addsuppliersplants');
app.use('/api/addsuppliersplants', addsuppliersplants);

// const addsuppliers = require('./insert/addsuppliers');
// app.use('/api/addsuppliers',addsuppliers);

// const addsuppliers = require('./insert/addsuppliers');
// app.use('/api/addsuppliers',addsuppliers);

// const addsuppliers = require('./insert/addsuppliers');
// app.use('/api/addsuppliers',addsuppliers);


app.listen(3000, () => {
  console.log('app listening on port 3000!');
});