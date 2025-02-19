import { View } from "./view.js";
/* 
he cambiado el puerto a 3002 ya que al utilizar lite-server y json-server en el mismo puerto se producía un error
por lo que he cambiado el puerto de json-server a 3002 y asi puedo utilizar los dos al mismo tiempo sin que me de error de cors
*/
document.addEventListener("DOMContentLoaded", () => { 
  const vista = new View();

  // Actualizar lista de palabras al cargar
  fetch("http://localhost:3002/palabras")
    .then(response => response.json())
    .then(data => vista.actualizarListaPalabras(data));

  // anyadir una nueva rima
  document.getElementById("addrimaform").addEventListener("submit", (e) => {
    e.preventDefault();
    const palabra = vista.campoPalabra.value;
    const rima = vista.campoRima.value;

    fetch("http://localhost:3002/palabras", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        palabra: palabra,
        rimas: [rima],
      }),
    })
      .then(response => {
        console.log("Respuesta del servidor:", response);
        return response.json(); // Solo se llama a .json() si la respuesta es válida
      })
      .then(data => {
        console.log("Datos procesados:", data);
        vista.mostrarMensaje(`Rima ${rima} añadida a ${palabra}`, "anyadida");
        vista.actualizarListaPalabras(data);
      })
      .catch(error => {
        console.error("Error al añadir la rima: ", error);
      });
    
  });

  // obtener rimas de una palabra
  document.getElementById("getrimaform").addEventListener("submit", (e) => {
    e.preventDefault();
    const palabra = document.getElementById("getrimas").value;

    fetch(`http://localhost:3002/palabras?palabra=${palabra}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          vista.mostrarRimas(data[0].rimas);
        } else {
          vista.mostrarMensaje(`No se encontró la palabra ${palabra}`, "error");
        }
      });
  });

  //  eliminar una rima de una palabra
  document.getElementById("rmvrimaform").addEventListener("submit", (e) => {
    e.preventDefault();
    const palabra = document.getElementById("palabra").value;
    const rima = document.getElementById("rmvrima").value;

    fetch(`http://localhost:3002/palabras?palabra=${palabra}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const rimasActualizadas = data[0].rimas.filter(r => r !== rima);

          fetch(`http://localhost:3002/palabras/${data[0].id}`, {
            method: "PATCH",//cambio el metodo a patch para poder actualizar la rima
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ rimas: rimasActualizadas }),
          })
            .then(response => response.json())
            .then(() => {
              vista.mostrarMensaje(`Rima ${rima} eliminada de ${palabra}`, "eliminada");
            });
        }
      });
  });

  // eliminar una palabra del diccionario
  document.getElementById("rmvpalabraform").addEventListener("submit", (e) => {
    e.preventDefault();
    const palabra = document.getElementById("rmvpalabra").value;

    fetch(`http://localhost:3002/palabras?palabra=${palabra}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          fetch(`http://localhost:3002/palabras/${data[0].id}`, {
            method: "DELETE",
          })
            .then(() => {
              vista.mostrarMensaje(`Palabra ${palabra} eliminada del diccionario`, "eliminada");
            });
        }
      });
  });

  // buscar palabras que contienen una rima
  document.getElementById("buscarrimaform").addEventListener("submit", (e) => {
    e.preventDefault();
    const rima = document.getElementById("buscarrima").value;

    fetch(`http://localhost:3002/palabras?rimas_like=${rima}`)
      .then(response => response.json())
      .then(data => vista.mostrarPalabras(data.map(item => item.palabra)));
  });

  document.getElementById("selectpalabras").addEventListener("change", (e) => {
    const palabraSeleccionada = e.target.value;
    if (palabraSeleccionada) {
      fetch(`http://localhost:3002/palabras?palabra=${palabraSeleccionada}`)
        .then(response => response.json())
        .then(data => vista.mostrarRimasSeleccionada(data[0].rimas));
    }
  });
});
