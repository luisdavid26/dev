const SERVER = "http://localhost:5001"; 
let eventos = [];

// obtener eventos
async function getEventos() {
  console.log("obteniendo eventos async");
  try {
    const resp = await fetch(`${SERVER}/eventos`); // promesa fetch
    if (!resp.ok) throw new Error(`Error: ${resp.status} ${resp.statusText}`);
    const json = await resp.json(); // JSON a Objeto
    eventos = json.data;
    replaceEventos(); // llama a la funcion para mostrar los eventos
  } catch (error) {
    console.error("fallo al obtener eventos:", error);
  }
}

// insertar evento con Fetch
async function postEvento(evento) {
  console.log("insertando evento async");
  const data = {
    name: evento.nombre,
    date: evento.fecha,
    description: evento.descripcion,
    price: evento.precio,
    image: evento.imagen,
  };

  try {
    const resp = await fetch(`${SERVER}/eventos`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json", // cambia a JSON
      },

      body: JSON.stringify(data), // convierte el objeto a JSON
    });

    if (!resp.ok) throw new Error(`Error: ${resp.status} ${resp.statusText}`);

    const json = await resp.json(); // JSON a objeto


    eventos.push(json.data); // agrega el nuevo evento a la lista
    console.log("Evento anyadido:", json.data);
    replaceEventos(); // Actualiza la vista
  } catch (error) {
    console.error("fallo insertando el evento:", error);
  }
}

// reemplazar eventos en el DOM
function replaceEventos() {
  const container = document.getElementById("eventsContainer") ;
  eventos.forEach((event) => {
    appendEvento(event, container);
  });
}

// Anyadir un evento al DOM
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
