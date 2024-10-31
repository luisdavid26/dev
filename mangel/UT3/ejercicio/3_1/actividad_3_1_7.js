function comprimirEspacios(frase) {
    let fraseSinEspacios = "";
    for (let i = 0; i < frase.length; i++) {
        if (!(frase[i] == " " && frase[i - 1] == " ")) {
            fraseSinEspacios += frase[i];
        }
    }
    return fraseSinEspacios
}

let frase = prompt("Dame una frase y reducire los espacios repetidos")
alert(comprimirEspacios(frase));