import { Diccionario } from '../model/diccionario.js';

const diccionario = new Diccionario();
const form = document.getElementById('delrimaform');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const palabra = document.getElementById('palabra').value;
  const rima = document.getElementById('rima').value;

  if (diccionario.eliminarRima(palabra, rima)) {
    alert('Rima eliminada correctamente.');
  } else {
    alert('Error al eliminar la rima.');
  }
});