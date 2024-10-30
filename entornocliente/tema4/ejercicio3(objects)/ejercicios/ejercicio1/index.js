import {
  agregarRima,
  obtenerRimas,
  eliminarRima,
  eliminarPalabra
} from "./function.js";

let prombucle = true;
while (prombucle) {
  const opcion = prompt(
    "elige una opcion: / 1. agregar rima / 2. obtener rimas / 3. eliminar rima / 4. eliminar palabra / 5. Salir"
  );
  switch (opcion) {
    case "1":
      const palabra = prompt("Ingresa una palabra:");
      const rima = prompt("Ingresa una rima:");
      agregarRima(palabra, rima);
      break;
    case "2":
      const palabraConsultar = prompt("Ingresa la palabra que quieras buscar:");
      const rimas = obtenerRimas(palabraConsultar);
      console.log(rimas || `La palabra ${palabraConsultar} no existe en el diccionario`);
      break;
    case "3":
      const palabraEliminarRima = prompt("Ingresa una palabra:");
      const rimaAEliminar = prompt("Ingresa la rima a eliminar:");
      eliminarRima(palabraEliminarRima, rimaAEliminar);
      break;
    case "4":
      const palabraEliminar = prompt("Ingresa la palabra que quieras eliminar del mapa:");
      eliminarPalabra(palabraEliminar);
      break;
    case "5":
      alert("Saliendo del programa");
      prombucle = false;
      break;
    default:
      alert("Error, opción no válida.");
  }
}
