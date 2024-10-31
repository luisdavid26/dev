function fraseMayuscula(texto) {
    let palabras = texto.split(" ");
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = (palabras[i])[0].toUpperCase();
    }
    let frase = palabras.toString();
    frase = frase.replaceAll("," , " ")
    return frase;
}

let frase = fraseMayuscula(prompt("Escribe una frase"));
console.log(frase);