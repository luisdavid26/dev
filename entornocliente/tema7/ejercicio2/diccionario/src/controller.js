// controller.js
import { DiccionarioRimas } from "./model.js";
import { View } from "./view.js";

document.addEventListener("DOMContentLoaded", () => {
  const modelo = new DiccionarioRimas();
  const vista = new View();

  // Actualizar select de palabras al cargar
  vista.actualizarListaPalabras(modelo.diccionario);

  // Evento para añadir una rima
  document.getElementById("addrimaform").addEventListener("submit", (e) => {
    e.preventDefault();
    const palabra = vista.campoPalabra.value;
    const rima = vista.campoRima.value;
    const resultado = modelo.agregarRima(palabra, rima);
    vista.mostrarMensaje(resultado.anyadido || resultado.error, resultado.anyadido ? "anyadido" : "error");
    vista.actualizarListaPalabras(modelo.diccionario);
  });

  // Evento para obtener rimas de una palabra
  document.getElementById("getrimaform").addEventListener("submit", (e) => {
    e.preventDefault();
    const palabra = document.getElementById("getrimas").value;
    const rimas = modelo.obtenerRimas(palabra);
    vista.mostrarRimas(rimas);
  });

  // Evento para eliminar una rima de una palabra
  document.getElementById("rmvrimaform").addEventListener("submit", (e) => {
    e.preventDefault();
    const palabra = document.getElementById("palabra").value;
    const rima = document.getElementById("rmvrima").value;
    const resultado = modelo.eliminarRima(palabra, rima);
    vista.mostrarMensaje(resultado.anyadido || resultado.error, resultado.anyadido ? "eliminada" : "error");
    vista.actualizarListaPalabras(modelo.diccionario);
  });

  // Evento para eliminar una palabra del diccionario
  document.getElementById("rmvpalabraform").addEventListener("submit", (e) => {
    e.preventDefault();
    const palabra = document.getElementById("rmvpalabra").value;
    const resultado = modelo.eliminarPalabra(palabra);
    vista.mostrarMensaje(resultado.anyadido || resultado.error, resultado.anyadido ? "eliminada" : "error");
    vista.actualizarListaPalabras(modelo.diccionario);
  });

  // Evento para buscar palabras que contienen una rima
  document.getElementById("buscarrimaform").addEventListener("submit", (e) => {
    e.preventDefault();
    const rima = document.getElementById("buscarrima").value;
    const palabras = modelo.buscarPorRima(rima);
    vista.mostrarPalabras(palabras);

  });
  document.getElementById("selectpalabras").addEventListener("change", (e) => {
    const palabraSeleccionada = e.target.value; 
    if (palabraSeleccionada) {
      const rimas = modelo.obtenerRimas(palabraSeleccionada);
      vista.mostrarRimasSeleccionada(rimas); 
    }
  });
});
