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
        if (!rimas.includes(rima)) {
          rimas.push(rima);
          return true;
        }
      } else {
        this.rimas.set(palabra, [rima]);
        return true;
      }
      return false;
    }
  
    obtenerRimas(palabra) {
      return this.rimas.get(palabra) || [];
    }
  
    eliminarRima(palabra, rima) {
      if (this.rimas.has(palabra)) {
        const rimas = this.rimas.get(palabra).filter(r => r !== rima);
        this.rimas.set(palabra, rimas);
        return true;
      }
      return false;
    }
  
    eliminarPalabra(palabra) {
      return this.rimas.delete(palabra);
    }
  
    buscarPorRima(rima) {
      const palabras = [];
      this.rimas.forEach((rimas, palabra) => {
        if (rimas.includes(rima)) palabras.push(palabra);
      });
      return palabras;
    }
  }