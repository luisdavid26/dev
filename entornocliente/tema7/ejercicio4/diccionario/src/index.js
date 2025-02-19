const SERVER = "http://localhost:5001";
// obtener todas las palabras y sus rimas
function getall() {
  console.log("obteniendo todas las palabras y sus rimas con xhr");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${SERVER}/diccionarios`, true); // true para que sea async

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const response = JSON.parse(xhr.responseText);
      const diccionarios = response.data; // guardar los diccionarios en la variable
      console.log("palabras y rimas obtenidas:", diccionarios);
      remplazartodo(diccionarios);
    } else {
      console.error(
        "error al obtener palabras y rimas:",
        xhr.status,
        xhr.statusText
      );
    }
  };

  xhr.onerror = function () {
    console.error("fallo al hacer la peticion get");
  };

  xhr.send(); // enviar la solicitud
}

// reemplazar todas las palabras y sus rimas
function remplazartodo(diccionarios) {
  const container = document.getElementById("rimasContainer");

  diccionarios.forEach((diccionario) => {
    appendtodo(diccionario, container);
  });
}

// creamos una tarjeta para cada palabra con todas sus rimas
function appendtodo(diccionario, container) {
  const card = document.createElement("div");
  card.classList.add("card", "mb-3");
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h4");
  title.classList.add("card-title");
  title.textContent = diccionario.palabra;

  // lista de rimas
  const rimasList = document.createElement("ul");
  rimasList.classList.add("list-group", "list-group-flush");

  // Recorremos las rimas y las agregamos bajo la palabra)
  diccionario.rimas.forEach((rima) => {
    const rimaItem = document.createElement("li");
    rimaItem.classList.add("list-group-item");
    rimaItem.textContent = rima;
    rimasList.appendChild(rimaItem);
  });
  cardBody.appendChild(title);
  cardBody.appendChild(rimasList);
  card.appendChild(cardBody);
  container.appendChild(card);
}

document.addEventListener("DOMContentLoaded", () => {
  getall(); // cargar todas las palabras y rimas al inicio
});

export { getall };
