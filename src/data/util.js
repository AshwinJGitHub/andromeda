const faker = require('faker');
const guid = require('uuid');

// Faker API: https://marak.github.io/faker.js/

const vehicles = [];
const customers = [];
const carData = {
    Honda: ['Civic', 'Accord', 'Passport'],
    Ford: ['F150', 'Mustang', 'Taurus'],
    Tesla: ['Model S', 'Model Y', 'Model 3'],
    Volkswagen: ['Passat', 'Golf'],
    Toyota: ['Camry', 'Prius', 'Corolla'],
    BMW: ['series 1', 'series 2'],
    Porsche: ['Boxter', 'Cayman'],
    Kia: ['Soul', 'Sportage', 'Telluride'],
    Jeep: ['Cherokee', 'Sport', 'Liberty']
};
const colors = ['Red', 'Silver', 'Black', 'Blue', 'Silver'];

function createVehicles(count) {
    for (let i = 1; i < count; i++) {
        for (const make in carData) {
            let models = carData[make];
            vehicles.push({
                id: guid.v4(),
                make: make,
                model: models[Math.floor(Math.random() * models.length)],
                year: Math.floor(Math.random() * (2021 - 2000) + 2000),
                image: 'https://source.unsplash.com/featured/?car,' + models[Math.floor(Math.random() * models.length)] + ',' + make,
                color: colors[Math.floor(Math.random() * colors.length)],
                price: faker.finance.amount(),
                available: true
            });
        }
    }
}

function createCustomers(count) {
    for (let i = 1; i < count; i++) {
        customers.push({
            id: guid.v4(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email()
        })
    }
}

module.exports = {
    vehicles,
    customers,
    createCustomers,
    createVehicles
}