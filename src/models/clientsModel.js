const mongoose = require('mongoose');

// Esquema para el modelo
const clientsSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    gender: String,
    age: Number,
    id: Number
});

const Clients = mongoose.model('clients', clientsSchema);

module.exports = Clients;
