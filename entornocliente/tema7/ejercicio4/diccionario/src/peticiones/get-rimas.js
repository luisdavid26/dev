const SERVER = "http://localhost:5001";

function obtenerRimas(palabra) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${SERVER}/diccionarios`, true);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const diccionarios = JSON.parse(xhr.responseText).data;

      // filtrar lo que coincida con la palabra
      const entradas = diccionarios.filter(a => a.palabra === palabra);

      // combinamos todas las rimas en una sola lista
      let rimas = [];
      entradas.forEach(entry => {
        entry.rimas.forEach(rima => {
          rimas.push(rima);
        });
      });
      mostrarRimas(rimas);
    }
  };
  xhr.onerror = function () {
    console.log("Error al hacer la petición GET.");
  
  };
  xhr.send();
}

function mostrarRimas(rimas) {
  const listaRimas = document.getElementById("listarimas");

  rimas.forEach(rima => {
    const li = document.createElement("li");
    li.textContent = rima;
    listaRimas.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("getrimaform");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const palabra = document.getElementById("palabra").value;
      obtenerRimas(palabra);
    });
  }
});
