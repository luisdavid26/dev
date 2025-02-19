import {Diccionario} from "./model/diccionario.class.js";

"use strict";

let diccionario = new Diccionario();

//elementos del HTML
let formulario = document.getElementsByTagName("form")[0];

let palabra = document.getElementById("palabra");
let rima = document.getElementById("rima");
let bloquePalabra = document.getElementById("bloquePalabra");
let bloqueRima = document.getElementById("bloqueRima");

let desplegablePalabras = document.getElementById("desplegablePalabras");
let desplegableRimas = document.getElementById("desplegableRimas");
let selectPalabras = document.getElementById("selectPalabras");
let selectRimas = document.getElementById("selectRimas");

let error = document.getElementById("error");
let correcto = document.getElementById("correcto");

let bAgregarRima = document.getElementById("bAgregarRima");
let bObtenerRimas = document.getElementById("bObtenerRimas");
let bEliminarRima = document.getElementById("bEliminarRima");
let bEliminarPalabra = document.getElementById("bEliminarPalabra");
let bDiccionario = document.getElementById("bDiccionario");

let cardMostrar = document.getElementById("cardMostrar");
let cardMostrarTitulo = document.getElementById("cardMostrarTitulo");
let cardMostrarText = document.getElementById("CardMostrarText");

//!------------------------------------------------------------------------------------------------------------
// Evento para agregar una rima
bAgregarRima.addEventListener("click", (e) => {
  // previene el envio del formulario
  e.preventDefault();

  //funcion para ocultar vistas
  eliminarVistas();

  //motrar elementos segun sean necesarios
  formulario.classList.remove("d-none");
  bloquePalabra.classList.remove("d-none");
  bloqueRima.classList.remove("d-none");

  //si los campos estan vacios
  if (!palabra.value.trim() || !rima.value.trim()) {
    //mostramos un mensaje de error
    error.textContent = "⚠ Por favor, completa ambos campos";
    error.classList.remove("d-none");
  }
  //si no estan vacios
  else {
    // Validar que los campos solo tengan letras y espacios
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;

    if (!regex.test(palabra.value) || !regex.test(rima.value)) {
      error.textContent = "⚠ Los campos solo pueden contener letras y espacios.";
      error.classList.remove("d-none");
      return;
    }

    //funcion para agregar la rima al diccioanrio
    let mensaje = diccionario.agregarRima(palabra.value, rima.value);

    //si la rima se ha agregado
    if (mensaje.includes("Rima agregada correctamente")) {
      //muestra un mensaje
      correcto.textContent = "✅ Rima " + rima.value + " agregada a la palabra " + palabra.value;
      correcto.classList.remove("d-none");
    }
    else {
      //si existe se muesta un mensaje de error
      error.textContent = "⚠" + mensaje;
      error.classList.remove("d-none");
    }

    //limpiamos los campos de entrada
    palabra.value = "";
    rima.value = "";
  }
});

//!------------------------------------------------------------------------------------------------------------
// Evento para obtener rimas de una palabra
bObtenerRimas.addEventListener("click", (e) => {
  // previene el envio del formulario
  e.preventDefault();

  //funcion para ocultar vistas
  eliminarVistas();

  //motrar elementos segun sean necesarios
  formulario.classList.remove("d-none");
  desplegablePalabras.classList.remove("d-none");


  //llamamos a la funcion para actualizar el select de palabras
  actualizarSelectPalabras();

  // manejamos el select
  selectPalabras.onchange = function () {
    let palabraSeleccionada = selectPalabras.value;

    if (palabraSeleccionada) {
      //mostramos la tarjeta
      cardMostrar.classList.remove("d-none");

      //obtenemos las rimas
      let rimas = diccionario.obtenerRimas(palabraSeleccionada);

      // ponemos un titulo
      cardMostrarTitulo.textContent = palabraSeleccionada;

      //si las rimas son mayor que 0
      if (rimas.length > 0) {
        // ponemos un texto uniendo las rimas
        cardMostrarText.textContent = rimas.join(", ");
      }
    }
  }


  /* Opcion con los inputs
  
  if (!palabra.value) {
    error.textContent = "⚠ Por favor, ingresa una palabra.";
    error.classList.remove("d-none");
  } else {
    cardMostrar.classList.remove("d-none");

    let rimas = obtenerRimas(palabra.value);
    
    // Actualizar titulo y texto en el card para mostrar las rimas
    cardMostrarTitulo.textContent = palabra.value;

    if (rimas.length > 0) {
      // Unir las rimas con un salto de linea
      cardMostrarText.textContent = rimas.join(", ");
    } else {
      cardMostrarText.textContent = "No se encontraron rimas para esta palabra.";
    }

    palabra.value = "";
    rima.value = "";
  } */
});


