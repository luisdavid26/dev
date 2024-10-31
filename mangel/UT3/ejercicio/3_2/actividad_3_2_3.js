function cubo(numero) {
    //Cambiamos el tipo de la variable a numero
    numero = Number(numero);
    //aqui comprobamos si la variable es un numero y si no mostramos el alert
    if (isNaN(numero)) {
        alert("No has introducido un numero");
        return;
    }else if (!Number.isInteger(numero)) {//Aqui comprobamos si el numero es decimal o no y si lo es mostramos el alert
        alert("Has introducido un numero decimal");
        return;
    }
    //por ultimo si ha pasado las comprobaciones devuelvemos un alert que muestra el cubo 
    alert("El cubo de " + numero + " es: " + (numero ** 3));
}
let numero = prompt("Dame un numero y te dare el cubo");
cubo(numero);