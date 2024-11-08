'use strict';

/**
 * Manipulando el DOM: sobre la lista
 */
const lista = document.getElementById("lista");

const li4 = document.createElement("li"); // creo elemento li4
li4.textContent = "Elemento 4"; // contenido elemento li4
lista.append(li4); // añado li4 al final de la lista

const li0 = document.createElement("li"); // creo elemento li0
li0.textContent = "Elemento 0"; // contenido elemento li0
lista.prepend(li0); // añado li0 antes del primer hijo de lista (primer li)

const li2 = lista.children[2]; // obtengo el elemento 2 de lista
const li2_5 = document.createElement("li"); // creo el elemento li2_5
li2_5.textContent = "Elemento 2.5"; // contenido li2_5
li2.after(li2_5); // añado como hermano posterior de li2

const li1_5 = document.createElement("li"); // creo el elemento li1_5
li1_5.textContent = "Elemento 1.5"; // contenido li1_5
li2.before(li1_5); // añado como hermano anterior de li2

li2.remove(); // elimina li2

const li1_5new = document.createElement("li"); // creo el elemento li1_5new
li1_5new.textContent = "Elemento Nuevo 1.5"; // contenido li1_5new
li1_5.replaceWith(li1_5new); // reemplaza li1_5 con li1_5new

lista.replaceChildren(); // Vacío borra el contenido

// ESTO NO!!!
//lista.innerHTML = lista.innerHTML + '<li><img src="" onerror="alert(\'ERES MIO!!!\')"></li>';

/**
 * Manipulando el DOM: sobre el DIV
 */

let div1 = document.getElementById('div1');

let div_ul = document.createElement('ul');
let div_li1 = document.createElement('li');
div_li1.append("Elemento 1");

div_ul.append(div_li1);

div1.append(div_ul);

let div_li2 = document.createElement('li');
div_li2.append("Elemento 2");

// diferentes formas de añadir un nodo
div_ul.insertBefore(div_li2, div_ul.firstChild);
//div_li1.insertAdjacentElement('beforebegin', div_li2);
//div_ul.insertAdjacentElement('afterbegin', div_li2);
//div_ul.insertBefore(div_li2, div_li1);
console.log(div_ul.innerHTML);

div_ul.removeChild(div_li1)
//div_li1.remove(); // Lo mismo que arriba (borra el elemento)
console.log(div_ul.innerHTML);