let mensaje = prompt("dime una frase: "); //pedimos una frase por un prompt

function sumarnumeros(cadena) {
    let suma = 0; //inicializamos la suma
    for (let recorrido = 0; recorrido < cadena.length; recorrido++) { //recorremos la cadena
        let caracter = cadena[recorrido];//el caracter toma el valor de la posicion en la que se encuentre la cadena
        //comprobamos si no es un numero
        if (!isNaN(caracter) && caracter !== ' ') {
            suma += parseInt(caracter); //convertimos a entero y sumamos
        }
    }
    return suma; //devolvemos la suma total
}

window.alert(sumarnumeros(mensaje)); //mostramos y llamamos a la funcion
