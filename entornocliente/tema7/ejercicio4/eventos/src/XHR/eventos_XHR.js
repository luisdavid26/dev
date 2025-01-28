const SERVER = "http://localhost:5001";
let eventos = [];

function getEventos() {
    console.log("obteniendo eventos con XHR");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${SERVER}/eventos`, true); // true para que sea async
  
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        const response = JSON.parse(xhr.responseText);
        eventos = response.data; // guardar los eventos en la variable
        console.log("Eventos obtenidos:", eventos);
        replaceEventos(); // actualizamos la vista
      } else {
        console.error("Error al obtener eventos:", xhr.status, xhr.statusText);
      }
    };
  
    xhr.onerror = function () {
      console.error("fallo al hacer la petición GET.");
    };
  
    xhr.send(); // Enviar la solicitud
  }
  
  
// insertar evento usando XHR
function postEvento(evento) {
    console.log("Insertando evento con XHR...");
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${SERVER}/eventos`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
  
    const data = JSON.stringify({
      name: evento.nombre,
      date: evento.fecha,
      description: evento.descripcion,
      price: evento.precio,
      image: evento.imagen,
    });
  
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        const response = JSON.parse(xhr.responseText);
        console.log("Evento añadido:", response.data);
        eventos.push(response.data); // anyadir el evento al array
        replaceEventos(); // actualizar la vista
      } else {
        console.error("Error al insertar evento:", xhr.status, xhr.statusText);
      }
    };
  
    xhr.onerror = function () {
      console.error("Fallo al hacer la petición POST.");
    };
  
    xhr.send(data); // enviar los datos
  }
  
  

// reemplazar eventos en el DOM
function replaceEventos() {
  const container = document.getElementById("eventsContainer");
  eventos.forEach((event) => {
    appendEvento(event, container);
  });
}


function appendEvento(event, container) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.src = event.image; 
  img.alt = `${event.name} image`;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h4");
  title.classList.add("card-title");
  title.textContent = event.name;

  const desc = document.createElement("p");
  desc.classList.add("card-text");
  desc.textContent = event.description;

  cardBody.appendChild(title);
  cardBody.appendChild(desc);

  const footer = document.createElement("div");
  footer.classList.add("card-footer");

  const small = document.createElement("small");
  small.classList.add("text-muted");
  small.textContent = event.date;

  const priceSpan = document.createElement("span");
  priceSpan.classList.add("float-right");
  priceSpan.textContent = `${event.price} €`;

  footer.appendChild(small);
  footer.appendChild(priceSpan);

  card.appendChild(img);
  card.appendChild(cardBody);
  card.appendChild(footer);

  container.appendChild(card);
}

export { getEventos, postEvento };
