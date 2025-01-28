import {} from 'dotenv/config';
import express from 'express';
import cors from 'cors'; 
import bodyParser from 'body-parser';
import diccionariosRoutes from './routes/diccionario.js';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true }));
//--
app.use('/diccionarios', diccionariosRoutes);


// Ruta básica
app.get('/', (req, res) => {
  res.send('¡Hola mundo, desde Express!');
});

export default app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
