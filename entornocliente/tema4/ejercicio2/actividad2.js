const ciudades = [
  { nombre: "Alicante", poblacion: 3792621 },
  { nombre: "Elche", poblacion: 8175133 },
  { nombre: "Torrevieja", poblacion: 2695598 },
  { nombre: "Orihuela", poblacion: 2099451 },
  { nombre: "Callosa", poblacion: 1526006 },
];
let itemsmay;
function poblacionmayor(numusu) {
  itemsmay = ciudades.filter((ciudades) => ciudades.poblacion > numusu);
  if (itemsmay.length > 0) {
    console.log(itemsmay.nombre);
  } else {
    console.log("no hay ciudades con una poblacion mayor");
    return;
  }
}

let numusuarios = parseInt(prompt("dime un numero "));

poblacionmayor(numusuarios);
