function formatearFecha(fecha) {
    let dia = fecha.getDate();
    let mes = (fecha.getMonth() + 1);
    let anyo = fecha.getFullYear();

    alert(dia + "/" + mes + "/" + anyo);
}
let fecha = new Date(prompt("Dime una fecha y te la dare formateada") + " 00:00:00");

formatearFecha(fecha)