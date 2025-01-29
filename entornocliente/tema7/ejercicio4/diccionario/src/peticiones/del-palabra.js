import { Diccionario } from '../model/diccionario.js';

const diccionario = new Diccionario();
const form = document.getElementById('delpalabraform');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const palabra = document.getElementById('palabra').value;

  if (diccionario.eliminarPalabra(palabra)) {
    alert('Palabra eliminada correctamente.');
  } else {
    alert('Error al eliminar la palabra.');
  }
});