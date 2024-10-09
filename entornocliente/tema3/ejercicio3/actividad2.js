function convertirfecha() {
    let fecharesuelta = new Date();
    let diasemana = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
        let dia = diasemana[fecharesuelta.getDay()];//cogemos el dia en respecto a la fecha del dia de hoy
        let fechafinal =dia;
    return fechafinal;
}
console.log(convertirfecha());//mostramos la fecha