function crearFrase(frase, primeraPalabra, segundaPalabra) {
    if (frase.indexOf(primeraPalabra) == -1){
        return frase;
    }

    let fraseCompleta = frase.substring(0, frase.indexOf(primeraPalabra) + primeraPalabra.length);
    fraseCompleta += " " + segundaPalabra + frase.substring(frase.indexOf(primeraPalabra) + primeraPalabra.length);
    return fraseCompleta;
}
let frase = prompt("Dime una frase");
let primeraPalabra = prompt("Dime una primera palabra");
let segundaPalabra = prompt("Dime una segunda palabra");
alert(crearFrase(frase, primeraPalabra, segundaPalabra));