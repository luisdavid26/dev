let str = "Javascript es mejor que Java";
let str2 = "PHP";

//at()
//devuelve el caracter en la posicion que le digas
console.log(str.at(0));//en este caso sera la j
//charAt()
//devuelve el caracter en la posicion que le pases
console.log(str.charAt(0)); //en este caso sera la j

//charCodeAt()
//devuelve el codigo Unicode del caracter en la posicion.
console.log(str.charCodeAt(0)); //74 que es el codigo para referirse a la j

//codePointAt()
//similar a charCodeAt
console.log(str.codePointAt(0)); //74 que es para referirse a la j

//concat()
//une strings sin importar cuantos sean
console.log(str.concat(" es ", str2)); //nos quedaria un string con el valor de Java script es mejor que Java es PHP

//constructor
//te dice que la funcion constructora del string es 'String' que es la que usa internamente JS para crear una cadena o una palabra que es string()
console.log(str.constructor === String); //true

//endsWith()
//verifica si la cadena termina con lo que le pases
console.log(str.endsWith("Html")); //que seria false

//fromCharCode()
//crea un string a partir de codigos Unicode.
console.log(String.fromCharCode(74, 97, 118, 97)); // "java"

//includes()
//verifica si la cadena contiene la subcadena que se le pasa 
console.log(str.includes("es")); // true

//length
//te dice cuantos caracteres tiene el string
console.log(str.length); // 22

//localeCompare()
//compara dos strings segun el idioma del navegador que se este utilizando
console.log(str.localeCompare("Javascript")); // -1 (porque 'j' es menor que 'J')

//match(regex)
//busca coincidencias con una expresion regular en la cadena que se le pida
console.log(str.match(/e./g)); // ['es', 'ej', 'e ']

//padEnd(targetLength, padString)
//rellena la cadena por el final hasta que alcance la longitud deseada.
console.log(str.padEnd(40, "*")); // "Java script es mejor que Java***********"

//padStart(targetLength, padString)
//igual que padEnd, pero se rellena por el inicio
console.log(str.padStart(40, "*")); // "***********Java script es mejor que Java"

//prototype
//te muestra el prototipo del objeto String
console.log(String.prototype); // [object String prototype]

//repeat(count)
//repite el string tantas veces se le diga
console.log(str.repeat(2)); // "Java script es mejor que JavaJava script es mejor que Java"

//replace(searchValue, newValue)
//reemplaza la primera coincidencia de una subcadena por otra
console.log(str.replace("Java", "fantastico")); // fantasticoscript es mejor que Java

//replaceAll(searchValue, newValue)
//reemplaza todas las coincidencias de una subcadena por otra
console.log("abcabc".replaceAll("a", "ibcibc")); // "zbczbc"

//search(regex)
//busca una coincidencia con una expresion regular y te da el indice.
console.log(str.search(/es/)); // 11

//slice(start, end)
//corta el string desde el indice start hasta donde se le indique
console.log(str.slice(0, 10)); // "Javascript"

//split(separator)
//divide el string en un array usando el separador que le pases
console.log(str.split(" ")); // ['Javascript', 'es', 'mejor', 'que', 'Java']

//startsWith(substring)
//verifica si la cadena empieza con lo que le pases.
console.log(str.startsWith("Java")); // true

//substring(start, end)
//devuelve la subcadena entre los indices start y end.
console.log(str.substring(0, 10)); // "JavaScript"

//toLocaleLowerCase()
//convierte el string a minusculas
console.log(str.toLocaleLowerCase()); // "javascript es mejor que java"

//toLocaleUpperCase()
//convierte el string a mayusculas
console.log(str.toLocaleUpperCase()); // "JAVASCRIPT ES MEJOR QUE JAVA"

//toLowerCase()
//convierte el string a minusculas
console.log(str.toLowerCase()); // "javascript es mejor que java"

//toString()
//devuelve el string como tal
console.log(str.toString()); // "javascript es mejor que java"

//toUpperCase()
//convierte el string a mayusculas
console.log(str.toUpperCase()); // "JAVASCRIPT ES MEJOR QUE JAVA"

//trim()
//elimina los espacios en blanco al inicio y al final del string
let cadenaconespacios = "   Javascript   ";
console.log(cadenaconespacios.trim()); // "Javascript"

//trimEnd()
//elimina los espacios en blanco del final del string
console.log(cadenaconespacios.trimEnd()); // "   Javascript"

//trimStart()
//elimina los espacios en blanco del inicio del string
console.log(cadenaconespacios.trimStart()); // "Javascript   "

//valueOf()
// Devuelve el valor primitivo del string (el mismo string).
console.log(str.valueOf()); // "Javascript es mejor que Java"
