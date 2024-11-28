let input2 = document.getElementById("input2");
console.log("Aqui mostramos los elementos de input2");
console.log(input2);

let pHtml = document.getElementsByTagName("p");
console.log("Aqui mostramos los elementos de todos los p");
console.log(pHtml);

//Primera forma con geElementById y getElementsByTagName
console.log("Aqui mostramos los elementos de lipsum que son p de dos formas distintas:");
let lipsum = document.getElementById("lipsum").getElementsByTagName("p");
console.log(lipsum);
//Segunda forma con querySelectorAll
lipsum = document.querySelectorAll("#lipsum p");
console.log(lipsum);

let formulario = document.forms;
console.log("Aqui mostramos los elementos del form");
console.log(formulario);

let inputTodos = document.getElementsByTagName("input");
console.log("Aqui mostramos los elementos de input");
console.log(inputTodos);

let inputSexo = document.getElementsByName("sexo");
console.log("Aqui mostramos los elementos de input con el nombre sexo");
console.log(inputSexo);

let liImportant = document.querySelectorAll("li.important");
console.log("Aqui mostramos los elementos de los li");
console.log(liImportant);

console.log("Aqui mostramos el primer parrafo dentro de Lipsum de dos formas distintas:"); 
let primerParrafoLipsum = document.querySelector("#lipsum p");
console.log(primerParrafoLipsum);

let segundoParrafoLipsum = primerParrafoLipsum.nextElementSibling;
console.log("Aqui mostramos el segundo parrafo dentro de Lipsum");
console.log(segundoParrafoLipsum);

let ultimoLi = document.getElementsByTagName("li");
console.log("Aqui mostramos el ultimo elemento de los li");
console.log(ultimoLi);

