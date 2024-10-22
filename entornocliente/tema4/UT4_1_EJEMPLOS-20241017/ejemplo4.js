
/**
 * Método Array.sort([compareFunc]): Ordena alfabéticamente los elementos del array.
 * Si no se provee compareFunction, los elementos son ordenados 
 * convirtiéndolos a strings y comparando la posición del valor Unicode 
 * de dichos strings. Por ejemplo, "Cherry" viene antes que "banana" 
 * (porque las mayúsculas van antes que las minúsculas en la codificación Unicode).
 * En un ordenamiento numérico, 9 está antes que 80, pero dado que los números son 
 * convertidos a strings y ordenados según el valor Unicode, 
 * el resultado será "80" antes que "9". 
 */
let listaCompra = ['Peras', 'Manzanas', 'Kiwis', 'Plátanos', 'Mandarinas',2,5,13,9,80,45];
listaCompra.sort();
console.log('Array Ordenado (Unicode) listaCompra: \n');
console.log(listaCompra);

//INVESTIGAR-- investigado: estaba apuntando al mismo espacio de memoria más abajo...
let listaCompra2 = ['Cherry', 'banana', 'Kiwis', 'Plátanos', 'Mandarinas'];
let listaCompra3 = listaCompra2.slice();
listaCompra2.sort();
console.log('Array Ordenado (Unicode) listaCompra2: \n');
console.log(listaCompra2);

/**
 * Criterios de ordenación:
 * - Si compareFunction(a, b) es menor que 0, se sitúa a en un indice menor que b. 
 * Es decir, a viene primero.
 * - Si compareFunction(a, b) retorna 0, se deja a y b sin cambios entre ellos, 
 * pero ordenados con respecto a todos los elementos diferentes.
 * - Si compareFunction(a, b) es mayor que 0, se sitúa b en un indice menor que a.
 * Es decir, b viene primero.
 */

let items = [
    { name: "Edward", age: 21 },
    { name: "Sharpe", age: 37 },
    { name: "And", age: 45 },
    { name: "The", age: -12 },
    { name: "Magnetic", age: 13 },
    { name: "Zeros", age: 37 },
  ];
let items2 = items.slice();//si no se hace la copia así estamos apuntando al mismo espacio de memoria
// Ordenación ascendente por valor
items.sort((valor1, valor2) => {

    if (valor1.age < valor2.age) {
        return -1;
    }
    if (valor1.age > valor2.age) {
        return 1;
    }

    // son iguales
    return 0;
});
console.log('Ordenación Numérica Ascendente: ');
console.log(items);

// Ordenación a la inversa por valor
items2.sort((valor1, valor2) => {

    if (valor1.age > valor2.age) {
        return -1;
    }
    if (valor1.age < valor2.age) {
        return 1;
    }
    // son iguales
    return 0;
});
console.log('Ordenación Numérica Descendente: ');
console.log(items2);

/**
 * Queda claro que por el tratamiento de String es preciso llevar cuidado con números y cadenas.
 */
const numericos1 = [40, 1, 5, 200];
console.log('Numericos1: '+numericos1.sort()); //[ 1, 200, 40, 5 ]

let numericos2 = [40, 1, 5, 200];
numericos2.sort((a, b) => a - b);// Mediante operación
console.log('Numericos2: '+numericos2); // [1, 5, 40, 200]

listaCompra3.sort(function(elem1, elem2) {
    return elem1.localeCompare(elem2);//Para ordenar strings con characters no ASCII
  });
console.log('Array Ordenado con criterio listaCompra2: \n');
console.log(listaCompra3);

let alumnos = [
    {
      id: 1,
      name: 'Emilio I',
      course: '2nDAW',
      age: 21
    },
    {
      id: 2,
      name: 'Zaragoza',
      course: '2nDAW',
      age: 20
    },
    {
        id: 3,
        name: 'Pepe',
        course: '2nDAW',
        age: 18
      },
  ];
  let alumnosCopia = alumnos.slice();
  let alumnosOrdEdad = alumnos.sort((alumno1, alumno2)  => alumno1.age - alumno2.age);
  console.log(alumnosOrdEdad);
  let alumnosOrdNombre = alumnosCopia.sort((alumno1, alumno2)  => alumno1.name.localeCompare(alumno2.name));
  console.log(alumnosOrdNombre);
