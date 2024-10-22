let elementos = ["Dragonborn", "Skyrim", "Dovahkiin", "Dragon", "Fire", "Game"];

//mostramos el array con sus elementos y el largo
console.log("numero de elementos:"+ elementos.length);
console.log("nontenido del array:"+ elementos);

//introduzca un caracter separador
let separador = prompt("introduce un caracter para que actue como separador entre los elementos:c");

// mostramos la cedana separada por el caracter del usuario
let cadenaseparada = elementos.join(separador);
console.log("cadena de elementos separados: "+ cadenaseparada);

//comprombamos el array
console.log("numero de elementos tras la operacion: "+ elementos.length);
console.log("contenido del array tras la operacion: "+ elementos);
