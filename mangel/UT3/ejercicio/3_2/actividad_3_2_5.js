function sumaFrase(frase) {
    let resultado = 0;
    /*Con este for recorro el string y compruebo si el caracter es un espacio o una letra
    si no es ninguna de las dos entonces se lo sumo al resultado */
    for (let i = 0; i < frase.length; i++) {
        if (!isNaN(frase[i]) && frase[i] !== " ") {
            resultado += parseInt(frase[i]);
        }
    }
    alert("La suma de todos los digitos dentro de la frase es: " + resultado);
}
let frase = prompt("Dame una frase y te devolvere la suma de todos los digitos")
sumaFrase(frase);