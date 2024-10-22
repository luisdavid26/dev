
/**
 * Método splice: Permite eliminar elementos de cualquier posición del array 
 * y/o insertar otros en su lugar. Devuelve un array con los elementos eliminados.
 * 
 * Array.splice(posicion, num. de elementos a eliminar, 1º elemento a insertar, 2º elemento a insertar, 3º...)
 * 
 */
let listaCompra = ['Peras', 'Manzanas', 'Kiwis', 'Plátanos', 'Mandarinas'];
// Método toString()
let listaCompraCadena = listaCompra.toString();
console.log(listaCompra);
console.log('listaCompraCadena: '+listaCompraCadena);

let manzanas = listaCompra.splice(1, 1); // eliminamos Manzanas
console.log('VALOR manzanas: '+manzanas);
console.log('CONTENIDO Lista Compra .toString():\n');
// Método toString()
console.log(listaCompra.toString());


//Añade detrás de los Plátanos Naranjas y Sandía
listaCompra.splice(3, 0, 'Naranjas', 'Sandías'); 
console.log('CONTENIDO Lista Compra .join():\n');
// Método join()
console.log(listaCompra.join('--separador--'));

listaCompraCadena = listaCompra.join('--separador--');

// Método split()
let listaCompraSplitada = listaCompraCadena.split('--separador--'); 
console.log('CONTENIDO listaCompraSplitada:\n');
console.log(listaCompraSplitada);
