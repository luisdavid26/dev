import { postEvento } from "./src/async/eventos_async.js";

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formuadd");

  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();
    let esvalido = true;

    // obtener los valores de los campos dentro del evento submit
    const camponombre = document.getElementById("name");
    const campofecha = document.getElementById("date");
    const campodesc = document.getElementById("description");
    const campoprecio = document.getElementById("price");
    const campoimageninput = document.getElementById("image"); 
    const campoimagen = campoimageninput.files[0]; 
    const tipospermi = ["image/jpeg", "image/png", "image/gif", "image/jpg"];
    const fechaReg = /^\d{4}-\d{2}-\d{2}$/;
    const nombreReg = /^[A-Za-z ]{1,}$/;
    const descReg = /^[A-Za-z0-9 .,;:!?()\n]{1,}$/;
    // validaciones
    if (!camponombre.value || !nombreReg.test(camponombre.value)) {
      camponombre.classList.add("is-invalid");
      camponombre.classList.remove("is-valid");
      esvalido = false;
    } else {
      camponombre.classList.add("is-valid");
      camponombre.classList.remove("is-invalid");
    }

    if (!campofecha.value || !fechaReg.test(campofecha.value)) {
      campofecha.classList.add("is-invalid");
      campofecha.classList.remove("is-valid");
      esvalido = false;
    } else {
      campofecha.classList.add("is-valid");
      campofecha.classList.remove("is-invalid");
    }

    if (!campodesc.value || !descReg.test(campodesc.value)) {
      campodesc.classList.add("is-invalid");
      campodesc.classList.remove("is-valid");
      esvalido = false;
    } else {
      campodesc.classList.add("is-valid");
      campodesc.classList.remove("is-invalid");
    }

    if (!campoprecio.value) {
      campoprecio.classList.add("is-invalid");
      campoprecio.classList.remove("is-valid");
      esvalido = false;
    } else {
      campoprecio.classList.add("is-valid");
      campoprecio.classList.remove("is-invalid");
    }

    if (!campoimagen || !tipospermi.includes(campoimagen.type)) {
      campoimageninput.classList.add("is-invalid");
      campoimageninput.classList.remove("is-valid");
      esvalido = false;
    } else {
      campoimageninput.classList.add("is-valid");
      campoimageninput.classList.remove("is-invalid");
    }

    if (esvalido) {
      // convertir la imagen a base64
      const reader = new FileReader();
      reader.onloadend = async () => {
        const nuevoEvento = {
          nombre: camponombre.value, 
          fecha: campofecha.value, 
          descripcion: campodesc.value, 
          precio: campoprecio.value, 
          imagen: reader.result, // esto sera la cadena base64
        };

        // Llama a la funcion para anyadir el evento
        await postEvento(nuevoEvento);
        location.assign("index.html");
      };

      if (campoimagen) {
        reader.readAsDataURL(campoimagen); // leer la imagen como base64
      } else {
        console.error("no se ha seleccionado ninguna imagen.");
      }
    }
  });
});