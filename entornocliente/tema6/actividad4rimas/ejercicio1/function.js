let diccionario = new Map();

function agregarrima(palabra, rima) {
  if (!palabra || !rima) {
    console.log("Ambos campos, palabra y rima, son obligatorios.");
    return;
  }

  if (diccionario.has(palabra)) {
    const rimas = diccionario.get(palabra);
    if (rimas.includes(rima)) {
      console.log(`La rima ${rima} ya existe para la palabra ${palabra}.`);
    } else {
      rimas.push(rima); 
      console.log(`La rima ${rima} ha sido agregada a la palabra ${palabra}.`);
    }
  } else {
    diccionario.set(palabra, [rima]);
    console.log(`La palabra ${palabra} ha sido agregada con su rima ${rima}.`);
  }
}


function obtenerrimas(palabra) {
  if (!palabra) {
    console.log("El campo palabra es obligatorio.");
    return false;
  }
  if (diccionario.has(palabra)) {
    return diccionario.get(palabra); 
  } else {
    console.log(`La palabra ${palabra} no existe en el diccionario.`);
  return false;
  }
}

function eliminarrima(palabra, rima) {
  if (!palabra || !rima) {
    console.log("Ambos campos,son obligatorios.");
    return;
  }
  if (diccionario.has(palabra)) {
    const rimas = diccionario.get(palabra).filter((rimaborrar) => rimaborrar !== rima);
    if (rimas.length > 0) {
      diccionario.set(palabra, rimas);
      console.log(`La rima ${rima} ha sido eliminada de la palabra ${palabra}.`);
      return true;
    } 
  } else {
    console.log(`La palabra ${palabra} no existe en el diccionario.`);
    return false;
  }
}

function eliminarpalabra(palabra) {
  if (!palabra) {
    console.log(" la palabra es obligatoria.");
    return;
  }
  if (diccionario.has(palabra)) {
    const palabravar = diccionario.get(palabra);
    if (palabravar.length > 0) {
      diccionario.delete(palabra); // eliminamos la palabra 
      console.log(`La palabra ${palabra} ha sido eliminada`);
      return true;
    }
  } else {
    console.log(`La palabra ${palabra} no existe en el diccionario.`);
    return false;

  }
}