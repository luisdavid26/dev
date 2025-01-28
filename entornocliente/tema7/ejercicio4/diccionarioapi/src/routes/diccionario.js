import express from 'express';

// Almacenamiento temporal de diccionarios
let diccionarios = [];

const diccRouter = express.Router();

// Añadir dicco
diccRouter.post('/', (req, res) => {
  // Asegúrate de que estos campos estén en el cuerpo de la solicitud
  const { palabra, rimas} = req.body; 
  // Verifica que todos los campos necesarios estén presentes
  if (!palabra || !rimas) {
    return res.status(400).json({ message: 'Todos los campos son requeridos.' });
  }

  const newdicc = {
    id: diccionarios.length + 1,
    palabra,
    rimas,
  };

  diccionarios.push(newdicc);
  console.log(diccionarios); 

  res.status(201).json({
    message: 'diccionario añadido con éxito',
    data: newdicc
  });
});

// Obtener todos los diccionarios
diccRouter.get('/', (req, res) => {
  res.json({
    message: 'Lista de diccionarios',
    data: diccionarios
  });
});

// Obtener dicco por ID
diccRouter.get('/:id', (req, res) => {
  const diccId = parseInt(req.params.id);
  
  const dicc = diccionarios.find(dicc => dicc.id === diccId);
  if (dicc) {
    res.json({
      message: 'diccionario encontrado',
      data: dicc
    });
  } else {
    res.status(404).json({
      message: `diccionario con id ${diccId} no encontrado`
    });
  }
});

// Borrar dicco por ID
diccRouter.delete('/:id', (req, res) => {
  const diccId = parseInt(req.params.id);
  const initialLength = diccionarios.length;
  diccionarios = diccionarios.filter(dicc => dicc.id !== diccId);

  if (diccionarios.length < initialLength) {
    res.json({
      message: `diccionario con id ${diccId} eliminado`,
      data: diccionarios
    });
  } else {
    res.status(404).json({
      message: `diccionario con id ${diccId} no encontrado`
    });
  }
});

export default diccRouter;
export { diccionarios };