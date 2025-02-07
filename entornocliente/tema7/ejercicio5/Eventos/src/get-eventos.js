import getAllEvents from "../src/controllers/eventos.js";
let eventos = [];
//recogemos todos los eventos y los mostramos en el index
async function getEventos() {
    try {
      const response = await getAllEvents();
      console.log(response); 
      eventos = response.data; 
      replaceEventos(); 
    } catch (error) {
      console.error("Error al obtener los eventos:", error);
    }
  }
  
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
getEventos();
