/**
 * Propiedad length
 */
const arra1 = ['Lunes', 'Martes', 2, 4, 6];
console.log(arra1.length); // imprime 5

// se puede modificar el tamaño del array asignando un nuevo valor a `length`

arra1.length = 3; // ahora arra1 = ['Lunes', 'Martes', 2];
console.log(arra1[3]);

/**
 * Añadir elementos: push and unshift
 */

const  arra2= ['Lunes', 'Martes', 2, 4, 6];
arra2.push('Juan');   // ahora arra2 = ['Lunes', 'Martes', 2, 4, 6, 'Juan']
arra2.unshift(7);     // ahora arra2 = [7, 'Lunes', 'Martes', 2, 4, 6, 'Juan']
console.log(arra2[0]);
console.log(arra2[6]);


/**
 * Eliminar elementos: pop and shift
 */
// pop elimina el último elemento del array y lo devuelve (desapila)
let  eleUltimo= arra2.pop(); // ahora arra2 = [7, 'Lunes', 'Martes', 2, 4, 6] y eleUltimo = 'Juan'
console.log('eleUltimo: '+eleUltimo);
// shift elimina el primer elemento del array y lo devuelve (desapila)
let elePrimero = arra2.shift(); // ahora arra2 = ['Lunes', 'Martes', 2, 4, 6] y elePrimero = 7
console.log('elePrimero: '+elePrimero);

/**
 * Método splice: Permite eliminar elementos de cualquier posición del array 
 * y/o insertar otros en su lugar. Devuelve un array con los elementos eliminados.
 * 
 * Array.splice(posicion, num. de elementos a eliminar, 1º elemento a insertar, 2º elemento a insertar, 3º...)
 * 
 */
let listaCompra = ['Peras', 'Manzanas', 'Kiwis', 'Plátanos', 'Mandarinas'];
let manzanas = listaCompra.splice(1, 1); // eliminamos Manzanas
console.log('VALOR manzanas:');
console.log(manzanas);
console.log('CONTENIDO Lista Compra:\n');
listaCompra.forEach(element => { 
  console.log(element);
});

//Añade detrás de los Plátanos Naranjas y Sandía
listaCompra.splice(3, 0, 'Naranjas', 'Sandías'); 
console.log('CONTENIDO Lista Compra:\n');
listaCompra.forEach(element => { 
  console.log(element);
});

//Quita los Kiwis y pon en su lugar Cerezas y Nísperos
listaCompra.splice(1, 1, 'Cerezas', 'Nísperos'); 
console.log('CONTENIDO Lista Compra:\n');
listaCompra.forEach(element => { 
  console.log(element);
});

/**
 * Método slice: devuelve un subarray con los elementos indicados 
 * sin modificar el array original.
 * 
 * Array.slice(posicion, posicionFinNOincluida);
 * 
 */
let arra3 = ['Lunes', 'Martes', 2, 4, 6];
let subArra3 = arra3.slice(1, 3); // ahora arra3 = ['Lunes', 'Martes', 2, 4, 6] y subArra3 = ['Martes', 2]
console.log('\nElementos arra3:\n');
arra3.forEach(element => { 
  console.log(element);
});
console.log('\nElementos subArra3:\n');
subArra3.forEach(element => { 
  console.log(element);
});

// útil para hacer una copia de un array
let arra4 = [2, 4, 6];
let copiaArra4 = arra4.slice();
console.log('\nElementos copiaArra4:\n');
copiaArra4.forEach(element => { 
  console.log(element);
});
// ---
let copiaArra5 = copiaArra4;
console.log('\nElementos copiaArra5:\n');
copiaArra5.forEach(element => { 
  console.log(element);
});

copiaArra4.push(100);

console.log('\nElementos copiaArra5 Otra Vez:\n');
copiaArra5.forEach(element => { 
  console.log(element);
});

console.log('\nElementos arra4 Original:\n');
arra4.forEach(element => { 
  console.log(element);
});