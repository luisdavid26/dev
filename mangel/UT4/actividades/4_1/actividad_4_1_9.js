/*En esta funcion creamos un array e insertamos despues de comprobar que es un numero en un array
y tambien comprobamos si la respuesta ha sido una x o X para cancelar y terminar el array*/
function pideYComprueba() {
    let numeros = [];
    let cancelar = false;
    while (!cancelar) {
        let respuesta = prompt("Dame un numero o una 'x' para cancelar");
        if (respuesta != NaN) {
            numeros.push(parseInt(respuesta));
        }
        if (respuesta == "x" || respuesta == "X") {
            cancelar = true;
        }
    }
    return numeros;
}
//Aqui sustituimos del array cada elemento por su mitad modificando el original
function mitad(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = numeros[i] / 2;
    }
    return numeros;
}
//Aqui creamos un nuevo array y añadimos la mitad de los elementos del array original
function porLaMitad(numeros) {
    let numerosMitad = [];
    for (let i = 0; i < numeros.length; i++) {
        numerosMitad.push(numeros[i] / 2);
    }
    return numerosMitad;
}

console.log(porLaMitad(pideYComprueba()));
console.log(mitad(pideYComprueba()));