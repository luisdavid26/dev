function nosalir() {
  let numerousuario;
  do {
    //solicita el numero
    numerousuario = window.prompt("introduce un numero o no saldrás de aqui:");
    //intentar convertir el valor ingresado a un numero entero
    numerousuario = Number(numerousuario);
  } while (!Number.isInteger(numerousuario) || Number.isNaN(numerousuario));
  //nos muestra le numero que se a pasado por valido
  console.log("numero valido", numerousuario);
}
nosalir(); //ejecutamos la funcion
