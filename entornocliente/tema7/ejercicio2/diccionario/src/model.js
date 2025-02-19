// model.js
export class DiccionarioRimas {
    constructor() {
      this.diccionario = new Map();
      this.init();
    }
  
    init() {
      this.diccionario.set("cielo", ["suelo", "vuelo", "consuelo"]);
      this.diccionario.set("mar", ["zar", "estar"]);
      this.diccionario.set("sol", ["caracol", "farol", "control"]);
      this.diccionario.set("flor", ["amor", "olor"]);
      this.diccionario.set("luz", ["cruz", "vez"]);
    }
    
    //agregar una nueva rima

    agregarRima(palabra, rima) {
      if (!palabra || !rima) return { error: "La palabra y la rima son obligatorias" };
      if (this.diccionario.has(palabra)) {
        const rimas = this.diccionario.get(palabra);
        if (rimas.includes(rima)) return { error: `La rima ${rima} ya existe para ${palabra}` };
        rimas.push(rima);
      } else {
        this.diccionario.set(palabra, [rima]);
      }
      return { anyadido: `Rima ${rima} agregada a ${palabra}` };
    }
  //obtener todas las rimas de una palabra

    obtenerRimas(palabra) {
      if (!palabra) return { error: "La palabra es obligatoria" };
      if (this.diccionario.has(palabra)) return this.diccionario.get(palabra);
      return { error: `La palabra ${palabra} no existe en el diccionario` };
    }
  //eliminar una rima especifica de una palabra

    eliminarRima(palabra, rima) {
      if (!palabra || !rima) return { error: "Ambos campos son obligatorios" };
      if (this.diccionario.has(palabra)) {
        const rimas = this.diccionario.get(palabra).filter((r) => r !== rima);
        if (rimas.length) {
          this.diccionario.set(palabra, rimas);
          return { anyadido: `Rima ${rima} eliminada de ${palabra}` };
        }
      }
      return { error: `La palabra ${palabra} no tiene la rima ${rima}` };
    }
  //eliminar una palabra completa del diccionario

    eliminarPalabra(palabra) {
      if (!palabra) return { error: "La palabra es obligatoria" };
      if (this.diccionario.has(palabra)) {
        this.diccionario.delete(palabra);
        return { anyadido: `Palabra ${palabra} eliminada del diccionario` };
      }
      return { error: `La palabra ${palabra} no existe` };
    }
  //buscar todas las palabras que contienen una rima especifica

    buscarPorRima(rima) {
      if (!rima) return { error: "El campo rima es obligatorio" };
      const palabras = [];
      this.diccionario.forEach((rimas, palabra) => {
        if (rimas.includes(rima)) palabras.push(palabra);
      });
      return palabras.length ? palabras : { error: "No se encontraron palabras con esta rima" };
    }
    buscarpalabras(rima) {
        if (!rima) {
          console.log("el campo rima es obligatorio.");
          return [];
        }
      
        const palabrasencontradas = [];
        diccionario.forEach((rimas, palabra) => {
          if (rimas.includes(rima)) {
            palabrasencontradas.push(palabra); //agrega la palabra a la lista si tiene la rima
          }
        });
      
        if (palabrasencontradas.length > 0) {
          console.log(`las palabras encontradas son: ${palabrasencontradas.join(", ")}.`);
        } else {
          console.log("no se encontraron palabras con esta rima.");
        }
      
        return palabrasencontradas; //devuelve las palabras encontradas
      }
  }
  