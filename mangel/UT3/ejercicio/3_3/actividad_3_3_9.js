function mostrarHoy() {
    let fecha = new Date();
    alert("La fecha de hoy es: " + fecha);
}
setTimeout(mostrarHoy, 20000);