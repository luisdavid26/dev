function limpiar() {
  //creamos una funcion para limpiar la consola
  console.clear();
  console.log("consolo limpiada correctamente");
}
function actividad1() {
  //operadores aritmeticos
  console.log("operadores aritmeticos");
  let num1 = 1;
  let num2 = 2;
  console.log("suma :", (num1 = num2)); //sumamos los dos numeros
  console.log("resta :", num1 - num2); //restamos los dos numeros
  console.log("multiplicacion :", num1 * num2); //multiplicamos los dos numeros
  console.log("division :", num1 / num2); //divimos un numero entre el otro
  console.log("resto :", num1 % num2); //sacamos el resto de la division de los numeros
  console.log("incremento :", num1++); //suamosn1 a la variable
  console.log("decremento :", num2--); //le restamos 1 a la variable
  //operadores de asignacion
  console.log("operadores de asignacion");

  let numasign = 2;
  numasign += 5; //lo que hacemos es sume 5 a la variable , simplificando la suma
  numasign *= 5; // multiplicamos la variable por 5
  numasign /= 5; //dividimos la variable por 5
  //operadores de cadena
  console.log("operadores de cadena");

  let hola = "hola";
  let adios = "adios";
  let mensaje = hola + " y " + adios;
  console.log("el mensaje completo es :", mensaje);
  //operadores de comparacion
  console.log("operadores de comparacion");

  num1 = 10;
  num2 = "7";
  console.log("igualdad", num1 == num2); //compara solamente el valor
  console.log("igualdad", num1 === num2); //compara por valor y el tipo de dato que sea
  console.log("igualdad", num1 <= 20); //compara si es menor o igual que 20
  console.log("igualdad", num1 > 6); //compara si es mayor que 6
  //operadores logicos
  console.log("operadores logicos");

  let estrue = true;
  let esfalso = false;
  console.log(estrue && esfalso); //nos da true si los dos tienen como valor true
  console.log(estrue || esfalso); //nos da true si uno de los dos tiene valor true
  console.log(!estrue); //nos da true si true no tuviera el valor true
  //operadores bitwise
  console.log("operadores bitwise");
  let bit1 = 10;
  let bit2 = 9;
  console.log(bit1 & bit2); //si ambos numeros bit son 1 devuelve 1 , de lo contrario es 0
  console.log(bit1 | bit2); // si tiene 1 en algun bit nos devuelve 1
  console.log(bit1 ^ bit2); //si uno de los bit es 1 nos devuelve 1 pero si los dos son 1  nos devuelve 0
  console.log(~bit1); // nos duelve el numero pero al contrario
  // operadores especiales
  console.log("operadores ternarios");
  let velc = 190;
  let variable =
    velc > 120 ? "vas demasiado rapido" : "vas a una velocidad responsable"; //es como un if , se comprueba si va muy rapido o no
  console.log(variable);
  console.log("typeof");
  let tipodevarnum = 12;
  let tipodevachar = "hola";
  console.log(
    "el tipo del primero es:",
    typeof tipodevarnum,
    " y del segundo es : ",
    typeof tipodevachar
  ); //comprobamos el tiepo de dato que contienen
  console.log("delete");
  let persona = { nombre: "luis", edad: 21 };
  console.log("antes: ", persona);
  delete persona.edad; //borramos la variable edad en el array persona
  console.log("despues: ", persona); //mostramos como a quedado

  console.log("operador in");
  console.log("existe nombre? ", "nombre" in persona); //comprobamos si existe nombre dentro del array persona
  console.log("existe edad?: ", "edad" in persona); //comprobamos si existe edad dentro de persona
}
function actividad2() {
  let variable = window.prompt("introduce un dato", [1]); //pedimos el dato

  if (variable > 0) {
    //comprobamos si es positvo
    console.log("el numero es positivo");
    window.alert("el numero es positivo");
  } else if (variable < 0) {
    //comprobamos el negativo
    console.log("el numero es negativo");
    window.alert("el numero es negativo");
  } else {
    //comprobamos si es 0
    console.log("el numero es 0");
    window.alert("el numero es 0");
  }
}
function actividad3() {
  let edad = window.prompt("introduce tu edad", [1]);
  if (edad >= 18) {
    //comprobamos si es mayor de edad
    window.alert("eres mayor de edad");
  } else if (edad < 18) {
    //compronamos si es menos de edad
    window.alert("eres menor de edad");
  } else {
    //el resto de caracteres que no sean numeros seran un error
    window.alert("error a introducir tu edad");
  }
}
function actividad4() {
  let num1 = window.prompt("introduce el primer numero :"); //pedimos los dos numero por un window.prompt
  let num2 = window.prompt("introduce el segundo numero");
  if (num1 > num2) {
    //comparamos el primer numero
    console.log("el numero mayo es ", num1);
  } else {
    //de lo contrario el mayor sera el segundo numero
    console.log("el numero mayor es ", num2);
  }
}
function actividad5() {
  let num1 = parseFloat(window.prompt("introduce la primera nota :")); //hay que parsear los window prompt por que pasa los numero como string en vez de numbers
  let num2 = parseFloat(window.prompt("introduce la segundo nota"));
  let num3 = parseFloat(window.prompt("introduce la tercera nota"));
  let suma = (num1 + num2 + num3) / 3; //sumamos las notas y las dividimos por 3 ya que son el numero de notas que hay
  let variable = suma >= 5 ? "estas aprobado" : "estas suspendido"; //hacemos una operacion ternaria para escoger el mensaje
  console.log(variable);
}
function actividad6() {
    var text;
    var fruits = document.getElementById("myInput").value;
    switch (fruits) {
        case "Banana":
            text = "Banana is good!";
            break;
        case "Orange":
            text = "I am not a fan of orange.";
            break;
        case "Apple":
            text = "How you like them apples?";
            break;
        case "Grappe":
            text = "How you like them grapes?";
            break;
        default:
            text = "Nunca he visto esa fruta";
            break;
    }
    document.getElementById("demo").innerHTML = text;
}
function actividad7() {
    let variable = window.prompt("intruduce el numero del mes", 0);//pedimos el numero del mes
let mesdelanyo="no hay mes";//incializamos la variable del mes

switch (variable) {//creamos el switch para comprobar el mes que se a introducido y cambia la variable
  case '1':
    mesdelanyo = "enero";
    break;
  case '2':
    mesdelanyo = "febrero";
    break;
  case '3':
    mesdelanyo = "marzo";
    break;
  case '4':
    mesdelanyo = "abril";
    break;
  case '5':
    mesdelanyo = "mayo";
    break;
  case '6':
    mesdelanyo = "junio";
    break;
  case '7':
    mesdelanyo = "julio";
    break;
  case '8':
    mesdelanyo = "agosto";
    break;
  case '9':
    mesdelanyo = "septiembre";
    break;
  case '10':
    mesdelanyo = "octubre";
    break;
  case '11':
    mesdelanyo = "noviembre";
    break;
  case '12':
    mesdelanyo = "diciembre";
    break;
  default:
    break;
}
window.alert("el mes del anyo correspondiente es : " + mesdelanyo);//concatenamos el mensaje con la varable mesdelanyo

}
function actividad8() {
    window.alert(
        "Buenas tardes que tipo de menu desea comer hoy, de carne , pescado o verdura?"
      );//mostramos un mensaje que nos salude y nos diga que tipos de menu hay.
      let tipomenu = window.prompt(
        "Eliga su tipo de Menu (carne , pescado o verdura) acontinuacion:"
      );//elige su tipo de menu
      switch (tipomenu) {//inicializamos el switch y dependiendo el tipo de menu que no ha dicho , le mostramos una sugerencia de bebida
        case "carne":
          window.alert("te recomiendo beber un vino tinto");
          break;
        case "pescado":
          window.alert("te recomiendo beber un vino blanco");
      
          break;
        case "verdura":
          window.alert("te recomiendo beber agua");
          break;
      
        default://si no se elige el tipo de menu , nos pide que escribanos un menu valido
          window.alert("Porfavor escriba carne , pescado o verdura");
      
          break;
      }
      
}
function actividad9(){
    for (let i = 0; i <= 30; i++) {//hacemos el for hasta 30
        /* declaramos que si dividmos la i entre 2 y nos da 0 
        y si se divide entre 3 y no da 0 que nos muestre el numero por pantalla
        */
      if ((i % 2 == 0) & (i % 3 != 0)) {
        console.log(i);
      }
    }
    
}
function actividad10() {
    for (let i = 0; i <= 300; i++) {//inicalizamos el for que cuente hasta 300
        if (i >= 5 && i % 2 == 0) {//si el contado es mayor a 5 y el resto de dividirlo entre 2 es 0 , mostramos el contador por consola
          console.log(i);
        }
      }
}
function actividad11() {
    let numfact = window.prompt("elige un numero");
if (numfact > 0) {//si el numero es mayor a 0 entrara en el bucle
  for (let i = numfact - 1; i > 0; i--) {//el bucle no parara hasta que llegue a 0
   numfact*= i;//multiplicamos los numero que van restandose por cada bucle y sumandose
  }
  window.alert("el numero factorial es : "+numfact);//mostramos el numero factorial
}else{
    window.Error("el numero es negativo");//mensaje de error en caso de que sea negativo
}

}
function actividad12() {
    let char = '*';//creamos el caracter
var linea=1;
for (let i = 0; i < 13; i++) {//hacemos el for para las lineas
        var text="";
    for (let num1 = 0; num1 <= i; num1++) {//hacemos el bucle del numero de char por lienas
        text+= char;
    }        
    console.log(text);
}


}
function actividad13() {
    let char =window.prompt("introduce el caracter que quieres imprimir");
var linea=1;
while (linea<=13) {//hacemos el bucle del salto de linea
    var text="";
    for (let num1 = 0; num1 <= linea; num1++) {//hacemos el bucle del numero de char por lienas
        text+= char;
    }        
    console.log(text);

    linea++;
}

}
function actividad14() {
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

}
function actividad15() {
    let numrandomn = Math.floor(Math.random() * 10); // Generamos un numero random
    
    //renderizamos el html en el div que tenemos puesto en el index , el cual se renderizara cuando eligamos la opcion de actividad 15
    document.getElementById("actividad15").innerHTML = `
        <p>Adivina el número:</p>
        <input id="myInput" type="text" value="" />
        <!-- aqui es donde se introduce el numero del usuario-->
        <button id="botonintentar">Intentar</button>
        <!--llamamos a la funcion con el boton para ver si es correcto el numero del usuario-->
        <button id="botoncancelar">Cancelar</button>
        <!--boton para terminar la partida-->
        <p id="demo"></p>
    `;

//escucha el boton directamente en el dom para poder utilizar los botones y asi poder llamar a las funciones para intentar y para cancelar el juego si no queremos jugar mas
    document.getElementById("botonintentar").addEventListener("click", checknumerorandom);
    document.getElementById("botoncancelar").addEventListener("click", terminarjuego);

    // Función para intentar adivinar el número
    function checknumerorandom() {
        var numjug1 = document.getElementById("myInput").value; //tomamnos el valor del input del usuario
        if (numjug1 < numrandomn) {
          //si el numero es menor que el numero random , que muestre un mensaje
          document.getElementById("demo").innerHTML =
            "intenta con un numero mayor";
        } else if (numjug1 > numrandomn) {
          //si el numero es mayor al numero random que muestre un mensaje
          document.getElementById("demo").innerHTML =
            "intenta con un numero menor";
        } else if (numjug1 == numrandomn) {
          //si el numero del usuario es igual que el del numero random gana la partida
          document.getElementById("demo").innerHTML = "lo has adivinado!!!!";
          document.getElementById("myInput").disabled = true; //desactivamos el input ya que a ganado
          document.getElementById("botonintentar").disabled = true; //desactivamos el boton de intentar ya que a gando
        }
    }

    function terminarjuego() {
        //esta funcion se utiliza al pulsar el boton de cancelar
        document.getElementById("demo").innerHTML = "juego cancelado"; //mostramos un mensaje que se a candelado el juego
        document.getElementById("myInput").disabled = true; //desactivamos el input porque se a cancelado el juego
        document.getElementById("botonintentar").disabled = true; //desactivamos el input ya que se a cancelado el juego
      }
}