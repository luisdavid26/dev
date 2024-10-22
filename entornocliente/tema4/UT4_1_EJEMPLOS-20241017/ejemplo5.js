/**
 * .FILTER()
 */
const arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3];
let aprobados = arrayNotas.filter(function(nota) {
  if (nota >= 5) {
    return true;
  } else {
    return false;
  } 
});
console.log(aprobados); // aprobados = [5.2, 6, 9.75, 7.5]

/**
 * Podemos refactorizar esta función para que sea más compacta
 */

let aprobados2 = arrayNotas.filter(function(nota) {
  return nota >= 5;     // nota > =  5 se evalúa a 'true' si es cierto o 'false' si no lo es
});
console.log(aprobados2);

/**
 * Y usando funciones lambda la sintaxis queda mucho más simple
 */
let aprobados3 = arrayNotas.filter(nota => nota >=  5);
console.log(aprobados3);

/**
 * .FIND() - Como filter pero NO devuelve un array sino el primer elemento
 */

let primerAprobado = arrayNotas.find(nota  => nota >=  5);  // primerAprobado = 5.2
console.log(primerAprobado);

/**
 * .EVERY() / .SOME()
 */

const todosAprobados = arrayNotas.every(nota  => nota >=  5); // false
const algunAprobado = arrayNotas.some(nota  => nota >=  5); // true
console.log(todosAprobados);
console.log(algunAprobado);

/**
 * .MAP()
 */

let arrayNotasSubidas = arrayNotas.map(nota => Math.round(nota + (nota * 10/100)));
console.log(arrayNotasSubidas);

/**
 * .REDUCE()
 */
// Ejemplo: queremos obtener la suma de las notas

let sumaNotas = arrayNotas.reduce((total,nota)  => total += nota, 0); // total = 35.35
console.log(sumaNotas);
// podríamos haber omitido el valor inicial 0 para total
let sumaNotas2 = arrayNotas.reduce((total,nota)  => total += nota); // total = 35.35
console.log(sumaNotas2);

//Ejemplo: queremos obtener la nota más alta
let maxNota = arrayNotas.reduce((max,nota)  => nota > max ? nota : max) // max = 9.75
console.log(maxNota);

/**
 * .FOREACH()
 * Es el método más general de los vistos. 
 * No devuelve nada sino que permite realizar algo con cada elemento del array.
 */

arrayNotas.forEach((nota, indice)  => {
  console.log('El elemento de la posición ' + indice + ' es: ' + nota);
});

/**
 * .INCLUDES()
 */

console.log(arrayNotas.includes(7.5)); // true

/**
 * .Array.from()
 */

let arrayNotasSubidas2 = Array.from(arrayNotas, nota  => nota + (nota * 10/100));
console.log(arrayNotasSubidas2);

// Puede usarse para hacer una copia de un array, igual que slice.
const arrayA = [5.2, 3.9, 6, 9.75, 7.5, 3];
const arrayB = Array.from(arrayA);
console.log(arrayB);

