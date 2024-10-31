function mostrar(array) {
    console.log("Aqui esta el array " + array);
}

function buscarItem(array, nombre) {
    //Recorremos el array mientras comparamos los nombres y si coincide devolvemos la posicion y si no devolvemos -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] === nombre) {
            return i;
        }
    }
    return -1;
}
let nombres = ['Juan', 'Pedro', 'Luis', 'Maria', 'Julia'];

mostrar(nombres);

let nombre = prompt("Dame un nombre para buscar en el array");

let resultado = buscarItem(nombres, nombre);

if (resultado >= 0) {
    console.log("El nombre se ha encontrado en la posicion " + resultado++)
} else {
    console.log("Tu nombre no se ha encontrado")
}
