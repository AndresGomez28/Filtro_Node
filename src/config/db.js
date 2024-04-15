const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;
let clients
let books

const connectDatabase = async () => {
    try {
        if (!clients) {
            clients = mongoose.model('clients', require('../models/clientsModel').schema);
        }
        if (!books) {
            books = mongoose.model('books', require('../models/booksModel').schema);
        }
        await mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('conected to MongoDB'))
        .catch((err) => console.log(err));
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDatabase;
