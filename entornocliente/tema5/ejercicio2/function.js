const input2 = document.getElementById("input2"); //recoge el elemento con id input2
console.log("mostramos el input2:");
console.log(input2);

const parrafos = document.getElementsByTagName("p"); //recoge todos los parrafos

console.log("mostramos todos los parrafos:");
console.log(parrafos);

const parrafosLipsum = document.getElementById("lipsum"); //recoge solo los parrafos que estan dentro de lipsum

console.log("mostramos los parrafos dentro de lipsum:");
const parrafoslipsum = document.getElementById("lipsum").getElementsByTagName("p");//recogemos todos los elemenots que esten dentro de "lipsum" y que sean "p"


const formulario = document.getElementById("myForm"); //recogemos el formulario

console.log("mostramos el formulario:");
console.log(formulario);

const inputsFormu = formulario.getElementsByTagName("input"); //recoge todos los inputs dentro del formulario

console.log("mostramos los inputs del formulario:");
console.log(inputsFormu);

const inputSexo = document.getElementsByName("sexo"); // Recoge solo los inputs con nombre sexo
console.log("mostramos los inputs con nombre 'sexo':");
console.log(inputSexo);

const itemsImportant = document.querySelectorAll("li.important"); //recoge solo los elementos li que la clase sea important
console.log("mostramos los items importantes:");
console.log(itemsImportant);
//----------------------------------------------------------------------------------------------
//primera forma sin queryselector
let primerparrafo = parrafosLipsum.firstElementChild; //recogemos el primer parrafo de la lista lipsum
console.log("mostramos el primer parrafo de lipsum");
console.log(primerparrafo);
//segunda forma con queryselector
let primerparrafoquery=parrafosLipsum.querySelectorAll("p");//recogemos el primer parrafo con queryselector
console.log("mostramos el primer parrafo de lipsum con queryselector");
console.log(primerparrafoquery[0]);//escogemos el primer parrafor del array
//----------------------------------------------------------------------------------------------
//primera forma sin queryselector
let segundoparrafo = primerparrafo.nextElementSibling; //mostramos el segundo parrafo de la lista lipsum
console.log("mostramos el segundo parrafo de lipsum");
console.log(segundoparrafo);
//segunda forma con queryselector
let segundoparrafoquery = primerparrafoquery; //mostramos el segundo parrafo de la lista lipsum
console.log("mostramos el segundo parrafo de lipsum con queryselector");
console.log(segundoparrafoquery[1]);//escogemos el segundo item del array

//----------------------------------------------------------------------------------------------
//primera forma sin queryselector
let ultitemlista = itemsImportant;//recogemos la lista de items
let itemult = ultitemlista.length - 1;//miramos el largo maximo de la lista
console.log("mostramos el ultimo item de la lista");
console.log(ultitemlista[itemult]);//mostramos el ultimo elemento de la lista
//segunda forma con queryselector
let ultitemlistaquery=document.querySelectorAll("li");//recogemos todos los elementos que sean li
let ultiquery=ultitemlistaquery.length-1;
console.log("mostramos el ultimo item de la lista con queryselector");
console.log(ultitemlistaquery[ultiquery]);//mostramos el ultimo elemento de la lista
//----------------------------------------------------------------------------------------------

//primera forma sin queryselector
let labelsexo = formulario.getElementsByTagName("label");
let labeltexosexo;
for (let i = 0; i < labelsexo.length; i++) {
    if (labelsexo[i].textContent.includes("Escoge el sexo")) {
        labeltexosexo = labelsexo[i]; 
      break;
    }
}
console.log("mostramos el label que contiene el texto de Escoge el sexo");
console.log(labeltexosexo.innerText);
//segunda forma con queryselector
let labelsexoquery = formulario.querySelectorAll("label");
let labeltexosexoquey;
for (let i = 0; i < labelsexoquery.length; i++) {
    if (labelsexo[i].textContent.includes("Escoge el sexo")) {
        labeltexosexoquey = labelsexoquery[i]; 
      break;
    }
}
console.log("mostramos el label que contiene el texto de Escoge el sexo con queryselectorall");
console.log(labeltexosexoquey.innerText);




