function compararHoras(hora1, hora2) {
    hora1 = hora1.split(":");
    hora2 = hora2.split(":");

    for (let i = 0; i < hora1.length; i++) {
        if (hora1[i] < hora2[i]) {
            return alert("La primera hora es menor");
        } else if (hora1[i] > hora2[i]) {
            return alert("La segunda hora es menor");
        }
    }
    return alert("Las horas son iguales");
}
let hora1 = prompt("Dame dos horas con el siguiente formato hh:mm:ss");
let hora2 = prompt("Dame la segunda hora con el siguiente formato hh:mm:ss");
compararHoras(hora1, hora2);