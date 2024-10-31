import {obtenerRimas, agregarRima, eliminarRima, eliminarPalabra} from "./functions";
const diccionario = new Map();
let listaRima = new Array();
while (true) {
    const opcion = prompt(
    "Selecciona una opción:\n1. Agregar rima\n2. Obtener rimas\n3. Eliminar rima\n4. Eliminar palabra\n5. Salir");
    switch (opcion) {
        case "1":
            const palabra = prompt("Ingresa una palabra:");
            const rima = prompt("Ingresa una rima:");
            agregarRima(palabra, rima);
        break;

        case "2":
            const palabraConsultar = prompt("Ingresa una palabra a consultar:");
            const rimas = obtenerRimas(palabraConsultar);
            console.log(rimas);
        break;

        case "3":
            const palabraEliminarRima = prompt("Ingresa una palabra:");
            const rimaAEliminar = prompt("Ingresa la rima a eliminar:");
            eliminarRima(palabraEliminarRima, rimaAEliminar);
        break;

        case "4":
            const palabraEliminar = prompt("Ingresa una palabra a eliminar:");
            eliminarPalabra(palabraEliminar);
        break;

        case "5":
            alert("Saliendo del programa");
        return;
        default:
            alert("Opción no válida. Por favor, elige una opción válida.");
    }
}