//!------------------------------------------------------------------------------------------------------------
// Evento para eliminar una rima especifica
bEliminarRima.addEventListener("click", (e) => {
  // previene el envio del formulario
  e.preventDefault();

  //funcion para ocultar vistas
  eliminarVistas();

  //motrar elementos segun sean necesarios
  formulario.classList.remove("d-none");
  desplegablePalabras.classList.remove("d-none");

  //llamamos a la funcion para actualizar el select de palabras
  actualizarSelectPalabras();

  // manejamos el select
  selectPalabras.onchange = function () {
    let palabraSeleccionada = selectPalabras.value;

    if (palabraSeleccionada) {
      desplegableRimas.classList.remove("d-none");

      // llamamos a la funcion para actualizar el select de rimas
      actualizarSelectRimas(palabraSeleccionada);

      let selectRimas = document.getElementById("selectRimas");

      // manejamos el select de rimas
      selectRimas.onchange = function () {
        let rimaSeleccionada = selectRimas.value;

        if (rimaSeleccionada) {
          // eliminar la rima seleccionada
          let mensaje = diccionario.eliminarRima(palabraSeleccionada, rimaSeleccionada);

          //si la rima se elimina
          if (mensaje.includes("Rima eliminada correctamente")) {
            //mostramos un mensaje
            correcto.textContent = "✅ Rima " + rima.value + " eliminada de la palabra " + palabraSeleccionada;
            correcto.classList.remove("d-none");

            // actualizamos el desplegable
            actualizarSelectRimas(palabraSeleccionada);
          }
        }
      }
    }
  }

  /* Opcion con los inputs
  if (!palabra.value || !rima.value) {
    error.textContent = "⚠ Por favor, completa ambos campos.";
    error.classList.remove("d-none");
  }
  else {
    let mensaje = eliminarRima(palabra.value, rima.value);
    if (mensaje.includes("Rima eliminada correctamente")) {
      correcto.textContent = "✅ Rima " + rima.value + " eliminada de la palabra " + palabra.value + ".";
      correcto.classList.remove("d-none");
    } else {
      error.textContent = "⚠ " + mensaje;
      error.classList.remove("d-none");
    }

    palabra.value = "";
    rima.value = "";
  }*/
});

//!------------------------------------------------------------------------------------------------------------
// Evento para eliminar una palabra
bEliminarPalabra.addEventListener("click", (e) => {
  // Previene el envio del formulario
  e.preventDefault();

  //funcion para ocultar vistas
  eliminarVistas();

  //motrar elementos segun sean necesarios
  formulario.classList.remove("d-none");
  desplegablePalabras.classList.remove("d-none");


  //llamamos a la funcion para actualizar el select de palabras
  actualizarSelectPalabras();

  // manejamos el select
  selectPalabras.onchange = function () {
    let palabraSeleccionada = selectPalabras.value;

    if (palabraSeleccionada) {
      let mensaje = diccionario.eliminarPalabra(palabraSeleccionada);

      //si la palabra se elimina correctamente
      if (mensaje.includes("Palabra eliminada correctamente")) {
        //mostramos un mensaje
        correcto.textContent = "✅ Palabra " + palabra.value + " eliminada del diccionario";
        correcto.classList.remove("d-none");

        // actualizamos el select
        actualizarSelectPalabras();
      }
    }
  }

  /* Opcion con los inputs

  if (!palabra.value) {
    error.textContent = "⚠ Por favor, ingresa una palabra.";
    error.classList.remove("d-none");
  }
  else {
    let mensaje = eliminarPalabra(palabra.value);
    if (mensaje.includes("Palabra eliminada correctamente")) {
      correcto.textContent = "✅ Palabra " + palabra.value + " eliminada del diccionario.";
      correcto.classList.remove("d-none");
    } else {
      error.textContent = "⚠ " + mensaje;
      error.classList.remove("d-none");
    }

    palabra.value = "";
    rima.value = "";
  }*/
});

