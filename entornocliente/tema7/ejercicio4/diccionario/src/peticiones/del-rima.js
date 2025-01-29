const SERVER = "http://localhost:5001";

const form = document.getElementById("delrimaform");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const palabra = document.getElementById("palabra").value;
  const rima = document.getElementById("rima").value;

  // validar que la palabra y la rima no esten vacias
  if (!palabra || !rima) {
    console.log("Por favor, ingresa ambos campos: palabra y rima.");
    return;
  }
  console.log("Palabra:", palabra);
  console.log("Rima:", rima);

  obtenerDiccionario(palabra, rima);
});

function obtenerDiccionario(palabra, rima) {
  const SERVER = "http://localhost:5001"; // URL de la API
  console.log("obteniendo palabras de la API");

  // hacemos GET para obtener todas las palabras
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${SERVER}/diccionarios`, true);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const diccionarios = JSON.parse(xhr.responseText).data;

      // filtrar todos las palabras que coincidan con la palabra
      const diccionariosConPalabra = diccionarios.filter(
        (entry) => entry.palabra === palabra
      );

      if (diccionariosConPalabra.length > 0) {
        for (let dicc of diccionariosConPalabra) {
          // filtrar y eliminar la rima de esa palabra
          const nuevaListaDeRimas = dicc.rimas.filter((r) => r !== rima);

          if (nuevaListaDeRimas.length === dicc.rimas.length) {
            console.log(`la rima '${rima}' no se encuentra en esa palabra `);
          } else {
            console.log(`rima '${rima}' eliminada`);
            eliminarRima(dicc.id, palabra, rima);
          }
        }
      } else {
        console.log("no se encontrola palabra en los diccionarios");
      }
    } else {
      console.log("error al obtener los diccionarios");
    }
  };

  xhr.onerror = function () {
    console.log("hubo un problema con la solicitud");
  };

  xhr.send();
}
function eliminarRima(diccId, palabra, rima) {
  // hacemos DELETE para eliminar la rima
  const xhr = new XMLHttpRequest();
  xhr.open(
    "DELETE",
    `${SERVER}/diccionarios/${diccId}/${palabra}/${rima}`,
    true
  );
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const response = JSON.parse(xhr.responseText);
      if (response.message.includes("eliminada")) {
        console.log("rima eliminada correctamente");
      } else {
        console.log("no se pudo eliminar la rima");
      }
    } else {
      console.log("error al eliminar la rima");
    }
  };

  xhr.onerror = function () {
    console.log("hubo un problema con la solicitud");
  };

  xhr.send();
}
