"use strict";

//Abrir una nueva ventana de dimensiones 500x200px en la posición (100,200). Carga tu página de LinkedIn.
window.open("https://es.linkedin.com/in/vanessa-lopez-pastor-206323131", "linkedin", "width=500, height=200, location=no, menubar=no, left=100, top=200");

//Muestra la ruta completa de la página actual.
console.log("URL: "+ window.location.href);

//Obtén el nombre de la ventana actual.
console.log("Me llamo: "+window.name);

//Muestra la información del navegador, su lenguaje y del sistema en que se ejecuta.
console.log(navigator.userAgent);

//Muestra las propiedades width/height y availWidth/availHeight del objeto Screen. Compáralas con las propiedades innerWidth/innerHeight y outerWidth/outerHeight del Objeto Window.
console.log("width/height: "+screen.width + " - " + screen.height); 
console.log("availWidth/availHeight: "+screen.availWidth + " - " + screen.availHeight);

console.log("innerWidth/innerHeight: "+window.innerWidth + " - " + window.innerHeight); 
console.log("outerWidth/outerHeight: "+window.outerWidth + " - " + window.outerHeight);

//Imprime la página. 
window.confirm(window.print());