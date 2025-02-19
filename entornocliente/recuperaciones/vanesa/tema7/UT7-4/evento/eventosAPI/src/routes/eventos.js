import express, { raw } from 'express';


const eventosRouter = express.Router();

// Simulación de base de datos de mensajes
let eventos = [];


//--------------------------------------
// Obtener todos los eventos
// * GET
/*
Para obetener todos los registros del diccionario debemos poner:
localhost:8000/eventos
y nos devolvera si hay registros:
{
    "message": "Lista de eventos",
    "data": [
        {
            "id": 1,
            "name": "Concierto de Rock",
            "date": "2024-07-20",
            "description": "Un gran concierto de rock con las mejores bandas.",
            "image": "concierto.jpg",
            "price": 50
        }
    ]
}

si no hay registros:
{
    "message": "Lista de eventos",
    "data": []
}
*/
eventosRouter.get('/', (req, res) => {
    res.json({
        message: 'Lista de eventos',
        data: eventos
    });
});

// Obtener eventos por ID
// * GET
/* Para obetener un registro especifico del diccionario debemos poner:
localhost:8000/eventos/id 
Nos devolvera en el ejemplo de buscar id 2:
{
    "message": "Evento",
    "data": [
        {
            "id": 2,
            "name": "Concierto de Rock",
            "date": "2024-07-20",
            "description": "Un gran concierto de rock con las mejores bandas.",
            "image": "concierto.jpg",
            "price": 50
        }
    ]
}
*/
eventosRouter.get('/:id', (req, res) => {
    const eventoId = parseInt(req.params.id);

    if (eventos.find(evento => evento.id === eventoId)) {
        res.json({
            message: 'Evento',
            data: eventos.filter(evento => evento.id == req.params.id)
        });
    } else {
        res.json({
            message: `Evento con id ${eventoId} no encontrado`
        });
    }
});


// Añadir evento
// * POST
/* Para introducir una palabra y una rima debemos poner un JSON como el siguiente:
{
    "name": "Concierto de Rock",
    "date": "2024-07-20",
    "description": "Un gran concierto de rock con las mejores bandas.",
    "image": "concierto.jpg",
    "price": 50
}

Devolvera:
{
    "message": "Evento añadido con éxito",
    "data": {
        "id": 1,
        "name": "Concierto de Rock",
        "date": "2024-07-20",
        "description": "Un gran concierto de rock con las mejores bandas.",
        "image": "concierto.jpg",
        "price": 50
    }
}
*/
eventosRouter.post('/', (req, res) => {
    const { name, date, description, image, price } = req.body;

    const newevento = {
        id: eventos.length + 1,
        name,
        date,
        description,
        image,
        price
    };

    eventos.push(newevento);

    res.status(201).json({
        message: 'Evento añadido con éxito',
        data: newevento
    });
});

// Borrar eventos por ID
// * DELETE
/* Para eliminar una palabra debemos poner
localhost:8000/eventos/id 
y nos saldra:
{
    "message": "Evento con id 2 eliminado",
    "data": [
        {
            "id": 1,
            "name": "Concierto de Rock",
            "date": "2024-07-20",
            "description": "Un gran concierto de rock con las mejores bandas.",
            "image": "concierto.jpg",
            "price": 50
        }
    ]
}
*/
eventosRouter.delete('/:id', (req, res) => {
    const eventoId = parseInt(req.params.id);
    const initialLength = eventos.length;
    eventos = eventos.filter(evento => evento.id !== eventoId);

    if (eventos.length < initialLength) {
        res.json({
            message: `Evento con id ${eventoId} eliminado`,
            data: eventos
        });
    } else {
        res.status(404).json({
            message: `Evento con id ${eventoId} no encontrado`
        });
    }
});


//--------------------------

eventosRouter.use((req, res, next) => {
    console.log(`Request method: ${req.method}, Request URL: ${req.originalUrl}`);
    next();
});

export default eventosRouter;