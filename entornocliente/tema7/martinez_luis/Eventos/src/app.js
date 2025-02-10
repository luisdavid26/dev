import {} from 'dotenv/config'; // acceso a .env
import express from 'express';
import cors from 'cors';

import { connectDB } from '../src/config/db.js';
import userRouter from '../src/routes/users.js';
import authRouter from '../src/routes/auth.js';
import eventoRouter from '../src/routes/eventos.js';

import Evento from '../src/models/eventos.js';
import User from '../src/models/user.js';
import mongoose from 'mongoose';

const { Types: { ObjectId } } = mongoose;

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a la BBDD
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
  req.context = { models: { Evento, User }, ObjectId };
  next();
});

// Definición de las rutas del proceso de Autenticación
app.use('/auth', authRouter);

// Definición de las rutas de la información accesible a los usuarios autenticados
app.use("/users", userRouter);

// Definición de las rutas de la información accesible de los productos
app.use("/eventos", eventoRouter);

// Middleware de manejo de errores centralizado
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Error interno del servidor',
    error: process.env.NODE_ENV === 'production' ? {} : err,
  });
});

//-- 

// Punto de entrada al servidor
app.get("/", (req, res) => {
  res.send("¡Hola mundo, desde Express!");
});

// Puerto de escucha
export default app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
