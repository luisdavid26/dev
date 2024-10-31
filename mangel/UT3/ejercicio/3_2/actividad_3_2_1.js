let notas = [];//Creamos una variable que sera el array con todas las notas

//en esta funcion al pulsar el boton recogeremos del cuadro de texto el valor y lo pasaremos a float
function insertarnotas() {
    notas.push(parseFloat(document.getElementById("nota").value));
}
/*esta funcion al pulsar el boton calcularemos el total lo dividiremos
    por cuantas notas hay y lo devolveremos en un p del html y reiniciaremos 
    el array para que pueda calcular otra media*/
function cancelar() {
    let total = 0;
    for (let i = 0; i < notas.length; i++) {
        total += notas[i];
    }
    total = total / (notas.length + 1);
    document.getElementById("resultado").innerText = "Tu nota media es: " + total.toFixed(2);
    notas = []
}