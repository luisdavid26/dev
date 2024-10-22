let elementos = ['Dragonborn', 'Skyrim', 'Dovahkiin', 'Dragon', 'Fire', 'Game'];

//mostramos ellargo del array y el contenido
console.log("el numero de elementos en el array es:" +elementos.length);
console.log("contenido del array: "+elementos);

//hacemos push de los nuevos elementos
elementos.unshift("Videojuego", "Dragones");

//mostramos otra vez el largo y el contenido del array
console.log("el numero de elementos en el array ahora es:" +elementos.length);
console.log("contenido del array actualizado: "+elementos);

//solicitamos una cadena de texto
let nuevoelemento = prompt("introduce una cadena de texto para anyadir al array:");

//anyadimos la cadena 
elementos.unshift(nuevoelemento);

//mostramos el largo del array el contenido final
console.log("el numero de elementos en el array es: "+ elementos.length);
console.log("contenido del array: "+elementos);
