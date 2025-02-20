'use strict';

// 2. Sobre DOM.html, obtén por consola, al menos de 2 formas diferentes – en las 4 selecciones en negrita, utiliza el acceso a partir de otros nodos: (4,5 puntos – 0,3 puntos/selección)
// o   El elemento con id ‘input2’
console.log(document.getElementById("input2"));
console.log(document.getElementsByTagName("form")[0].getElementById("input2"));//no funciona
console.log("------------------------------")

// o   La colección de párrafos
console.log(document.getElementsByTagName("p"));
console.log();
console.log("------------------------------")

// o   Lo mismo, pero sólo de los párrafos que hay dentro del div ‘lipsum’
console.log(document.getElementById("lipsum").getElementsByTagName("p"));
console.log();
console.log("------------------------------")

// o   El formulario (ojo, no la colección con el formulario sino sólo el formulario)
console.log(document.getElementsByTagName("form")[0]);
console.log(document.getElementById("myForm"));
console.log("------------------------------")

// o   Todos los inputs
console.log(document.getElementsByTagName("input"));
console.log();
console.log("------------------------------")

// o   Sólo los inputs con nombre ‘sexo’
console.log(document.getElementsByName("sexo"));
console.log();
console.log("------------------------------")

// o   Los items de lista de la clase ‘important’ (sólo los LI)
console.log(document.getElementsByClassName("important"));
console.log();
console.log("------------------------------")