let sueldos = new Array(6);

function cargar(sueldos) {//introducimos los sueldos hasta que lleguen a 5 operarios
   for (let i = 1; i < sueldos.length; i++) {
    let sueldo= parseInt(prompt("introduce el sueldo del operario: "+i));

    while (isNaN(sueldo)||sueldo<=0) {
        sueldo =parseInt(prompt("valor erroneo , vuelve a introducirlo: "+i));
    }
    sueldos[i]=sueldo;
   } 
}

function calculargastos(sueldos) {//calculamos el total de los sueldos
    let totalgastos =0;
    for (let i = 1; i < sueldos.length; i++) {
        totalgastos+=sueldos[i];
        window.alert("sueldos ingresado , operario: "+i+" : "+sueldos[i]);//mostramos el sueldo ingresado
    }
    window.alert("total de gastos: "+totalgastos);//mostramos el total
}
//llammamos a las funciones
cargar(sueldos);
calculargastos(sueldos);

