const SERVER = "http://localhost:5001";

function agregarRima(palabra, rima) {// Función para agregar una rima a una palabra
  console.log("agregando rima con XHR");
  const xhr = new XMLHttpRequest();
  xhr.open("POST", `${SERVER}/diccionarios`, true);// true para que sea async
  xhr.setRequestHeader("Content-Type", "application/json");

  const data = JSON.stringify({// Convertir los datos a JSON
    palabra: palabra,
    rimas: [rima], 
  });
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const response = JSON.parse(xhr.responseText);// Convertir la respuesta a JSON
      console.log("Rima agregada:", response.data);
    } else {
      console.error("Error al agregar rima:", xhr.status, xhr.statusText);
    }
  };

  xhr.onerror = function () {
    console.error("Fallo al hacer la petición POST.");
  };

  xhr.send(data); // enviar los datos
}

// validamos los datos del formulario
function validarFormulario(palabra, rima) {
  if (!palabra || !rima) {
    console.log("Todos los campos son obligatorios");
    return false;
  }
  return true;
}

// agregar rimas
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("addrimaform");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const palabra = document.getElementById("palabra").value;
      const rima = document.getElementById("rima").value;

      if (validarFormulario(palabra, rima)) {
        agregarRima(palabra, rima);
      }
    });
  }
});

export { agregarRima };