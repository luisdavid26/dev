function diasDiferencia(fehcaInicio, fechaFinal) {
    /*Restamos las dos fechas esto nos dara el resultado en mili segundos y con el trunc partimos
    el numero para que sea un numero entero*/
    let resultadoDias = Math.trunc(fehcaInicio - fechaFinal);
    /*ahora tenemos que pasar los milisegundos a dias dividiendo entre mil seria segundos
    entre 3600 pasa a horas y por ultimo entre 24 dias*/ 
    resultadoDias = resultadoDias / (1000 * 3600 * 24);
    //a la hora de devolverlo lo hacemos valor absoluto
    return Math.abs(resultadoDias);

}
let fehcaInicio = new Date(prompt("Dame dos fechas con el siguiente formato aaaa/mm/dd"));
let fechaFinal= new Date(prompt("Segunda fecha con el formato aaaa/mm/dd"));
alert("Entre las dos fechas hay una diferencia de " + diasDiferencia(fehcaInicio, fechaFinal) + " dias");