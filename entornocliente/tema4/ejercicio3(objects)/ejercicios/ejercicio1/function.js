let diccionario = new Map();
 function agregarRima(palabra, rima) {//agreamos rima al mapa con un push y va asociada a la palabra
  if (diccionario.has(palabra)) {
    diccionario.get(palabra).push(diccionario.rima);
  } else {
    diccionario.set(palabra, [rima]);
  }
}
 function obtenerRimas(palabra) {//buscamos las rimas en el mapa por medio de su palabra
  if (diccionario.has(palabra)) {
    return diccionario.get(diccionario.rima);
  } else {
    print(`la palabra ${palabra} no existe en el direcionario`);
  }
}
 function eliminarRima(palabra, rima) {
  if (diccionario.has(palabra)) { //si existe la palabra 
    const rimas = diccionario.get(palabra).filter((rimaborrar) => rimaborrar !== rimaborrar); //creamos una nueva rima sin esas rimas en especifico
    if (rimas.length > 0) {
      diccionario.set(palabra, rimas); //hacemos un set con  los nuevos parametros sin esas rimas 
      print(`las rimas que has espcificadp de la palabra: ${palabra} han sido eliminadas correctamente`);
    } else {
      diccionario.delete(palabra); //si ya no tiene rimas la palabra , la borramos directamente
    }
  }
}

 function eliminarPalabra(palabra) {
  if (diccionario.has(palabra)) {
    diccionario.delete(palabra);
  } else {
    console.log(`La palabra ${palabra} no existe`);
  }
}
