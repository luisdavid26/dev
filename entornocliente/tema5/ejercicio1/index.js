console.log("URL: " + window.location.href); //devuelve la url de la pagina en la que estamos ahora mismo
window.open(
  "https://github.com",
  "torrevigia",
  "width=500, height=200, location=no, menubar=no, left=100, top=200"
);
console.log("Me llamo: " + window.name); // ancho/alto útil del documento, sin la toolbar y la scrollbar
console.log(navigator.userAgent); // Imprime la información del navegador
navigator.geolocation.getCurrentPosition(function (position) {
  console.log(
    "Latitud: " +
      position.coords.latitude +
      ", Longitud: " +
      position.coords.longitude
  );//recogemos los datos de la ubicacion en la que esta el equipo
});
console.log(screen.width + " - " + screen.height); //mostramos la resolucion en la cual se esta la mostrandose en la ventana
console.log(screen.availWidth + " - " + screen.availHeight ); // Excluyendo la barra del S.O.
console.log(
  " y el tamanyo de la propia ventana del navegador es: " +
    window.outerWidth +
    " - " +
    window.outerHeight + // ancho/alto total de la ventana, incluyendo la toolbar y la scrollbar
    "y el siguiente ancho útil: " +
    window.innerWidth +
    " - " +
    window.innerHeight
);
console.log(`la diferencia entre las dos ventanas es ${screen.height-window.outerHeight} y ${screen.width-window.outerWidth}`)//mostramos la diferencias enter la resolucion nativa y en la que esta el navegador
window.confirm("acepta para para imprimir y cancela par cerrar") ? window.print() : window.close();//hacemos una ternaria para imprimir o no , dependiendo de lo que diga el usuario
