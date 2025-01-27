import {} from 'dotenv/config'; // acceso a .env
import express from 'express';
import cors from 'cors';

import { connectDB } from './config/db.js';
import userRouter from './routes/user.js';
import authRouter from './routes/auth.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a la BBDD
connectDB();

// Habilitando CORS para todas las solicitudes
// cualquier dominio podrá acceder a los recursos
// app.use(cors());
app.use(cors({
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
app.use(express.json()); // Permite trabajar con JSON en las solicitudes

// Definición de las rutas del proceso de Autenticación
app.use('/auth', authRouter);

// Definición de las rutas de la información accesible a los usuarios autenticados
app.use("/user", userRouter);

// Punto de entrada al servidor
app.get("/", (req, res) => {
  res.send("¡Hola mundo, desde Express!");
});

// Puerto de escucha
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
