function pideusu() {
    let numeros = [];
    let mensajeusu;
  while (mensajeusu != "x") {//mientras que el mensaje no sea x se seguira mostrando el prompt 
    mensajeusu = prompt("introduce un numero o si quieres  ingresa (x)");
    let numero = parseInt(mensajeusu);
    if (!isNaN(numero)) {//si el numero es un entero , lo mete al array
      numeros.push(numero);
    } else if (mensajeusu !== "x") {//si el caracter pasasdo no es la "x" nos da un mensaje de error
      window.alert("introduce un numero entero valido");
    }
  }
  return numeros;
}
window.alert("numeros introducidos: " + pideusu());
//dividir a la mitad sin arrow function
function mitad(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] / 2;
  }
}
let arrayusu = [10, 20, 30];
mitad(arrayusu);
window.alert("array a la mitad: " + arrayusu);
//diviciendo a la mtiad pero con un arrow function
function mitadarrow(arrayusu) {
  return arrayusu.map((num) => num / 2);
}
let arrayoriginal = [10, 20, 30];
let arraymitad = mitadarrow(arrayoriginal);//guardamos el array
//mostramos el array orignial y el de la mitad
window.alert("array original: " + arrayoriginal);
window.alert("nuevo array a la mitad: " + arraymitad);
