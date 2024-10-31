//Declaramos el array
let juegos = ['Dragonborn', 'Skyrim', 'Dovahkiin', 'Dragon', 'Fire', 'Game'];
//Mostramos la cantidad de elementos que tiene
alert("La cantidad de elementos que tiene el array juegos son: " + juegos.length);
//Mostramos 
juegos.forEach((element, i) => {
    console.log(i + ": " + element);
});
let primerIndice = prompt("Elige el indice del primer elemento para el array entre 0 y " + (juegos.length - 1));
let ultimoIndice = prompt("Elige el indice del ultimo elemento para el array entre 0 y " + (juegos.length - 1));

if (primerIndice < ultimoIndice) {
    juegos = juegos.slice(primerIndice, ultimoIndice + 1);
} else if (primerIndice > ultimoIndice) {
    juegos = juegos.slice(ultimoIndice, primerIndice + 1);
} else {
    juegos = juegos.slice(primerIndice);
}
//Mostramos de nuevo los elementos que tiene y cuantos tiene
alert("La cantidad de elementos que tiene el array juegos ahora son: " + juegos.length);
alert("El nuevo contenido es: " + juegos);