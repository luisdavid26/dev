export function artistasSolistas(artistas) {
  return artistas.filter((artista) => artista.solista);
}
export function artistasPorEdad(edad, artistas) {
  return artistas.filter((artista) => artista.edad === edad);
}
export function cantidadDeArtistasPorInstrumento(artistas) {
  return artistas.reduce((cont, artista) => {
    const instrumento = artista.instrumento;
    cont[instrumento] = cont[instrumento] ? cont[instrumento] + 1 : 1;
    return cont;
  }, {});
}
export function cantidadDeArtistasPorGenero(artistas) {
  return artista.reduce((cont, artista) => {
    const genero = artista.genero;
    cont[genero] = cont[genero] ? cont[genero] + 1 : 1;
    return cont;
  }, {});
}
export function artistasConMasDiscosQue(cantidadDeDiscos,artistas) {
    return artistas.filter(artista=>artista.discos&&artista.discos.length > cantidadDeDiscos)
    .sort((a,b)=>b.discos.length-a.discos.length);
}
export function artistaConMasEntradasVendidas(artistas) {
    return artistas.filter(artista=>artista.entradasVendidas&&artista.entradasVendidas.length > entradasVendidas)
    .sort((a,b)=>b.entradasVendidas.length-a.entradasVendidas.length);
}
export function artistaConMayorRecaudacion(artistas) {
  
}
export function artistasConDiscoEnAnyo(anyo) {
  
}
export function artistaConMasCopias() {
  
  
}