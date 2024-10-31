//Declaramos una funcion que devolvera un array filtrado por la poblacion que le pasemos
const filtrarPoblacion = (ciudades, minimo) => {
    let mayorPoblacion = [];
    for (let i = 0; i < ciudades.length; i++) {
        if (ciudades[i].poblacion > minimo) {
            mayorPoblacion.push(ciudades[i].nombre);
        }
    }
    return mayorPoblacion;
}

const ciudades = [
    {nombre: 'Alicante', poblacion: 3792621},
    {nombre: 'Elche', poblacion: 8175133},
    {nombre: 'Torrevieja', poblacion: 2695598},
    {nombre: 'Orihuela', poblacion: 2099451},
    {nombre: 'Callosa', poblacion: 1526006}
    ];

let minimo = prompt("Dame un numero y te dire las ciudades con mayor poblacion");
console.log("Estas son las ciudades que tienen mas poblacion " + filtrarPoblacion(ciudades, minimo));

