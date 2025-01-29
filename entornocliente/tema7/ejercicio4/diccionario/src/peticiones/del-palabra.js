const form = document.getElementById('delpalabraform');

form.addEventListener('submit', (e) => {
  e.preventDefault();  

  const palabra = document.getElementById('palabra').value; 

  if (!palabra) {
    console.log('por favor, ingresa la palabra');
    return;
  }
  console.log('palabra:', palabra);

  obtenerDiccionario(palabra);
});

function obtenerDiccionario(palabra) {
  const SERVER = "http://localhost:5001";  
  console.log('obteniendo diccionarios de la api');

  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${SERVER}/diccionarios`, true);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const diccionarios = JSON.parse(xhr.responseText).data;

      eliminarPalabraDeDiccionarios(palabra);
      eliminarRimasDePalabra(palabra);
    } else {
      console.log('error al obtener los diccionarios');
    }
  };

  xhr.onerror = function () {
    console.log('hubo un problema con la solicitud');
  };

  xhr.send();
}

function eliminarPalabraDeDiccionarios(palabra) {
  const SERVER = "http://localhost:5001";  
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", `${SERVER}/diccionarios/palabra/${palabra}`, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const response = JSON.parse(xhr.responseText);
      console.log(response.message);
    } else {
      console.log('error al eliminar la palabra.');
    }
  };

  xhr.onerror = function () {
    console.log('hubo un problema con la solicitud.');
  };

  xhr.send();
}

function eliminarRimasDePalabra(palabra) {
  const SERVER = "http://localhost:5001";  
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", `${SERVER}/diccionarios/rimas/${palabra}`, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const response = JSON.parse(xhr.responseText);
      console.log(response.message);
    } else {
      console.log('error al eliminar las rimas');
    }
  };
  xhr.onerror = function () {
    console.log('hubo un problema con la solicitud');
  };

  xhr.send();
}
