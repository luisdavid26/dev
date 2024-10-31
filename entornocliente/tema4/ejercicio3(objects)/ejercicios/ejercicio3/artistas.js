// Importamos las funciones del archivo functions.js
import {
  artistasSolistas,
  artistasPorEdad,
  cantidadDeArtistasPorInstrumento,
  cantidadDeArtistasPorGenero,
  artistasConMasDiscosQue,
  artistaConMasEntradasVendidas,
  artistaConMayorRecaudacion,
  artistasConDiscoEnAnyo,
  artistaConMasCopias,
} from "./function.js";

// Importamos el array de artistas desde data-artistas.js
import { artistas } from "./bases_ejercicios-20241030/data-artistas.js";
console.log(`  
      Elige una opcion:\n
    \n  1. Mostrar artistas solistas
    \n  2. Mostrar artistas por edad
    \n  3. Cantidad de artistas por instrumento
    \n  4. Cantidad de artistas por género
    \n  5. Artistas con mas discos 
    \n  6. Artista con mas entradas vendidas
    \n  7. Artista con mayor recaudacion
    \n  8. Artistas con disco en anyo
    \n  9. Artista con más copias de discos
    \n  0. Salir`);
// Función principal

  do {
    opcion = mostrarMenu();
    switch (opcion) {
      case "1":
        console.log(artistasSolistas(artistas));
        break;
      case "2":
        const edad = parseInt(prompt("introduce la edad:"));
        console.log(artistasPorEdad(edad, artistas));
        break;
      case "3":
        console.log(cantidadDeArtistasPorInstrumento(artistas));
        break;
      case "4":
        console.log(cantidadDeArtistasPorGenero(artistas));
        break;
      case "5":
        const cantidadDiscos = parseInt(
          prompt("introduce la cantidad de discos a filtrar")
        );
        console.log(artistasConMasDiscosQue(cantidadDiscos, artistas));
        break;
      case "6":
        console.log(artistaConMasEntradasVendidas(artistas));
        break;
      case "7":
        console.log(artistaConMayorRecaudacion(artistas));
        break;
      case "8":
        const anyo = parseInt(prompt("introduce el año:"));
        console.log(artistasConDiscoEnAnyo(anyo, artistas));
        break;
      case "9":
        console.log(artistaConMasCopias(artistas));
        break;
      case "0":
        console.log("Saliendo...");
        break;
      default:
        console.log("Opción no válida. Inténtalo de nuevo.");
        break;
    }
  } while (opcion !== "0");

