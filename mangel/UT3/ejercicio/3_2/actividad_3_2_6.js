function numeroRandom(maximo, minimo) {
    /*el math random lo multiplicamos para que nos de un numero que maximo sea el que queramos
    y luego sumamos el minimo por que si no el minimo seria 0*/
    alert(Math.floor(Math.random() * (maximo - minimo + 1)) + minimo);
}

let minimo = parseInt(prompt("Dame un minimo"));
let maximo = parseInt(prompt("Dame un maximo"));
numeroRandom(maximo, minimo);