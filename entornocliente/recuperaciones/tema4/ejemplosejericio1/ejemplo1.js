let nombres =[ 'juan' , 'pedro',];
function mostrar(lista){
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
        
    }
    
}
nombres.push("caca","pedo");
let ultimodel = lista.pop();//recoge el ultimo elemento eliminado
let cadena = prompt("introduce los datos en el formato: nombre:apellidos:telefono:email:codigopostal");
let datossep=cadena.split(":");
let separador = prompt("introduce el char para separar ")//esto lo convertiria en una cadena simplemente separa por ese separador
let cadenasep = nombres.join(separador);
console.log(`cadena de elementos separados ${cadenasep}`);

