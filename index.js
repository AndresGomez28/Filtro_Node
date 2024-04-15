const express = require('express');
const bodyParser = require('body-parser')
const connectDB = require('./src/config/db');
const routes = require('./src/routes/index');

const app = express();
const port = 3000;

// Conecta a la base de datos MongoDB
connectDB();

// Middleware para analizar solicitudes JSON y codificadas en URL
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configura las rutas para libros y clientes
app.use('/', routes);

// Iniciar el servidor en el puerto asignado
app.listen(port, () => {
    console.log(`Serverrunning on port ${port}`);
});
