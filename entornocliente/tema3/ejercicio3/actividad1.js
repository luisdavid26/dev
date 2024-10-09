function convertirfecha() {
    let fecharesuelta = new Date();
        let anyo = fecharesuelta.getFullYear();//recogemos el anyo
        let mes=fecharesuelta.getMonth()+1;//tenemos que sumar 1 por que en JS se indexan desde 0 los meses entonces siempre va a dar el mes anterior
        let dia = fecharesuelta.getDate();//cogemos el dia
        let fechafinal =dia+","+mes+","+anyo;
    return fechafinal;
}
console.log(convertirfecha());//mostramos la fecha