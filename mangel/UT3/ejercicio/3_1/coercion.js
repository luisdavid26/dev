//devuelve 2 y transforma el 
console.log('4' / 2);

//devuelve 23 por que el null en 0
console.log('23' - null);

//devuelve NaN por que undefined no puede transformarlo en ningun dato
console.log('23' - undefined);

//devuelve 23 por que transforma el true en 1
console.log('23' * true);

//devuelve NaN por que hello no lo puede transformar
console.log('23' * 'hello');

//devuelve 23hello por que con el + concatena las variables
console.log( 23 + 'hello');

//devuelve 2323 por que con el + concatena y transorma el 23 que es un numero a string
console.log( 23 + '23');