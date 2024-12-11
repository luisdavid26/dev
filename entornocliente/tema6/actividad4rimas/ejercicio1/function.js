let diccionario = new Map();
diccionario.set("cielo", ["suelo", "vuelo", "consuelo"]);
diccionario.set("mar", ["zar", "estar"]);
diccionario.set("sol", ["caracol", "farol", "control"]);
diccionario.set("flor", ["amor", "olor"]);
diccionario.set("luz", ["cruz", "vez"]);

//agregar una rima a una palabra en el diccionario
function agregarrima(palabra, rima) {
  //verifica que palabra y rima no esten vacias
  if (!palabra || !rima) {
    console.log("la palabra y la rima, son obligatorias");
    return;
  }

  //si la palabra ya existe en el diccionario
  if (diccionario.has(palabra)) {
    const rimas = diccionario.get(palabra); //obtiene la lista de rimas de la palabra
    if (rimas.includes(rima)) {
      console.log(`la rima ${rima} ya existe para la palabra ${palabra}.`);
    } else {
      rimas.push(rima); //agrega la nueva rima a la lista
      console.log(`la rima ${rima} ha sido agregada a la palabra ${palabra}.`);
    }
  } else {
    //si la palabra no existe, la crea junto con su rima
    diccionario.set(palabra, [rima]);
    console.log(`la palabra ${palabra} ha sido agregada con su rima ${rima}.`);
  }
}

//obtener todas las rimas de una palabra
function obtenerrimas(palabra) {
  if (!palabra) {
    console.log("el campo palabra es obligatorio.");
    return [];
  }
  if (diccionario.has(palabra)) {
    return diccionario.get(palabra); //devuelve las rimas asociadas
  } else {
    console.log(`la palabra ${palabra} no existe en el diccionario`);
    return [];
  }
}

//eliminar una rima especifica de una palabra
function eliminarrima(palabra, rima) {
  if (!palabra || !rima) {
    console.log("ambos campos, son obligatorios");
    return;
  }
  if (diccionario.has(palabra)) {
    //filtra la lista de rimas, excepto la que se desea eliminar
    const rimas = diccionario.get(palabra).filter((rimaborrar) => rimaborrar !== rima);
    if (rimas.length > 0) {
      diccionario.set(palabra, rimas); //actualiza la lista de rimas
      console.log(`la rima ${rima} ha sido eliminada de la palabra ${palabra}.`);
      return true;
    }
  } else {
    console.log(`la palabra ${palabra} no existe en el diccionario`);
    return false;
  }
}

//eliminar una palabra completa del diccionario
function eliminarpalabra(palabra) {
  if (!palabra) {
    console.log("la palabra es obligatoria.");
    return;
  }
  if (diccionario.has(palabra)) {
    diccionario.delete(palabra); //elimina la palabra
    console.log(`la palabra ${palabra} ha sido eliminada`);
    return true;
  } else {
    console.log(`la palabra ${palabra} no existe en el diccionario.`);
    return false;
  }
}

//buscar todas las palabras que contienen una rima especifica
function buscarpalabras(rima) {
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
