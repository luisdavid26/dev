//recogemos la lista con getelementbyid 
const listaul =document.getElementById("listaElementos");
//remplazamos el prie¡mer elemento con replacewith
listaul.firstElementChild.replaceWith("Elemento Modificado con getElementById");

//recogo la lista con queryselector
const listaulquery=document.querySelectorAll("li");
//recogemos cuanto mide la lista en total
const totalista=listaulquery.length -1;
//y remplazamos el texto por el deseado con replacewith
listaulquery[totalista].replaceWith("Elemento Modificado con querySelector");

//añadimos un elemento al final 
const elementonuevo = document.createElement("li");
const texto = document.createTextNode("Elemento Nuevo Agregado"); 
//despues le añadimos al elemento li el texto 
elementonuevo.append(texto);
//añadimos al final del la lista recogida por el id el nuevo li 
listaul.appendChild(elementonuevo);





















