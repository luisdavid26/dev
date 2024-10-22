let elementos = ['Dragonborn', 'Skyrim', 'Dovahkiin', 'Dragon', 'Fire', 'Game'];

//mostramos el numero de elementos y el contenido del array
console.log('Número de elementos:', elementos.length);
console.log('Contenido del array:', elementos);

//eiminamos el primer elemento
let eliminado = elementos.shift();

//mostramos el numero de elementos y el contenido del array
console.log('Número de elementos después de shift:', elementos.length);
console.log('Contenido del array después de shift:', elementos);
console.log('Elemento eliminado:', eliminado);
