let opcion;
do {
  opcion = prompt(` Elige una opcion:
     1. Mostrar artistas solistas
     2. Mostrar artistas por edad
     3. Cantidad de artistas por instrumento
     4. Cantidad de artistas por genero
     5. Artistas con mas discos 
     6. Artista con mas entradas vendidas
     7. Artista con mayor recaudacion
     8. Artistas con disco en anyo
     9. Artista con más copias de discos
     0. Salir`);
  switch (opcion) {
    case "1":
      console.log(`------------------------------------------------------\n
        artistas solistas
        `);
      artistasSolistas(artistas);
      break;
    case "2":
      console.log(`------------------------------------------------------\n
        artistas por edad
        `);
      const edad = parseInt(prompt("introduce la edad:"));
      artistasPorEdad(edad, artistas);
      break;
    case "3":
      console.log(`------------------------------------------------------\n
        artistas por instrumento
        `);
      cantidadDeArtistasPorInstrumento(artistas);
      break;
    case "4":
      console.log(`------------------------------------------------------\n
        artistas por genero
        `);
      cantidadDeArtistasPorGenero(artistas);
      break;
    case "5":
      console.log(`------------------------------------------------------\n
        artistas por la cantidad de discos que tienen
        `);
      const cantidadDiscos = parseInt(
        prompt("introduce la cantidad de discos a filtrar")
      );
      artistasConMasDiscosQue(cantidadDiscos, artistas);
      break;
    case "6":
      console.log(`------------------------------------------------------\n
        artistas por mas entradas vendidas
        `);
      artistaConMasEntradasVendidas(artistas);
      break;
    case "7":
      console.log(`------------------------------------------------------\n
        artistas con mayor recaudacion
        `);
      artistaConMayorRecaudacion(artistas);
      break;
    case "8":
      console.log(`------------------------------------------------------\n
        artistas con mas discos en un anyo
        `);
      const anyo = parseInt(prompt("introduce el año:"));
      artistasConDiscoEnAnyo(anyo, artistas);
      break;
    case "9":
      console.log(`------------------------------------------------------\n
        artistas cons mas copias
        `);
      artistaConMasCopias(artistas);
      break;
    case "0":
      console.log(`------------------------------------------------------\n`);
      "saliendo del programa";
      break;
    default:
      "eligue una opcion valida";
      break;
  }
} while (opcion !== "0");
