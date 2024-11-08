'use strict';

/**
 * Objeto WINDOW: Objeto principal. Propiedades de la ventana del navegador.
 *      https://www.w3schools.com/jsref/obj_window.asp
 *      https://developer.mozilla.org/es/docs/Web/API/Window
 */

console.log('Me llamo: ' + window.name + '\n' + // aparecerá vacío - se ha de ver con el ejemplo de window.open
    'Tengo el siguiente tamaño: ' + window.outerWidth + ' - ' + window.outerHeight + // ancho/alto total de la ventana, incluyendo la toolbar y la scrollbar
    'y el siguiente ancho útil: ' + window.innerWidth + ' - ' + window.innerHeight); // ancho/alto útil del documento, sin la toolbar y la scrollbar

// https://www.w3schools.com/jsref/met_win_open.asp
window.open("https://portal.edu.gva.es/iestorrevigia/", 'torrevigia', "width=600, height=600, location=no, menubar=no, left=25, top=25");


/**
 * Objeto LOCATION: Información sobre la URL actual con posibilidad de modificación
 *      https://www.w3schools.com/jsref/obj_location.asp
 *      https://developer.mozilla.org/es/docs/Web/API/Window/location 
 */

console.log('URL: ' + window.location.href);// devuelve la URL actual completa
console.log('Protocolo: ' + window.location.protocol + 
    'Hostname: ' + window.location.hostname + 
    'Puerto: ' + window.location.port);// devuelve el protocolo, host y puerto respectivamente de la URL actual

const btnGoogle = document.getElementById("btnGoogle");
btnGoogle.addEventListener("click", e => window.location.assign("https://google.es"));
window.confirm("Hola: Acepta para recargar o Cancela para imprimir") ? window.location.reload() : window.print();

/**
 * Objeto HISTORY: Historial del navegador
 *      https://www.w3schools.com/jsref/obj_history.asp
 *      https://developer.mozilla.org/es/docs/Web/API/Window/history
 */

console.log(history.length); // Páginas visitadas en la pestaña actual === window.history.length

/**
 * Objeto NAVIGATOR: Información sobre el Navegador y Sistema Operativo
 *      https://www.w3schools.com/jsref/obj_navigator.asp
 *      https://developer.mozilla.org/es/docs/Web/API/Navigator
 * Incluye objetos con sus propias API para poder interactuar con el sistema:
 * .storage: permite acceder a los datos almacenados en el navegador (veremos en más detalle)
 */

console.log(navigator.userAgent); // Imprime la información del navegador
navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitud: " + position.coords.latitude + ", Longitud: " + position.coords.longitude);
});

/**
 * Objeto SCREEN: Propiedades de la pantalla
 *      https://www.w3schools.com/jsref/obj_screen.asp
 *      https://developer.mozilla.org/es/docs/Web/API/Screen
 */

console.log(screen.width + " - " + screen.height); // Ancho de pantalla y alto (Resolución)
console.log(screen.availWidth + " - " + screen.availHeight); // Excluyendo la barra del S.O.





