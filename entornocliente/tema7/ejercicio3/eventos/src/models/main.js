import { Eventos } from "./evento.class.js";
import { addEvent, getEvents } from "./events.js";

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");
  const camponombre = document.getElementById("name");
  const campofecha = document.getElementById("date");
  const campodesc = document.getElementById("description");
  const campoprecio = document.getElementById("price");
  const campoimagen = document.getElementById("image");
  const campocarg = document.getElementById("tarjeta");

  const tiposPermitidos = ["image/jpeg", "image/png", "image/gif", "image/jpg"];
  const nombreReg = /^[A-Za-z\s]+$/;
  const descReg = /^[A-Za-z0-9\s.,]+$/;

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let esValido = true;

    // Validaciones de los campos
    if (!camponombre.value || !nombreReg.test(camponombre.value)) {
      camponombre.classList.add("is-invalid");
      esValido = false;
    } else {
      camponombre.classList.remove("is-invalid");
    }

    if (!campofecha.value) {
      campofecha.classList.add("is-invalid");
      esValido = false;
    } else {
      campofecha.classList.remove("is-invalid");
    }

    if (!campodesc.value || !descReg.test(campodesc.value)) {
      campodesc.classList.add("is-invalid");
      esValido = false;
    } else {
      campodesc.classList.remove("is-invalid");
    }

    if (!campoprecio.value || campoprecio.value <= 0) {
      campoprecio.classList.add("is-invalid");
      esValido = false;
    } else {
      campoprecio.classList.remove("is-invalid");
    }

    if (
      !campoimagen.files[0] ||
      !tiposPermitidos.includes(campoimagen.files[0].type)
    ) {
      campoimagen.classList.add("is-invalid");
      esValido = false;
    } else {
      campoimagen.classList.remove("is-invalid");
    }

    // Si todos los campos son validos
    if (esValido) {
      const newEvent = new Eventos({
        id: Date.now(),
        name: camponombre.value,
        date: campofecha.value,
        description: campodesc.value,
        image: URL.createObjectURL(campoimagen.files[0]),
        price: parseFloat(campoprecio.value),
      });

      addEvent(newEvent);
      renderEvents();
      formulario.reset();
    }
  });

  async function renderEvents() {// lo hacemos asincrono para que pueda esperar a que se cargue
    const events = await getEvents();

    while (campocarg.firstChild) {
      campocarg.removeChild(campocarg.firstChild);
    }

    events.forEach((event) => {
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

      campocarg.appendChild(card);
    });
  }
});
