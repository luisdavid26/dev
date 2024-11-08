'use strict';
/**
 * lista
 */
const lista = document.getElementById("lista"); // devuelve el nodo con id=lista.
console.log(lista.firstElementChild); // primer elemento hijo de lista: <li>Element 1</li> --> li
console.log(lista.firstChild); // primer nodo hijo de ul es \n (salto de línea)

console.log(lista.children); // colección de elementos hijos de ul, solo nodos HTML (no comentarios ni nodos de texto)
console.log(lista.childNodes); // colección con todos los hijos de ul, incluyendo comentarios y nodos de tipo texto (no suele utilizarse)

console.log(lista.firstElementChild.textContent); // Element 1 - Contenido del elemento HTML que es el primer hijo de ul
console.log(lista.parentElement); // body - elemento padre de ul

let li = lista.firstElementChild; // primer li de ul
while(li = li.nextElementSibling) { // del segundo li al último
    console.log(li);
}

console.log(document.getElementById("tercero").innerHTML);
console.log(document.getElementById("tercero").textContent);

/**
 * enlaces
 */

const normalLinks = document.getElementsByClassName("normalLink"); // array de elementos con la clase normalLink
console.log(normalLinks[0]); // primer elemento del array normalLinks
console.log(normalLinks.length);
Array.from(normalLinks).forEach(a => console.log(a));

/**
 * párrafos
 */

console.log('******** Elemento con id p1 y su hermano ******');
let p1 = document.getElementById('p1');
console.log('p#' + p1.id + ' -> ' + p1.textContent);

console.log(p1.nextSibling); // Siguiente nodo desde p1
let p2 = p1.nextElementSibling; // Siguiente elemento desde p1
console.log('p#' + p2.id + ' -> ' + p2.textContent);


console.log('******** Elementos con la clase par ******');
let paras = document.getElementsByClassName('par');
Array.from(paras).forEach(elem => console.log('p#' + elem.id + ' -> ' + elem.textContent));

