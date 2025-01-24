import express from 'express';

// Almacenamiento temporal de eventos
let eventos = [];

const eventRouter = express.Router();

// Añadir evento
eventRouter.post('/', (req, res) => {
  // Asegúrate de que estos campos estén en el cuerpo de la solicitud
  const { name, date, description, price ,image} = req.body; 
  // Verifica que todos los campos necesarios estén presentes
  if (!name || !date || !description || !price || !image) {
    return res.status(400).json({ message: 'Todos los campos son requeridos.' });
  }

  const newEvent = {
    id: eventos.length + 1,
    name,
    date,
    description,
    price,
    image
  };

  eventos.push(newEvent);
  console.log(eventos); // Verifica que el evento se haya añadido correctamente

  res.status(201).json({
    message: 'Evento añadido con éxito',
    data: newEvent
  });
});

// Obtener todos los eventos
eventRouter.get('/', (req, res) => {
  res.json({
    message: 'Lista de eventos',
    data: eventos
  });
});

// Obtener evento por ID
eventRouter.get('/:id', (req, res) => {
  const eventId = parseInt(req.params.id);
  
  const event = eventos.find(event => event.id === eventId);
  if (event) {
    res.json({
      message: 'Evento encontrado',
      data: event
    });
  } else {
    res.status(404).json({
      message: `Evento con id ${eventId} no encontrado`
    });
  }
});

// Borrar evento por ID
eventRouter.delete('/:id', (req, res) => {
  const eventId = parseInt(req.params.id);
  const initialLength = eventos.length;
  eventos = eventos.filter(event => event.id !== eventId);

  if (eventos.length < initialLength) {
    res.json({
      message: `Evento con id ${eventId} eliminado`,
      data: eventos
    });
  } else {
    res.status(404).json({
      message: `Evento con id ${eventId} no encontrado`
    });
  }
});

export default eventRouter;
export { eventos };