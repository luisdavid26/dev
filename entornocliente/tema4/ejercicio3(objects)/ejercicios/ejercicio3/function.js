function artistasSolistas(artistas) {//mostramos a los artistas que son solistas 
  let solistas = artistas.filter((artista) => artista.solista);
  solistas.forEach((artista) => {
    console.log(
      `nombre: ${artista.nombre}, instrumento: ${artista.instrumento}, edad: ${artista.edad}`
    );
  });
  return solistas;
}

function artistasPorEdad(edad, artistas) {
  let artistasPorEdad = artistas.filter((artista) => artista.edad === edad);
  artistasPorEdad.forEach((artista) => {
    console.log(
      `nombre: ${artista.nombre}, Edad: ${artista.edad}, instrumento: ${artista.instrumento}`
    );
  });
  return artistasPorEdad;
}

function cantidadDeArtistasPorInstrumento(artistas) {
  let conteo = artistas.reduce((cont, artista) => {
    const instrumento = artista.instrumento;
    cont[instrumento] = cont[instrumento] ? cont[instrumento] + 1 : 1;
    return cont;
  }, {});
  console.log("cantidad de artistas por instrumento:", conteo);
  return conteo;
}

function cantidadDeArtistasPorGenero(artistas) {
  let conteo = artistas.reduce((cont, artista) => {
    const genero = artista.genero;
    cont[genero] = cont[genero] ? cont[genero] + 1 : 1;
    return cont;
  }, {});
  console.log("cantidad de artistas por genero:", conteo);
  return conteo;
}

function artistasConMasDiscosQue(cantidadDeDiscos, artistas) {
  let artistasConMasDiscos = artistas
    .filter(
      (artista) => artista.discos && artista.discos.length > cantidadDeDiscos
    )
    .sort((a, b) => b.discos.length - a.discos.length);
  artistasConMasDiscos.forEach((artista) => {
    console.log(`nombre: ${artista.nombre}, discos: ${artista.discos.length}`);
  });
  return artistasConMasDiscos;
}

function artistaConMasEntradasVendidas(artistas) {
  let artistaConMasEntradas = artistas.sort(
    (a, b) => (b.entradasVendidas || 0) - (a.entradasVendidas || 0)
  )[0];
  console.log(
    `nombre: ${artistaConMasEntradas.nombre}, entradas vendidas: ${artistaConMasEntradas.entradasVendidas}`
  );
  return artistaConMasEntradas;
}

function artistaConMayorRecaudacion(artistas) {
  let artistaMayorRecaudacion = artistas.reduce((max, artista) => {
    const recaudacion =
      (artista.entradasVendidas || 0) * (artista.costoEntradas || 0);
    const maxRecaudacion =
      (max.entradasVendidas || 0) * (max.costoEntradas || 0);
    return recaudacion > maxRecaudacion ? artista : max;
  });
  console.log(
    `nombre: ${artistaMayorRecaudacion.nombre}, Recaudación: ${
      (artistaMayorRecaudacion.entradasVendidas || 0) *
      (artistaMayorRecaudacion.costoEntradas || 0)
    }`
  );
  return artistaMayorRecaudacion;
}

function artistasConDiscoEnAnyo(anyo, artistas) {
  let artistasConDisco = artistas.filter(
    (artista) =>
      artista.discos && artista.discos.some((disco) => disco.anio === anyo)
  );
  artistasConDisco.forEach((artista) => {
    console.log(`nombre: ${artista.nombre}, Anyo del disco: ${anyo}`);
  });
  return artistasConDisco;
}

const artistaConMasCopias = (artistas) => {
  let artistaMasCopias = artistas.reduce((max, artista) => {
    const copias =
      artista.discos?.reduce((sum, disco) => sum + disco.copias, 0) || 0;
    const maxCopias =
      max.discos?.reduce((sum, disco) => sum + disco.copias, 0) || 0;
    return copias > maxCopias ? artista : max;
  });
  console.log(
    `nombre: ${artistaMasCopias.nombre}, total copias: ${
      artistaMasCopias.discos?.reduce((sum, disco) => sum + disco.copias, 0) ||
      0
    }`
  );
  return artistaMasCopias;
};
