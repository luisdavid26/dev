let cadena = prompt("introduce los datos en el formato: nombre:apellidos:telefono:email:codigopostal");

//desglosar la cadena en un array separando por ":"
let datos = cadena.split(":");

//obtener los valores
let nombre = datos[0];
let apellidos = datos[1];
let telefono = datos[2];
let email = datos[3];
let codigopostal = datos[4];

//desglosar el email
let emailpartes = email.split("@");
let servidorEmail = emailpartes[1];

//mostrar la informacion
console.log("codigo postal: " + codigopostal);
console.log("apellidos: " + apellidos);
console.log("servidor de email: " + servidorEmail);
