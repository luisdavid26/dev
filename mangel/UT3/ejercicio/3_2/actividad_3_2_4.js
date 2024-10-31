function bucle() {
    let respuesta;
    do {
        //Le pedimos al usuario una respeusta
        respuesta = prompt("Si quieres que pare de ejecutarme introduce un numero");
    } while (isNaN(respuesta) || respuesta === "");//comprobamos si es un numero o si no esta vacio si lo es sale del bucle si no continua
    alert("Perfecto ya ha acabado la funcion")
}
bucle();