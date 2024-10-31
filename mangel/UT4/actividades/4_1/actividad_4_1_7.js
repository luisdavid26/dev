//Declaramos el array
let juegos = ['Dragonborn', 'Skyrim', 'Dovahkiin', 'Dragon', 'Fire', 'Game'];
//Mostramos los elementos que tiene y cuantos tiene
alert("La cantidad de elementos que tiene el array juegos son: " + juegos.length);
alert("Estos son los juegos que tiene: " + juegos);
//Aqui le pedimos al usuario un caracter para mostrar el array con ese caracter entre medias
let caracter = prompt("Dame un caracter para separar los elementos");
alert("Aqui tienes el array separado " + juegos.join(caracter));
//Mostramos de nuevo los elementos que tiene y cuantos tiene y al final que hemos eliminado
alert("La cantidad de elementos que tiene el array juegos ahora son: " + juegos.length);
alert("Estos son los juegos que tiene: " + juegos);