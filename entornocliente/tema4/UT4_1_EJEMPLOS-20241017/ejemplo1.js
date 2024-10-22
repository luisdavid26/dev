let a = ['Lunes', 'Martes', 2, 4, 6];
console.log(a[0]);  // imprime 'Lunes'
console.log(a[4]);  // imprime 6
/**
 * Atención
 */
a[7] = 'Juan'; // ahora a = ['Lunes', 'Martes', 2, 4, 6, , , 'Juan']

console.log(a[7]);  // imprime 'Juan'
console.log(a[6]); // imprime undefined
console.log(a[10]); // imprime undefined

//Es habitual almacenar datos en arrays en forma de objetos
let alumnos = [
    {
      id: 1,
      name: 'Emilio I',
      course: '2nDAW',
      age: 21
    },
    {
      id: 2,
      name: 'Emilio II',
      course: '2nDAW',
      age: 23
    },
  ];