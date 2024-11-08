'use strict';
/**
 * querySelector - querySelectorAll
 */
console.log(document.querySelector("#tercero + li").textContent); // Hermano (li) siguiente al li con id tercero
console.log(document.querySelectorAll("#tercero ~ li")); // Hermanos posteriores al li con id tercero
console.log(document.querySelectorAll("li:has(~ #tercero)")); // Hermanos anteriores al elemento con id tercero
console.log(document.querySelectorAll("li:not(#tercero)")); // li que no tengan la id tercero (todos los hermanos)
console.log(document.querySelectorAll("li:nth-child(odd)")); // li impares

console.log("----- Una forma de recorrer la segunda lista ------");
let ul = document.getElementById("secondListElement").parentElement;
console.log(ul.children);
Array.from(ul.children).forEach(element => console.log(element.textContent));

console.log("----- Elementos .item1 en la segunda lista ------");
let ul2 = document.getElementsByClassName("lista2")[0];
console.log(ul2);
Array.from(ul2.getElementsByClassName("item1")).forEach(element => console.log(element.textContent));

// con querySelector
console.log("----- Igual que antes pero con querySelectorAll ------");
Array.from(document.querySelectorAll("ul.lista2 > li.item1")).forEach(element => console.log(element.textContent));

console.log("----- Elementos de lista3 que no tengan clase .item1 ------");
Array.from(document.querySelectorAll("ul.lista3 > li:not(.item1)")).forEach(element => console.log(element.textContent));

console.log("---- <input> cuyo atributo value empiece por 'input' -----");
let inputs = document.querySelectorAll("input[value^='input']");
inputs.forEach(input => console.log(input));

