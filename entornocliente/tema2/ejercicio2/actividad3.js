let edad = window.prompt("introduce tu edad",[1]);

if (edad>=18) {//comprobamos si es mayor de edad 
   window.alert("eres mayor de edad")
}else if (edad<18) {//compronamos si es menos de edad
   window.alert("eres menor de edad")

}else{//el resto de caracteres que no sean numeros seran un error
   window.alert("error a introducir tu edad")

}