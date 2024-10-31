//Le pedimos al usuario la cadena 
let cadena = prompt("Dame una cadena con el siguiente formato nombre:apellidos:telefono:email:codigopostal");
//separamos la cadena en un array
cadena = cadena.split(":");
//Cogemos el nombre del servidor del correo separandolo mediante el arroba
let servidor = cadena[3].split("@")[1];
//aqui mostramos por consola los datos pedidos 
console.log("Codigo postal: " + cadena[4]);
console.log("Apellidos: " + cadena[1]);
console.log("Email: " + cadena[3] );
console.log("Servidor: " + servidor);