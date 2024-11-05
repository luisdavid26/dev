function artistasSolistas(artistas) {
  //mostramos a los artistas que son solistas
  let solistas = artistas.filter((artista) => artista.solista);
  solistas.forEach((artista) => {
    //motramos los artistas con sus detalles
    console.log(
      `nombre: ${artista.nombre}, instrumento: ${artista.instrumento}, edad: ${artista.edad}`
    );
  });
  return solistas;
}

function artistasPorEdad(edad, artistas) {
  //mostrar los artirstas fultrados por edad
  let artistasPorEdad = artistas.filter((artista) => artista.edad === edad);
  artistasPorEdad.forEach((artista) => {
    console.log(
      `nombre: ${artista.nombre}, edad: ${artista.edad}, instrumento: ${artista.instrumento}`
    );
  });
  return artistasPorEdad;
}

function cantidadDeArtistasPorInstrumento(artistas) {
  //mostramos los artistas por intrumentos
  let conteo = artistas.reduce((cont, artista) => {
    const instrumento = artista.instrumento;
    cont[instrumento] = cont[instrumento] ? cont[instrumento] + 1 : 1; //es un contador por cada instrumento y aumenta a media que un artista utiliza el instrumento
    return cont;
  }, {});
  console.log("cantidad de artistas por instrumento:", conteo);
  return conteo;
}

function cantidadDeArtistasPorGenero(artistas) {
  //mostramos los artistas por genero
  let conteo = artistas.reduce((cont, artista) => {
    const genero = artista.genero;
    cont[genero] = cont[genero] ? cont[genero] + 1 : 1; // al igual que con los intrumentos , los cuento por a medida por genero
    return cont;
  }, {});
  console.log("cantidad de artistas por genero:", conteo);
  return conteo;
}

function artistasConMasDiscosQue(cantidadDeDiscos, artistas) {
  //filtramos por la cantidad de discos que el usuario quiera poner como filtro
  let artistasConMasDiscos = artistas
    .filter(
      (artista) => artista.discos && artista.discos.length > cantidadDeDiscos //los filtramos
    )
    .sort((a, b) => b.discos.length - a.discos.length); //los ordenamos
  artistasConMasDiscos.forEach((artista) => {
    //mostramos los detalles
    console.log(`nombre: ${artista.nombre}, discos: ${artista.discos.length}`);
  });
  return artistasConMasDiscos;
}

function artistaConMasEntradasVendidas(artistas) {
  //motramos los artsas con mas entradas vendidas
  let artistaConMasEntradas = artistas
    .filter(
      (artista) =>
        artista.ultimoRecital && artista.ultimoRecital.entradasVendidas != null //filtramos el artista que tenga entradas vendidas
    )
    .sort(
      (a, b) =>
        b.ultimoRecital.entradasVendidas - a.ultimoRecital.entradasVendidas //ordenamos de mayor a menor
    )[0];

  if (artistaConMasEntradas) {
    //mostramos el primer artista
    console.log(
      `nombre: ${artistaConMasEntradas.nombre}, entradas vendidas: ${artistaConMasEntradas.ultimoRecital.entradasVendidas}`
    );
  } else {
    console.log("no hay artistas con entradas vendidas registradas.");
  }

  return artistaConMasEntradas;
}
function artistaConMayorRecaudacion(artistas) {
  let artistaMayorRecaudacion = artistas.reduce((max, artista) => {
    const recaudacionActual =
      (artista.ultimoRecital.entradasVendidas ) *
      (artista.ultimoRecital.costoEntradas );
    const recaudacionMax =
      (max.ultimoRecital.entradasVendidas ) *
      (max.ultimoRecital.costoEntradas );
    return recaudacionActual > recaudacionMax ? artista : max;
  }, artistas[0]);

  const recaudacionMayor =
    (artistaMayorRecaudacion.ultimoRecital.entradasVendidas ) *
    (artistaMayorRecaudacion.ultimoRecital.costoEntradas );
  console.log(
    `Nombre: ${artistaMayorRecaudacion.nombre}, Recaudación: ${recaudacionMayor}`
  );

  return artistaMayorRecaudacion;
}

function artistasConDiscoEnAnyo(anyo, artistas) {
  let artistasConDisco = artistas.filter(
    (artista) =>
      artista.discos &&
      artista.discos.some((disco) => disco.anioLanzamiento === anyo) // filtramos por el anyo en cada disco del artista
  );
  artistasConDisco.forEach((artista) => {
    //mostramos todos los artistas que tengas discos lanzados ese anyo
    console.log(`nombre: ${artista.nombre}, Anyo del disco: ${anyo}`);
  });
  return artistasConDisco;
}

const artistaConMasCopias = (artistas) => {
  let artistaMasCopias = artistas.reduce((max, artista) => {
    const copias =
      artista.discos?.reduce((sum, disco) => sum + disco.copiasVendidas, 0) ;//sumamos todas las copias vendidas de cada uno de los artistas
    const maxCopias =
      max.discos?.reduce((sum, disco) => sum + disco.copiasVendidas, 0) ;// sumamos las copias 
    return copias > maxCopias ? artista : max;//devolvemos el artista con mas copias vendiadas
  });
  console.log(//devolvemos el artista con mas copias vendidas 
    `nombre: ${artistaMasCopias.nombre}, total copias: ${
      artistaMasCopias.discos?.reduce(
        (sum, disco) => sum + disco.copiasVendidas,
        0
      ) 
    }`
  );
  return artistaMasCopias;
};
