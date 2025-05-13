let terminar =false;
while (!terminar) {
    let respuesta =window.prompt("eligue entre estas diferentes opciones para filtrar\n1.empleadosDeGuardiaPorPais\n2.topNEmpleadosConMayorSueldo\n3.empleadosConLenguajeEspecifico\n4.empleadosQuePuedenAscender\n5.empleadosQuePuedenAscender\n6.porcentajeEmpleadosPorSeniority\n7.calculoCostosEmpresa");
    if(respuesta==1){
        let empleadofiltradosguardia=empleadosDeGuardiaPorPais();

        console.log(empleadofiltradosguardia.nombre);
    }
    if(respuesta==2){
        let respuestas =window.prompt("dime el sueldo");

        let  sueldos=topNEmpleadosConMayorSueldo(respuestas);

        for (let i = 0; i < sueldos.length; i++) {
            console.log(sueldos);
            
        }
    }
    if(respuesta==3){
        let minleng =window.prompt("dime el min de lenguajes");
        let leng =window.prompt("dime el lenguaje");

        let  resp=empleadosConLenguajeEspecifico(minleng,leng);

    }
    if(respuesta==4){
        
    }
    if(respuesta==5){
        
    }
    if(respuesta==6){
        
    }
    if(respuesta==7){
        let sueldos = calculoCostosEmpresa();
        console.log(`sueldos brutos${sueldos.varsueldos}\n,totalObraSocial:${sueldos.varsueldossocial}\n,totalJubilacion:${sueldos.varsueldosjubilacion}\n,totalSueldosNetos:${sueldos.totalSueldosNetos}`)
        
    }


}