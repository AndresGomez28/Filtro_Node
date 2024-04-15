const Books = require('../models/booksModel');

// Controlador para gestionar las operaciones
const booksController = {
    // Obtener todos los libros
    getAllBooks: async (_req, res) => {
        try {
            const books = await Books.find();
            res.json(books);
        } catch (error) {
            console.error('Error al obtener libros:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Obtener libro por ID
    getBookById: async (req, res) => {
        const id = req.params;
        try {
            const bookId = await Books.findOne(id)
            res.json(bookId);
        } catch (error) {
            console.error('Error al obtener libro:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Obtener libro por paginas
    getBookByPages: async (req, res) => {
        const pages = req.params;
        try {
            const bookPages = await Books.findOne(pages)
            res.json(bookPages);
        } catch (error) {
            console.error('Error al obtener libro:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    
    // Obtener libro por autor
    getBookByAuthor: async (req, res) => {
        const author = req.params;
        try {
            const bookAuthor = await Books.findOne(author)
            res.json(bookAuthor);
        } catch (error) {
            console.error('Error al obtener libro:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Crear un nuevo libro
    createBook: async (req, res) => {
        const bookData = req.body;
        console.log(bookData);
        try {
            const newBook = new Books(bookData);
            const savedBook = await newBook.save();
            res.status(201).json(savedBook);
        } catch (error) {
            console.error('Error al crear libro:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    register: async (req, res) => {
        try {
            const book = await Books.find();
            const {name, author, pages, description} = req.body;
            
            const bookData = {
                id: book.length + 1,
                name: name,
                author: author,
                pages: pages,
                description: description,
            }
            
            const newBook = new Books(bookData);
            const savedBook = await newBook.save();
            res.status(201).json(`${savedBook} Creado Exitosamenre`)
        
        } catch (error) {
            console.error('Error al registrar libro:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Actualizar un libro existente
    updateBook: async (req, res) => {
        try {
            const {id} = req.params;
            const bookUpdate = await Books.findOneAndUpdate({id: id}, {$set: {name: 'Librito'}});
            res.json(bookUpdate)
        } catch (error) {
            console.error('Error al actualizar libro:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Eliminar un libro existente
    deleteBook: async (req, res) => {
        try {
            const {id} = req.params;
            const deletedBook = await Books.findOneAndDelete({id: id});
            res.json(deletedBook);
        } catch (error) {
            console.error('Error al eliminar libro:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};

module.exports = booksController;
