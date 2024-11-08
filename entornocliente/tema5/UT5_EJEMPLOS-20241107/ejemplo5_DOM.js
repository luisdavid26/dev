/**
 * Atributos de los nodos. Acceso y Modificación.
 * 'Comprueba a través del Inspector'
 */
let input = document.querySelector("p input");
input.value = "Hola";
input.title = "Campo de texto";
input.placeholder = "Escribe algo";
input.setAttribute("prueba", "1234");

/**
 * Estilos de los nodos. Modificación no recomendable a través de atributo style
 * 'Comprueba a través del Inspector'
 */
let p2 = document.body.children[1];
p2.style.color = "blue";
p2.style.marginTop = "50px";

/**
 * Atributos de clase
 * 'Comprueba a través del Inspector'
 */
//let p1 = document.body.children[0];
let p1 = document.querySelector("p:first-child");
console.log(p1);
// ir descomentando para probar
// p1.classList.add("destacado", "verde-text");
// p1.classList.toggle("verde-text");
// p1.classList.toggle("verde-text");


const lista = document.getElementById("lista");

lista.firstElementChild.classList.toggle("my-gold"); // primer elemento de la lista
lista.lastElementChild.classList.toggle("my-gold"); // último elemento de la lista -- quita estilo

const enlace = document.createElement("a");
enlace.href = "https://google.es";
enlace.title = "Ve a Google";
enlace.textContent = "Google";
enlace.style.backgroundColor = "red";
enlace.style.color = "white";

lista.lastElementChild.append(enlace);

/**
 * HTML5 permite agregar atributos personalizados utilizando el prefijo data-. 
 * Estos atributos se pueden acceder a través de dataset en JavaScript. 
 */
lista.lastElementChild.dataset.id = "234";

let article = document.getElementById('electriccars');
console.log(article.dataset.columns); // 3
console.log(article.dataset.indexNumber); // 12314
