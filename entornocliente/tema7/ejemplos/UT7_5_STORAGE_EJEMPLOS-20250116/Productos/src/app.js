import {} from 'dotenv/config';
import express from 'express';
import cors from 'cors'; // Asegúrate de importar cors

import { connectDB } from './config/db.js';
import productoRouter from './routes/productos.js';

import Producto from './models/productos.js';
import mongoose from 'mongoose';
const { Types: { ObjectId } } = mongoose;

const app = express();
const PORT = process.env.PORT || 3000;

//-- Conexión con la BBDD
connectDB();

//-- Middlewares globales

// Habilitando CORS para todas las solicitudes
// cualquier dominio podrá acceder a los recursos
// app.use(cors());
app.use(cors({
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

// app.use(express.json()); // Permite trabajar con JSON en las solicitudes
// problema limitación url -- imágenes
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true })); // Soporta datos codificados en URL

// Middleware para inyectar el modelo en las rutas
app.use((req, res, next) => {
  req.context = { models: { Producto }, ObjectId };
  next();
});

// Definición de las rutas de la información accesible de los productos
app.use("/productos", productoRouter);

// Middleware de manejo de errores centralizado
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Error interno del servidor',
    error: process.env.NODE_ENV === 'production' ? {} : err,
  });
});

//-- 

// Ruta básica servidor
app.get('/', (req, res) => {
  res.send('¡Hola mundo, desde Express!');
});

export default app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto: ${PORT}`);
});



