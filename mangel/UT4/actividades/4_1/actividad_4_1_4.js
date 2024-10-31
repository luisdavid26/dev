//Declaramos el array
let juegos = ['Dragonborn', 'Skyrim', 'Dovahkiin', 'Dragon', 'Fire', 'Game'];
//Mostramos los elementos que tiene y cuantos tiene
alert("La cantidad de elementos que tiene el array juegos son: " + juegos.length);
alert("Estos son los juegos que tiene: " + juegos);
//eliminamos un elemento y le damos el valor a una variable
let eliminado = juegos.pop();
//Mostramos de nuevo los elementos que tiene y cuantos tiene y al final que hemos eliminado
alert("La cantidad de elementos que tiene el array juegos ahora son: " + juegos.length);
alert("El nuevo contenido es: " + juegos);
alert("El elemento eliminado es: " + eliminado)
