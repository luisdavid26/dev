import {} from 'dotenv/config';
import express from 'express';
import cors from 'cors'; // Asegúrate de importar cors
import bodyParser from 'body-parser';
import eventosRouter from './routes/eventos.js';

const app = express();
const port = process.env.PORT || 8000;

//-- Middlewares Globales
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Montamos las rutas para "/eventos"
app.use('/eventos', eventosRouter);

// Middleware de manejo de errores centralizado
app.use((err, req, res, next) => {
  console.error(err.stack); // Mostrar el error en la consola
  res.status(err.status || 500).json({
    message: err.message || "Error interno del servidor",
    error: process.env.NODE_ENV === "production" ? {} : err, // No exponer detalles de error en producción
  });
});

//-- Iniciar el servidor
export default app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto: ${port}`);
});
