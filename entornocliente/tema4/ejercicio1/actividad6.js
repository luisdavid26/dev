let elementos = ["Dragonborn", "Skyrim", "Dovahkiin", "Dragon", "Fire", "Game"];

// mostramos cuantos elementos hay en el array
console.log("numero de elementos:", elementos.length);

//mostramos cada elemento del array con su indice
for (let i = 0; i < elementos.length; i++) {
    console.log(i + ": " + elementos[i]);
}
//solicitamos un nuevo indice para el primer y el ultimo elemento
let primerindice = parseInt(prompt("elige el indice del primer elemento del nuevo array (0 a " + (elementos.length - 1) + "):"));
let ultimoindice = parseInt(prompt("elige el indice del ultimo elemento del nuevo array (0 a " + (elementos.length - 1) + "):"));

//validamos que los indices sean correctos y el primero no sea mayor que el ultimo indice
if (primerindice >= 0 && ultimoindice < elementos.length && primerindice <= ultimoindice) {
    let nuevoarray = elementos.slice(primerindice, ultimoindice + 1);
    console.log("nuevo array: ", nuevoarray);
} else {
    console.log("indices no validos");
}
