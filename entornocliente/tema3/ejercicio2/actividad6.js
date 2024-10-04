let nummax=parseInt(prompt("ingresa el numero maximo"));
let nummin=parseInt(prompt("ingresa el numero minimo"));
function numerorandom(nummax,nummin){
    if (isNaN(nummax) || isNaN(nummin)) { //comprueba si no son numeros
        console.log("no has ingresado un numero valido");
        return;
    }
    if (nummax < nummin) { //comprueba que el numero máximo sea mayor que el minimo
        console.log("el numero maximo tiene que ser mayor que el minimo");
        return;
    }
    return Math.floor(Math.random()*(nummax - nummin + 1)) + nummin;//recoje los dos valores y los mete en el math random y el math floor redondea hacia abajo el numero que nos de para obtener un entero
}
console.log("el numero randon es: ",numerorandom(nummax,nummin));//mostramos el numero random generado