let diccionario = new Map();

function agregarRima(palabra, rima) {
  if (!palabra || !rima) {
    console.log("Ambos campos, palabra y rima, son obligatorios.");
    return;
  }
  if (diccionario.has(palabra)) {
    diccionario.get(palabra).push(rima); // Agregamos la nueva rima
  } else {
    diccionario.set(palabra, [rima]); // Creamos una nueva entrada con la palabra y la rima
  }
  console.log(`La rima "${rima}" ha sido agregada a la palabra "${palabra}".`);
}

function obtenerRimas(palabra) {
  if (!palabra) {
    console.log("El campo palabra es obligatorio.");
    return;
  }
  if (diccionario.has(palabra)) {
    return diccionario.get(palabra); // Devolvemos las rimas asociadas a la palabra
  } else {
    console.log(`La palabra "${palabra}" no existe en el diccionario.`);
  }
}

function eliminarRima(palabra, rima) {
  if (!palabra || !rima) {
    console.log("Ambos campos, palabra y rima, son obligatorios.");
    return;
  }
  if (diccionario.has(palabra)) {
    const rimas = diccionario.get(palabra).filter((rimaborrar) => rimaborrar !== rima);
    if (rimas.length > 0) {
      diccionario.set(palabra, rimas); // Actualizamos las rimas
      console.log(`La rima "${rima}" ha sido eliminada de la palabra "${palabra}".`);
    } else {
      diccionario.delete(palabra); // Eliminamos la palabra si ya no tiene rimas
      console.log(`La palabra "${palabra}" ha sido eliminada, ya que no tiene más rimas.`);
    }
  } else {
    console.log(`La palabra "${palabra}" no existe en el diccionario.`);
  }
}