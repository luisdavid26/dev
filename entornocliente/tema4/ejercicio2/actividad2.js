const ciudades = [
  { nombre: "Alicante", poblacion: 3792621 },
  { nombre: "Elche", poblacion: 8175133 },
  { nombre: "Torrevieja", poblacion: 2695598 },
  { nombre: "Orihuela", poblacion: 2099451 },
  { nombre: "Callosa", poblacion: 1526006 },
];
let itemsmay;
function poblacionmayor(numusu) {
  itemsmay = ciudades.filter((ciudades) => ciudades.poblacion > numusu);//filtramos las ciudades que tengan una poblacion mayor a la que dijo el usuario
  if (itemsmay.length > 0) {
    console.log(itemsmay.nombre);//mostramos las cuidades
  } else {
    console.log("no hay ciudades con una poblacion mayor");
    return;
  }
}
//pedimos el numero al usuario
let numusuarios = parseInt(prompt("dime un numero "));

poblacionmayor(numusuarios);
