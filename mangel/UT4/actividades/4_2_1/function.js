/**
 * 
 * @param {*} artistas 
 * @returns 
 */
function artistasSolistas(artistas) {
    return artistas.filter((artista) => artista.solista);
}
/**
 * 
 * @param {*} edad 
 * @param {*} artistas 
 * @returns 
 */
function artistasPorEdad(edad, artistas) {
    return artistas.filter((artista) => artista.edad == edad);
}
/**
 * 
 * @param {*} artistas 
 * @returns 
 */
function cantidadDeArtistasPorInstrumento(artistas) {
    return artistas.reduce(((contador, artista) => {
        let instrumento = artista.instrumento;
        contador[instrumento] = contador[instrumento] ? contador[instrumento] + 1 : 1;
    }));
}
/**
 * 
 * @param {*} artista 
 * @returns 
 */
function cantidadDeArtistasPorGenero(artistas) {
    return artistas.reduce(((contador, artista) => {
        let genero = artista.genero;
        contador[genero] = contador[genero] ? contador[genero] + 1 : 1;
    }));
}
/**
 * 
 * @param {*} artistas 
 * @param {*} cantidadDiscos 
 * @returns 
 */
function artistasConMasDiscosQue(artistas, cantidadDiscos) {
    return artistas.filter(artista => artista.discos && artista.discos.length > cantidadDiscos)
        .sort((a,b) => b.discos.length - a.discos.length);
}

function artistaConMasEntradasVendidas(artistas) {
    return 
}

function artistaConMayorRecaudacion() {
    
}

function artistasConDiscoEnAnyo() {
    
}

function artistaConMasCopias() {
    
}