/*
  {
    nombre: 'Eunice Browning',
    pais: 'Colombia',
    edad: 20,
    area: 'QA',
    puesto: 'Data analyst',
    seniority: 'Junior',
    sueldo: 72457,
    haceGuardia: true,
    lenguajes: ['Ruby', 'C#', 'Java', 'Python', 'PHP']
  },

*/
function  empleadosDeGuardiaPorPais(){
    let objetototal;
    let arr;
    arr= empleados.forEach(element => {
        if(element.haceGuardia=== true){
            objetototal+=element;
            console.log(element)
        }
    });
    return objetototal;
}
function  topNEmpleadosConMayorSueldo(numero){//tiene que devolver un array ordenado de mayor a menor sueldo
    numero =parseInt(numero);
    let sueldos=0;
    let arraysueldos=[]
    sueldos= empleados.forEach(element => {
        if(element.sueldo>= parseInt(numero)){
            console.log(element)
            arraysueldos+=element;
        }
    });
    return arraysueldos;
}
function  empleadosConLenguajeEspecifico(Nlenguajes,lenguajeREQ){//devuelve un array con empleados que las cumpan


}

function  empleadosQuePuedenAscender(){//devuelvo los que no son senior y el sueldo no sea 100,000>

}

function  empleadoMasJovenConMayorSueldo(){//devuelve el empleado mas joven

}
function porcentajeEmpleadosPorSeniority(){//devulve un objeto donde cada clave es un nivel seniority y valor es porcentae de empleado de ese nuvel 

}
function calculoCostosEmpresa(){//devuelve un objeto con el total de sueldos brutos
    let varsueldos=0;
    let varsueldossocial=0;
    let varsueldosjubilacion=0;
    let  totalSueldosBrutos= empleados.forEach(e => {
         varsueldos=e.sueldo;
    });
    let  totalObraSocial= empleados.forEach(e => {
        varsueldossocial=e.sueldo*0.3;
   });
   let  totalJubilacion= empleados.forEach(e => {
    varsueldosjubilacion=e.sueldo*0.11;
});
let  totalSueldosNetos= (varsueldos-(varsueldos-varsueldosjubilacion));
console.log(varsueldos);
console.log(varsueldossocial);
console.log(varsueldosjubilacion);
let total = {totalSueldosNetos,varsueldosjubilacion,varsueldossocial,varsueldos};
return total;
}