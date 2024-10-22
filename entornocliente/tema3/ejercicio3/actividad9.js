
function mostrarFechaActual() {
    let fechaActual = new Date(); //obtenemos la fecha actual
    window.alert("la fecha actual es: " + fechaActual); // mostramos la fecha
  }
  //usamos setTimeout para ejecutar la funcion despues de 20 segundos que son 20000 milisegundos
  setTimeout(mostrarFechaActual, 20000);
  