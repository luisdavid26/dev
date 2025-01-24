const SERVER = "http://localhost:5001"; // Asegúrate de que este puerto sea el correcto
let eventos = [];

// Obtener eventos
async function getEventos() {
  try {
    const resp = await fetch(`${SERVER}/eventos`); // promesa fetch
    if (!resp.ok) throw new Error(`Error: ${resp.status} ${resp.statusText}`);
    const json = await resp.json(); // JSON a Objeto
    console.log(json);
    eventos = json.data;
    replaceEventos(); // Llama a la función para mostrar los eventos
  } catch (error) {
    console.error("Fallo en la obtención de eventos:", error);
  }
}

// Insertar evento con Fetch
async function postEvento(evento) {
  const data = {
    name: evento.nombre,
    date: evento.fecha,
    description: evento.descripcion,
    price: evento.precio,
    image: evento.imagen, // Esto será la cadena Base64
  };

  try {
    const resp = await fetch(`${SERVER}/eventos`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json", // Cambia a JSON
      },

      body: JSON.stringify(data), // Convierte el objeto a JSON
    });

    if (!resp.ok) throw new Error(`Error: ${resp.status} ${resp.statusText}`);

    const json = await resp.json(); // JSON a Objeto

    console.log(json);

    eventos.push(json.data); // Agrega el nuevo evento a la lista

    replaceEventos(); // Actualiza la visualización
  } catch (error) {
    console.error("Fallo insertando el evento:", error);
  }
}

// Reemplazar eventos en el DOM
function replaceEventos() {
  const container = document.getElementById("eventsContainer");
  if (!container) {
    console.error("El contenedor de eventos no se encontró.");
    return; // Salir si el contenedor no existe
  }
  container.innerHTML = ''; // Limpiar el contenedor
  eventos.forEach((event) => {
    appendEvento(event, container);
  });
}

// Añadir un evento al DOM
function appendEvento(event, container) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.src = event.image; // Asegúrate de que la propiedad sea correcta
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
getEventos();
// Exportar las funciones para que puedan ser utilizadas en otros archivos
export { getEventos, postEvento };
