let primerapalabra = prompt("dime una palabra");//pedimos las dos palabras por un prompt
let segundapalabra = prompt("dime la segunda palabra");
let palabrafinal = "";
function comparar(primerapalabra, segundapalabra) {
  primerapalabra = primerapalabra.toLowerCase();
  segundapalabra = segundapalabra.toLowerCase();
  let letra = "";
  //pasando las palabras a minusculas , nos ahorramos que nos de error al no coincidir a la hora de que una letras sea mayuscula y en la otra palabra no
  
  for (let i = 0; i < primerapalabra.length; i++) {//recorremos la primera palabra para comparar los caracteres
    letra = primerapalabra.charAt(i);
    if (primerapalabra.charAt(i) != " " && segundapalabra.charAt(i) != " ") {//si en la posicion en el que esta el recorrido no tiene ningun espacio en ninguna de las dos palabras , continua con el programa
      if (segundapalabra.includes(letra) && !palabrafinal.includes(letra)) {//si la segunda palabra incluye ese caracter y no esta repetido en la palabra final, copia ese caracter en la palabra final
        palabrafinal += letra;
      }
    }
  }
  return palabrafinal;//devolvemos la palabra final completa
}
//llamamos y imprimos la funcion 
console.log("los caracteres que coinciden son : ",comparar(primerapalabra, segundapalabra));
