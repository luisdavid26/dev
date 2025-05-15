"use strict";

import { Eventos } from "./evento.class.js";

//array para guardar los eventos
let eventData = [];

function agregarEventos(name, date, description, image, price) {
    let eventoNuevo = new Eventos({
        name,
        date,
        description,
        image,
        price,
    });

    eventData.push(eventoNuevo);
    
    return eventoNuevo;
}

export { eventData, agregarEventos };