//!------------------------------------------------------------------------------------------------------------
// Evento para mostrar el diccionario completo
bDiccionario.addEventListener("click", (e) => {
  // previene el envio del formulario
  e.preventDefault();

  //funcion para ocultar vistas
  eliminarVistas();

  //motrar elementos segun sean necesarios
  formulario.classList.remove("d-none");
  cardMostrar.classList.remove("d-none");

  // Obtener el diccionario desde functions.js
  let diccionarioTexto = diccionario.mostrar();

  // limpiamos el contenido anterior
  cardMostrarText.textContent = "";
  //ponemos un titulo
  cardMostrarTitulo.textContent = "Diccionario";

  // dividimos el texto por saltos de linea
  let lineas = diccionarioTexto.split("\n");

  lineas.forEach(linea => {
    //creamos un nuevo p
    let p = document.createElement("p");
    //le asignamos el texto
    p.textContent = linea;
    //agregamos a la card
    cardMostrarText.appendChild(p);
  });
});


//?------------------------------------------------------------------------------------------------------------
/**
 * Funcion para ocultar varios elementos de la interfaz y actualizar los selects
 */
function eliminarVistas() {
  formulario.classList.add("d-none");
  bloquePalabra.classList.add("d-none");
  bloqueRima.classList.add("d-none");
  desplegablePalabras.classList.add("d-none");
  desplegableRimas.classList.add("d-none");
  cardMostrar.classList.add("d-none");
  error.classList.add("d-none");
  correcto.classList.add("d-none");

  actualizarSelectPalabras()
}

/**
 * Funcion para actualizar el select de palabras
 */
function actualizarSelectPalabras() {
  let selectPalabras = document.getElementById("selectPalabras");

  // limpiamos las opciones del slect
  while (selectPalabras.firstChild) {
    selectPalabras.removeChild(selectPalabras.firstChild);
  }

  //creamos una opcion deshabilitada con un texto y que aparezca seleccionada
  let opcion = document.createElement("option");
  opcion.disabled = true;
  opcion.selected = true;
  opcion.textContent = "Selecciona una palabra";
  selectPalabras.appendChild(opcion);

  //llamamos a la funcion de obtener palabras
  let palabras = diccionario.obtenerPalabras();

  //recorremos las palabras
  palabras.forEach((palabra) => {
    //creamos  una nueva opcion
    let option = document.createElement("option");
    //le añadimos la palabra
    option.textContent = palabra;
    //agregamos al select
    selectPalabras.appendChild(option);
  });
}

/**
 * Funcion para actualizar el select de rimas
 * @param {string} palabraSeleccionada - palabra de la cual vamos a obtener las rimas
 */
function actualizarSelectRimas(palabraSeleccionada) {
  let selectRimas = document.getElementById("selectRimas");

  // limpiamos las opciones del slect
  while (selectRimas.firstChild) {
    selectRimas.removeChild(selectRimas.firstChild);
  }

  //creamos una opcion deshabilitada con un texto y que aparezca seleccionada
  let opcion = document.createElement("option");
  opcion.disabled = true;
  opcion.selected = true;
  opcion.textContent = "Selecciona una rima";
  selectRimas.appendChild(opcion);

  // llamamos a la funcion para obtener palabras
  let rimas = diccionario.obtenerRimas(palabraSeleccionada);

  if (rimas.length > 0) {
    //recorremos las rimas
    rimas.forEach((rima) => {
      //creamos  una nueva opcion
      let option = document.createElement("option");
      //le añadimos las rimas
      option.textContent = rima;
      //agregamos al select
      selectRimas.appendChild(option);
    });
  }
}



/* Referencias
  -  https://getbootstrap.com/docs/5.3/getting-started/introduction/ 
  - https://stackoverflow.com/questions/2874688/how-to-disable-an-input-type-text
  - https://www.w3schools.com/jsref/prop_text_placeholder.asp
  - https://stackoverflow.com/questions/19329978/change-selects-option-and-trigger-events-with-javascript
  - https://www.w3schools.com/jsref/event_onchange.asp
  - https://stackoverflow.com/questions/5416767/get-selected-value-text-from-select-on-change
*/