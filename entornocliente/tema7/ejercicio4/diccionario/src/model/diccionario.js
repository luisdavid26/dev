class Diccionario {
  constructor() {
    this.rimas = new Map();

    this.rimas.set("cielo", ["suelo", "vuelo", "consuelo"]);
    this.rimas.set("mar", ["zar", "estar"]);
    this.rimas.set("sol", ["caracol", "farol", "control"]);
    this.rimas.set("flor", ["amor", "olor"]);
    this.rimas.set("luz", ["cruz", "vez"]);
  }

  agregarRima(palabra, rima) {
    if (!palabra || !rima) return false;

    if (this.rimas.has(palabra)) {
      const rimas = this.rimas.get(palabra);
      
      // verifica si la rima no esta en la lista, la agrega
      if (!rimas.includes(rima)) {
        rimas.push(rima);
        return true;
      }
    } else {
      // si la palabra no existe, la agrega con la nueva rima
      this.rimas.set(palabra, [rima]);
      return true;
    }
    return false;
  }

  obtenerRimas(palabra) {
    return this.rimas.get(palabra) || [];
  }

  eliminarRima(palabra, rima) {
    // verifica si la palabra existe en el mapa
    if (this.rimas.has(palabra)) {
      // filtra la rima y la elimina de la lista
      const rimas = this.rimas.get(palabra).filter(r => r !== rima);
      this.rimas.set(palabra, rimas);
      return true;
    }
    return false;
  }

  eliminarPalabra(palabra) {
    // elimina la palabra completa del mapa y retorna true si se elimino
    return this.rimas.delete(palabra);
  }

  buscarPorRima(rima) {
    const palabras = [];
    
    // recorre todas las palabras en el mapa
    this.rimas.forEach((rimas, palabra) => {
      // si la rima esta en la lista de rimas de la palabra, la agrega al resultado
      if (rimas.includes(rima)) palabras.push(palabra);
    });
    
    return palabras;
  }
}
