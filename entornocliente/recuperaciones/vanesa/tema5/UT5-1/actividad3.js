//cogemos el ultimo hijo del id de lipsum
let lipsum = document.getElementById("lipsum").lastElementChild;

//crwamos un nuevo p
let newP = document.createElement("p");
//creamos una negrita
const textoNegrita = document.createElement("strong");

//añadimos un texto al elemento en negrita
textoNegrita.textContent = "añadido";
//juntamos el texto que queriamos poner inicialmente con la negrita dnetro del elemento p
newP.append("Nuevo párrafo ", textoNegrita, " por javascript");

//y lo añadimos al lipsum
lipsum.append(newP);

//--------------------------------------------------------
//cogemos el from entero
let form = document.getElementsByTagName("form")[0];

//creamos el label, el input y el br
let newLabel = document.createElement("label");
let newInput = document.createElement("input");
let newBr = document.createElement("br");

//ponemos un id
newInput.setAttribute("id", "input1bis");
//ponemos un valor
newInput.value= "Hola";

//juntamos el texto que queriamos poner inicialmente con la negrita dnetro del elemento
newLabel.append("Input 1 bis", newInput, newBr);

//lo insertamos denpues del input 
form.insertBefore(newLabel, form.children[1]);
