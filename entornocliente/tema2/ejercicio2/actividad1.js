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
let velc =190;
let variable= (velc>120) ? "vas demasiado rapido":"vas a una velocidad responsable";//es como un if , se comprueba si va muy rapido o no
console.log(variable);
console.log("typeof");
let tipodevarnum= 12;
let tipodevachar="hola";
console.log("el tipo del primero es:", typeof tipodevarnum , " y del segundo es : ",typeof tipodevachar);//comprobamos el tiepo de dato que contienen
console.log("delete");
let persona = { nombre: "luis", edad: 21 };
console.log("antes: ", persona);  
delete persona.edad;//borramos la variable edad en el array persona
console.log("despues: ", persona); //mostramos como a quedado

console.log("operador in")
console.log("existe nombre? ", "nombre" in persona);//comprobamos si existe nombre dentro del array persona
console.log("existe edad?: ", "edad" in persona);//comprobamos si existe edad dentro de persona