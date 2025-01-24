import { postEvento } from "./src/async/eventos_async.js";

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formuadd");

  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();
    let esvalido = true;

    // Obtener los valores de los campos dentro del evento submit
    const camponombre = document.getElementById("name");
    const campofecha = document.getElementById("date");
    const campodesc = document.getElementById("description");
    const campoprecio = document.getElementById("price");
    const campoimagen = document.getElementById("image").files[0]; // Obtener el archivo seleccionado

    const tipospermi = ["image/jpeg", "image/png", "image/gif", "image/jpg"];
    const fechaReg = /^\d{4}-\d{2}-\d{2}$/;
    const nombreReg = /^[A-Za-z ]{1,}$/; // Permitir espacios en el nombre
    const descReg = /^[A-Za-z0-9 ]{1,}$/; // Permitir espacios en la descripción

    // Validaciones
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

    //if (!campoimagen || !tipospermi.includes(campoimagen.type)) {
    //  campoimagen.classList.add("is-invalid");
    //  campoimagen.classList.remove("is-valid");
    //  esvalido = false;
    //} else {
    //  campoimagen.classList.add("is-valid");
    //  campoimagen.classList.remove("is-invalid");
    //}

    if (esvalido) {
      // Convertir la imagen a Base64
      const reader = new FileReader();
      reader.onloadend = async () => {
        const nuevoEvento = {
          nombre: camponombre.value, // Usar el valor del campo
          fecha: campofecha.value, // Usar el valor del campo
          descripcion: campodesc.value, // Usar el valor del campo
          precio: campoprecio.value, // Usar el valor del campo
          imagen: reader.result, // Esto será la cadena Base64
        };

        // Llama a la función para añadir el evento
        await postEvento(nuevoEvento);
        location.assign("index.html"); // Redirigir a la página de listado de eventos
      };

      if (campoimagen) {
        reader.readAsDataURL(campoimagen); // Leer la imagen como Base64
      } else {
        console.error("No se ha seleccionado ninguna imagen.");
      }
    }
  });
});