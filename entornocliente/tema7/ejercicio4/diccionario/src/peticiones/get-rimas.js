import { Diccionario } from '../model/diccionario.js';

const diccionario = new Diccionario();
const form = document.getElementById('getrimaform');
const listaRimas = document.getElementById('listarimas');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const palabra = document.getElementById('palabra').value;
  const rimas = diccionario.obtenerRimas(palabra);

  listaRimas.innerHTML = ''; // Limpiar la lista
  rimas.forEach(rima => {
    const li = document.createElement('li');
    li.textContent = rima;
    listaRimas.appendChild(li);
  });
});