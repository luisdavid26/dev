let char = window.prompt("introduce el caracter que quieres imprimir"); //pide el caracter que se quiera imprimir
let lineatemp = window.prompt("introduce como de grande quieres que sea"); //pedimos el numero de lineas que quiera de el usuario que se impriman
let linea = 0;
do {
  //hacemos el bucle del salto de linea
  var text = "";
  for (let num1 = 0; num1 <= linea; num1++) {
    //hacemos el bucle del numero de char por lienas
    text += char;
  }
  console.log(text);

  linea++;
} while (linea <= lineatemp);
