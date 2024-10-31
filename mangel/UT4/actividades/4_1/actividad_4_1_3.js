//Declaramos el array
let juegos = ['Dragonborn', 'Skyrim', 'Dovahkiin', 'Dragon', 'Fire', 'Game'];
//Mostramos los elementos que tiene y cuantos tiene
alert("La cantidad de elementos que tiene el array juegos son: " + juegos.length);
alert("Estos son los juegos que tiene: " + juegos);
//añadimos estos dos nuevos elementos
juegos.unshift('Videojuego', 'Dragones');
//Mostramos de nuevo los elementos que tiene y cuantos tiene
alert("La cantidad de elementos que tiene el array juegos ahora son: " + juegos.length);
alert("El nuevo contenido es: " + juegos);
//Le pedimos al usuario un nuevo elemento y lo insertamos
juegos.unshift(prompt("Introduce un juego nuevo que quieras añadir:"));
//Mostramos de nuevo los elementos que tiene y cuantos tiene
alert("La cantidad de elementos que tiene el array juegos ahora son: " + juegos.length);
alert("El nuevo contenido es: " + juegos);