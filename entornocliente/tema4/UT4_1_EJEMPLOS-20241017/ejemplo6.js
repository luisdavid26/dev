/**
 * Desestructuración de Arrays
 */

// extraemos el primer y segundo valor del array elements 
// en una variable denominada first y otra llamada last
const elements = [5, 2];
const [first, last] = elements;    // first = 5, last = 2
console.log(first, last);

// hacemos lo mismo en las variables first2 y second, 
// pero como el array tiene más elementos y sólo hemos indicado dos variables, 
// el resto son descartadas.
const elements2 = [5, 4, 3, 2];
const [first2, second] = elements2;  // first = 5, second = 4, rest = discard
console.log(first2,second);

// no colocamos ningún elemento, por lo tanto, ese dato se descartará.
const elements3 = [5, 4, 3, 2];
const [first3, , third] = elements3; // first = 5, third = 3, rest = discard
console.log(first3,third);

//  hay menos elementos que variables, 
// por lo que first toma el primer (y único) elemento y 
// second se queda sin ningún valor (obtiene el valor undefined)
const elements4 = [4];
const [first4, second2] = elements4;  // first = 4, second = undefined
console.log(first4,second2);

/**
 * La desectruturación nos permite realizar Intercambio de Variables
 */

let a = 10;
let b = 5;

[a, b] = [b, a];
console.log(a,b);

/**
 * Spread (Expandir)
 */
// pasamos un array de 5 elementos a la función debug() 
// la cuál ha desestructurado el array y lo ha expandido en elementos individuales
const debug = (param) => console.log(...param);
const array = [1, 2, 3, 4, 5];
debug(array);

/**
 * Rest (Agrupar)
 */
// el ...param está agrupando esas 5 variables en un array
const debug2 = (...param) => console.log(param);
debug2(a,b);

/**
 * Desestructuración y Rest
 */
const arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3]
const [primera, , ...resto] = arrayNotas; // primera = 5.2, resto = [6, 9.75, 7.5, 3]
console.log(resto);

/**
 * Reestructuración de array
 */

const pair = [3, 4];

// Usando desestructuración + spread
const complete = [1, 2, ...pair, 5];  // [1, 2, 3, 4, 5]
console.log (complete);

// Sin usar desestructuración
const complete2 = [1, 2, pair, 5]; // [1, 2, [3, 4], 5]
console.log(complete2);

/**
 * También sirve para copiar array, como Array.from() o .slice();
 */
const arrayA = [2, 4, 6];
const copiaDeA = [...arrayA];
console.log(copiaDeA);