const mongoose = require('mongoose');

// Esquema para el modelo
const booksSchema = new mongoose.Schema({
    name: String,
    author: String,
    pages: Number,
    description: String,
    id: Number
});

const Books = mongoose.model('books', booksSchema);

module.exports = Books;
