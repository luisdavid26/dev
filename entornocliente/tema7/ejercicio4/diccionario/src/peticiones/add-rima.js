import { Diccionario } from '../model/diccionario.js';

const diccionario = new Diccionario();
const form = document.getElementById('addrimaform');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const palabra = document.getElementById('palabra').value;
  const rima = document.getElementById('rima').value;

  if (diccionario.agregarRima(palabra, rima)) {
    alert('Rima agregada correctamente.');
  } else {
    alert('Error al agregar la rima.');
  }
});