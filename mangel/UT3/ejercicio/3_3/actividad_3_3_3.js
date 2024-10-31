function diferenciaAnyos(fecha) {
    //Creamos la fecha actual y cogemos el mes año y dia de cada fecha
    let presente = new Date();
    let diaPresente = presente.getDate();
    let mesPresente = (presente.getMonth() + 1);
    let anyoPresente = presente.getFullYear();

    let diaFecha = fecha.getDate();
    let mesFecha = (fecha.getMonth() + 1);
    let anyoFecha = fecha.getFullYear();

    //Aqui restamos los años para que nos den la diferencia
    let anyosDiferencia = anyoPresente - anyoFecha;

    /*aqui si el mes de la fecha es mayor al actual no habra pasado ese año entonces le restamos uno
    y si el mes es el mismo pero el dia es mayor tambien le resta */
    if (mesPresente == mesFecha && diaPresente < diaFecha || mesFecha > mesPresente ) {
        anyosDiferencia --;
    }
    //aqui comprobamos si el resultado es menor que cero es por que la fecha no ha llegado aun y nos muestra otro mensaje
    if (anyosDiferencia < 0) {
        return "La fecha aun no ha llegado, no intentes ir al futuro";
    }
    return "Han pasado " + anyosDiferencia + " desde la fecha que me has dado";
}

alert(diferenciaAnyos(new Date("2002-11-17")));
