function caracteresComunes(cadena1, cadena2) {
    //Aqui limpio los espacios y pongo todas las letras en minuscula
    cadena1 = (cadena1.toLowerCase().replaceAll(" ", ""));
    cadena2 = (cadena2.toLowerCase().replaceAll(" ", ""));
    let comunes = [];
    
    //con este bucle recorro la primera cadena y la comparo a la vez con la segunda
    for (let i = 0; i < cadena1.length; i++) {
        for (let j = 0; j < cadena2.length; j++) {
            //si dos caracteres de las cadenas coinciden entran en el array
            if (cadena1[i] == cadena2[j]) {
                comunes.unshift(cadena2[j]);
            }
        }
    }
    //ordeno el array y lo tranformo en una cadena
    comunes = comunes.sort();
    comunes = comunes.join("");
    
    let comunesLimpio = "";
    /*con este bucle recorro la cadena de las que han coincidido y si hay alguna repetida 
    no la añado al siguiente array que es limpio*/
    
    for (let i = 0; i < comunes.length; i++) {
        if (comunes[i] != comunes[i - 1]) {
            comunesLimpio += comunes[i];
        }
    }
    console.log(comunesLimpio);
}
let cadena1 = prompt("Dame una primera frase o palabra");
let cadena2 = prompt("Dame una segunda frase o palabra");
caracteresComunes(cadena1, cadena2);