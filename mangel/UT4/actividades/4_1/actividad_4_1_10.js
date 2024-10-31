//Aqui creamos la primera funcion donde rellena el array con los datos que nos va pidiendo
function cargar(sueldos) {
    for (let i = 0; i < sueldos.length; i++) {
        let sueldoIntroducido = parseInt(prompt("Dame el sueldo de un operario"));
        sueldos[i] = sueldoIntroducido;
    }
}
//Aqui tenemos la funcion que suma todos los valores del array y los muestra al usuario
function calcularGastos(sueldos) {
    let totalSueldos = 0;
    for (let i = 0; i < sueldos.length; i++) {
        totalSueldos += sueldos[i];
    }
    alert("Este es el total de los gastos de los sueldos: " + totalSueldos + "€");
}

const sueldos = new Array(5);
cargar(sueldos);
calcularGastos(sueldos);