const Clients = require('../models/clientsModel');

// Controlador para gestionar las operaciones
const clientsController = {
    // Obtener todos los clientes
    getAllClients: async (_req, res) => {
        try {
            const clients = await Clients.find();
            res.json(clients);
        } catch (error) {
            console.error('Error al obtener clientes:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Obtener cliente por ID
    getClientById: async (req, res) => {
        const id = req.params;
        try {
            const clientId = await Clients.findOne(id)
            res.json(clientId);
        } catch (error) {
            console.error('Error al obtener cliente:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Obtener cliente por edad
    getClientByAge: async (req, res) => {
        const age = req.params;
        try {
            const clientAge = await Clients.findOne(age)
            res.json(clientAge);
        } catch (error) {
            console.error('Error al obtener cliente:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Obtener cliente por genero
    getClientByGender: async (req, res) => {
        const gender = req.params;
        try {
            const clientGender = await Clients.findOne(gender)
            res.json(clientGender);
        } catch (error) {
            console.error('Error al obtener cliente:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Crear un nuevo cliente
    createClient: async (req, res) => {
        const clientData = req.body;
        console.log(clientData);
        try {
            const newClient = new Clients(clientData);
            const savedClient = await newClient.save();
            res.status(201).json(savedClient);
        } catch (error) {
            console.error('Error al crear cliente:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    register: async (req, res) => {
        try {
            const client = await Clients.find();
            const {name, lastName, email, gender, age} = req.body;
            
            const clientData = {
                id: client.length + 1,
                name: name,
                lastName: lastName,
                email: email,
                gender: gender,
                age: age,
            }
            
            const newClient = new Clients(clientData);
            const savedClient = await newClient.save();
            res.status(201).json(`${savedClient} Creado Exitosamenre`)
        
        } catch (error) {
            console.error('Error al registrar cliente:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Actualizar un cliente existente
    updateClient: async (req, res) => {
        try {
            const {id} = req.params;
            const clientUpdate = await Clients.findOneAndUpdate({id: id}, {$set: {name: 'cliente 3'}});
            res.json(clientUpdate)
        } catch (error) {
            console.error('Error al actualizar cliente:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Eliminar un cliente existente
    deleteClient: async (req, res) => {
        try {
            const {id} = req.params;
            const deletedClient = await Clients.findOneAndDelete({id: id});
            res.json(deletedClient);
        } catch (error) {
            console.error('Error al eliminar cliente:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};

module.exports = clientsController;
