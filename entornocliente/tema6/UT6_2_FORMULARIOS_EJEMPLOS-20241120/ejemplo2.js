let str = "I am amazed in America";

let reg = /am/g; // búsqueda global - 2 coincidencias

let prueba = 'fasjdk';
console.log(reg instanceof RegExp); // true - comprobación de instancia de la clase RegExp
console.log(prueba instanceof RegExp); // false - comprobación de instancia de la clase RegExp

/**
 * expr.test(cadena)
 */
console.log(reg.test(str)); // Imprime true
console.log(reg.test(str)); // Imprime true
console.log(reg.test(str)); // Imprime false, hay solo dos coincidencias

let reg2 = /am/gi;           // global, ahora no distinguirá mayúsculas y minúsculas
console.log(reg2.test(str)); // Imprime true
console.log(reg2.test(str)); // Imprime true
console.log(reg2.test(str)); // Imprime true. Ahora tenemos 3 coincidencias con este nuevo patrón
console.log(reg2.test(str)); // Imprime false.

/**
 * expr.exec(cadena)
 */

/*  Esto imprimirá:
  * Patrón encontrado!: am, en la posición: 2
  * Patrón encontrado!: am, en la posición: 5 */
let match;
while(match = reg.exec(str)) {
    console.log("Patrón encontrado!: " + match[0] + ", en la posición: " + match.index);
}

/* Esto imprimirá:
  * Patrón encontrado!: am, en la posición: 2
  * Patrón encontrado!: am, en la posición: 5
  * Patrón encontrado!: Am, en la posición: 15 */
let match2;
while(match2 = reg2.exec(str)) {
    console.log("Patrón encontrado!: " + match2[0] + ", en la posición: " + match2.index);
}

/**
 * cadena.match(expr)
 */
const str3 = "Ayer fue 10/10/2024 y no me acuerdo que comí el 19/07/2023";
const fechaReg = /\d{2}\/\d{2}\/\d{4}/g;
console.log(str3.match(fechaReg));

/**
 * cadena.replace(expr, cadena2)
 */
console.log(str.replace(/am/gi, "xx")); // Imprime "I xx xxazed in xxerica"
console.log(str.replace(/am/gi, function(match) {
    return "-" + match.toUpperCase() + "-";
})); // Imprime "I -AM- -AM-azed in -AM-erica"

/**
 * Formateo fecha
 */
const str4 = str3.replace(fechaReg, (match) => {
    const [dia, mes, anyo] = match.split("/");
    const date = new Date(`${anyo}-${mes}-${dia}`);
    return new Intl.DateTimeFormat('es', {
        day: 'numeric', month: 'long', year: 'numeric'
    }).format(date);
});
console.log(str4);