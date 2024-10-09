function mayus(frase) {
    let palabras = frase.split(' ');//divimos la frase por el espacio
    let resultado = '';

    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];//la variable palabra toma el valor de la posicion en la que se encuentre el array
        resultado += palabra[0].toUpperCase() + palabra.slice(1);// resultado se vuelve el valor del array pero con el primer caracter en mayusculas y lo devuelve
    }
    return resultado;
}
let frase = prompt("dime una frase: ");
alert(mayus(frase));
