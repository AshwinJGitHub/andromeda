const express = require('express');
const expr = express();
const cors = require('cors');
// const jwt = require('express-jwt');
const port = 5000;

const utils = require('./util');
expr.use(cors());

utils.createCustomers(25)
utils.createVehicles(50) // creates them in groups of 12 (ex. 50 * 12 = 600)

const newCustomers = [];

expr.get('/', (req, res) => res.send('Car Dealership API ready!'));

expr.get('/api/vehicles', (req, res) => {
    res.json(utils.vehicles);
});

expr.get('/api/vehicles/:id', (req, res) => {
    res.json(utils.vehicles.filter((v) => v.id === req.params.id)[0]);
});

expr.get('/api/customers', (req, res) => {
    res.json(utils.customers + newCustomers);
});

expr.post('/api/customers/:id', (req, res) => {
    const allCustomers = utils.customers + newCustomers;
    res.json(allCustomers.filter((c) => c.id === req.params.id)[0]);
});

expr.post('/api/login', (req, res) => {
    res.json({ token: '1234567890'})
});

expr.post('/api/signup', (req, res) => {
    const customer = req.body;
    customer.id = Math.floor(Math.random() * 2000) + 500;
    newCustomers.push(customer);
    res.json({ token: customer.id })
});

expr.post('/api/token', (req, res) => {
    res.json({ token: '1234567890'})
});

expr.listen(port, () => console.log(`Car Dealership API listening on port ${port}!`));

module.exports = expr;