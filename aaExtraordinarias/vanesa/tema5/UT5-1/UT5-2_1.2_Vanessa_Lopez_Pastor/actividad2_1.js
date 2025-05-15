'use strict';

//! ------------------- PRIMERA PARTE -------------------

console.log("--------------- id ‘input2’ ---------------");
console.log("version 1");
// devuelve una referencia al elemento por su id "input2"
console.log(document.getElementById("input2"));
console.log("version 2");
/* querySelector>() devuelve el primer elemento del documento, en este caso devuelve
el primer elemento con el id "input2" */
console.log(document.querySelector("#input2"));

//----------------------------------------------------------------------------------

console.log("--------------- colección de párrafos ---------------");
console.log("version 1");
// devuelve una lista de elementos que tienen un nombre de tag determinado, en este caso "p"
console.log(document.getElementsByTagName("p"));
console.log("version 2");
/* querySelectorAll() devuelve una NodeList que representa una lista de elementos
del documento que coincide con el grupo de selectores indicados, en este caso devolvera
una lista de los p */
console.log(document.querySelectorAll("p"));

//----------------------------------------------------------------------------------

console.log("-------------- div ‘lipsum’ ----------------");
console.log("version 1");
/* devuelve una referencia del id "lipsum" y luego cogemos a partir de ese una lista de
elementos con la tag "p" */
console.log(document.getElementById("lipsum").getElementsByTagName("p"));
console.log("version 2");
// devuelve a partir del id "lipsum" ese mismo y el resto de p (los anteriores no)
console.log(document.querySelectorAll("#lipsum p"));

//----------------------------------------------------------------------------------

console.log("------------- formulario -----------------");
console.log("version 1");
// devuelve una lista de elementos que tienen un nombre de tag determinado, en este caso "form"
console.log(document.getElementsByTagName("form")[0]);
console.log("version 2");
// devuelve una referencia del id "myForm"
console.log(document.getElementById("myForm"));

//----------------------------------------------------------------------------------

console.log("------------- Todos los inputs -----------------");
console.log("version 1");
// devuelve una lista de elementos que tienen un nombre de tag deeterminado, en este caso "input"
console.log(document.getElementsByTagName("input"));
console.log("version 2");
// devuelve una lista con todos los inputs
console.log(document.querySelectorAll("input"));

//----------------------------------------------------------------------------------

console.log("------------- inputs con nombre ‘sexo’ -----------------");
console.log("version 1");
// devuelve una NodeList que contienen el nome "sexo"
console.log(document.getElementsByName("sexo"));
console.log("version 2");
//devuelve una lista con todos los inputs que tienen el name "sexo"
console.log(document.querySelectorAll("input[name=sexo]"));

//----------------------------------------------------------------------------------

console.log("------------- items de lista de la clase ‘important’ (sólo los li) -----------------");
console.log("version 1");
// devuelve la lista entera con todos los ul y luego buscamos los que tengan el nombre de la clase "important"
console.log(document.getElementsByTagName("ul")[0].getElementsByClassName("important"));

console.log("version 2");
// devuelve una lista con todos los items de la clase "important"
console.log(document.querySelectorAll("li.important"));

/*
Referencias: 
- https://es.stackoverflow.com/questions/301828/obtener-el-id-de-un-elemento-html
- https://developer.mozilla.org/es/docs/Web/API/Document/querySelector
- https://es.javascript.info/searching-elements-dom
- https://es.stackoverflow.com/questions/509741/como-acceder-al-valor-de-varios-inputs-sin-usar-tantos-queryselector-en-js 
- https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll
- https://stackoverflow.com/questions/15148659/how-can-i-use-queryselector-on-to-pick-an-input-element-by-name
*/


//! ------------------- SEGUNDA PARTE -------------------
console.log("------------- primer párrafo que hay dentro del div ‘lipsum’ -----------------");
console.log("version 1");
// devuelve una referencia a un elemento con el id "limpsum" pero el primer hijo
console.log(document.getElementById("lipsum").firstElementChild);

console.log("version 2");
// con el querySelector cogemos solo el primer p del id "lipsum"
console.log(document.querySelector("#lipsum p"));

//----------------------------------------------------------------------------------

console.log("------------- segundo párrafo de ‘lipsum’ -----------------");
console.log("version 1");
// devuelve una referencia a un elemento con el id "limpsum" seleccionando el segundo p
console.log(document.getElementById("lipsum").children[1]);

console.log("version 2");
// con el querySelector cogemos solo un elemento con el id "lipsum" y le indicamos en el p que sea el segundo hijo
console.log(document.querySelector("#lipsum p:nth-child(2)"));

//----------------------------------------------------------------------------------

console.log("------------- último item de la lista -----------------");
console.log("version 1");
/* devuelve una lista de todos elementos que tienen un nombre de tag deeterminado, en este caso "ul"
y cogemos el ultimo hijo*/
console.log(document.getElementsByTagName("ul")[0].lastElementChild);

console.log("version 2");
// con el querySelector cogemos solo un elemento "ul" y seleccionamos el ultimo hijo
console.log(document.querySelector("ul").lastElementChild);

//----------------------------------------------------------------------------------

console.log("------------- label de ‘Escoge sexo’ -----------------");
console.log("version 1");
/* devuelve una lista de todos elementos que tienen un nombre de tag deeterminado, en este caso "ul"
y cogemos el elemento padre*/
console.log(document.getElementsByName("sexo")[0].parentElement);

console.log("version 2");
/* con el querySelector cogemos solo un elemento con el input que tienen el name "sexo" 
y cogemos el elemento padre*/
console.log(document.querySelector("input[name='sexo']").parentElement);

/* 
Referencias:
- https://stackoverflow.com/questions/13308906/selecting-the-last-child-of-an-element-in-javascript
- https://stackoverflow.com/questions/62203891/use-queryselectorall-to-select-second-element-of-the-list
*/

console.log("------------- innerHTML de la etiqueta de ‘Escoge sexo’ -----------------");
/* devuelve una lista de todos elementos que tienen un nombre de tag deeterminado, en este caso "ul"
y cogemos el elemento padre con la sinatxis de html*/
console.log(document.querySelector("input[name='sexo']").parentElement.innerHTML);

console.log("------------- textContent de esa etiqueta -----------------");
/* devuelve una lista de todos elementos que tienen un nombre de tag deeterminado, en este caso "ul"
y cogemos el elemento padre con el contenido de texto de un nodo y sus descendientes*/
console.log(document.querySelector("input[name='sexo']").parentElement.textContent);

console.log("------------- valor del primer input de sexo -----------------");
/* devuelve una lista de todos elementos que tienen un nombre de tag deeterminado, en este caso "ul"
y cogemos el elemento padre y cogemos el valor*/
console.log(document.querySelector("input[name='sexo']").value);

console.log("------------- valor del sexo que esté seleccionado  -----------------");
//devuelve el input con el nombre sexo que este marcado
console.log(document.querySelector("input[name='sexo']:checked"));

/*
Referencias
- https://stackoverflow.com/questions/7275597/getting-the-selected-radio-without-using-id-but-name
*/