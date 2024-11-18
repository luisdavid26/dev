const array = [
  95, 95, 14, 83, 58, 33, 65, 52, 7, 72, 13, 46, 19, 31, 27, 36, 30, 86, 88, 88,
  68, 16, 5, 14, 41, 56, 89, 11, 6, 29, 72, 11, 69, 36, 16, 11, 82, 84, 32, 84,
  95, 98, 76, 99, 100, 12, 89, 1, 92, 27, 66, 48, 38, 49, 30, 40, 87, 19, 31,
  37, 5, 32, 9, 33, 98, 94, 5, 15, 4, 88, 47, 34, 83, 8, 31, 4, 2, 72, 31, 39,
  15, 10, 46, 78, 11, 21, 92, 22, 83, 3, 6, 71, 39, 54, 50, 77, 13, 85, 7, 36,
];

function ordenadonorm() {
  let arrayb = Array.from(array);
//ordenamos el array de mayor a menor
  arrayb.sort(function (a, b) {
    return a - b;
  });
  console.log(arrayb);
}

function impares() {// ordenamos el array pero solo los numeros que sean impares
  let arrabimpar = Array.from(array);
  //array ordenado por impares
  let imparesordenado = arrabimpar
    .filter((num) => num % 2 !== 0)
    .sort((a, b) => a - b);
  console.log(imparesordenado);
}
function imparesdos() {// ordenamos el array pero solo los impares y que sean mayor a 10 , ya que tienen que sea mas de dos cifras
  let arrabimpardos = Array.from(array);
  let impardos = arrabimpardos.filter(
    (num) => num % 2 !== 0 && num >= 10 && num < 100
  );
  console.log(impardos);
}
function contar() {
  let numeros = [];
  let contadores = [];

  array.forEach((num) => {
    //buscamos si en el array ya esta en el array
    let index = numeros.indexOf(num);

    if (index === -1) {
      //si no esta , lo anyadimos en el array
      numeros.push(num);
      contadores.push(1);
    } else {
      //si esta el numero en el array , aumentamos el contador
      contadores[index]++;
    }
  });

  //mostramos cada numero y el numero de veces que esta en el array
  numeros.forEach((num, i) => {
    console.log(`El numero ${num} aparece ${contadores[i]} veces`);
  });
}

ordenadonorm();
impares();
imparesdos();
contar();
