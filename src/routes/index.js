const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');
const clientsController = require('../controllers/clientsController');

// Rutas para Libros
router.get('/api/v1/books', booksController.getAllBooks);
router.get('/api/v1/books/id/:id', booksController.getBookById);
router.get('/api/v1/books/pages/:pages', booksController.getBookByPages);
router.get('/api/v1/books/author/:author', booksController.getBookByAuthor);
router.post('/api/v1/books/create', booksController.createBook);
router.post('/api/v1/books/register', booksController.register);
router.patch('/api/v1/books/update/:id', booksController.updateBook);
router.delete('/api/v1/books/delete/:id', booksController.deleteBook);

// Rutas para clientes
router.get('/api/v1/clients', clientsController.getAllClients);
router.get('/api/v1/clients/id/:id', clientsController.getClientById);
router.get('/api/v1/clients/age/:age', clientsController.getClientByAge);
router.get('/api/v1/clients/gender/:gender', clientsController.getClientByGender);
router.post('/api/v1/clients/create', clientsController.createClient);
router.post('/api/v1/clients/register', clientsController.register);
router.patch('/api/v1/clients/update/:id', clientsController.updateClient);
router.delete('/api/v1/clients/delete/:id', clientsController.deleteClient);

module.exports = router;