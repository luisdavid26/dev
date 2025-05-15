const SERVER = 'http://localhost:8000';
let eventos = [];

// Petición GET con XHR
function getEventos() {
    // 1. Creamos la instancia del objeto
    const xhr = new XMLHttpRequest();
    // 2. Establecemos la comunicación con el servidor 
    //    Método GET:
    xhr.open('GET', `${SERVER}/eventos`, true);
    // 3. Enviamos la petición al servidor
    xhr.send();

    // 4. Ponemos una escucha al objeto
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const json = JSON.parse(xhr.responseText); // JSON a Objeto -- CALLBACK
                console.log(json);

                eventos = json.data;
                replaceEvents();
            } else {
                console.error("Fallo en la obtención de eventos:", xhr.statusText);
            }
        }
    };
}

/**
 * Gestión DOM
 */
function replaceEvents() {
    let container = document.querySelector("#eventsContainer");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    eventos.forEach(e => {
        appendEvent(e, container);
    });

}

function appendEvent(e, container) {
    //----- CARD
    let card = document.createElement("div");
    card.classList.add("card");

    //imagen
    let imagen = document.createElement("img");
    imagen.src = e.image;
    imagen.classList.add("card-img-top");

    //----- CARD BODY
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    //nombre
    let h4Nombre = document.createElement("h4");
    h4Nombre.textContent = e.name;
    h4Nombre.classList.add("card-title");

    //descripcion
    let pDescripcion = document.createElement("p");
    pDescripcion.textContent = e.description;
    pDescripcion.classList.add("card-text");

    cardBody.append(h4Nombre, pDescripcion);

    //----- CARD FOOTER
    let cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    //fecha
    let samllFecha = document.createElement("small");
    samllFecha.textContent = e.date;
    samllFecha.classList.add("text-muted");

    //precio
    let spanPrecio = document.createElement("span");
    spanPrecio.textContent = e.price + "€";
    spanPrecio.classList.add("float-right");

    cardFooter.append(samllFecha, spanPrecio);

    //añadir las coasas a la card
    card.append(imagen, cardBody, cardFooter);
    container.append(card);
}

// Llama a la función para obtener y mostrar los eventos
document.addEventListener("DOMContentLoaded", getEventos);

getEventos();
