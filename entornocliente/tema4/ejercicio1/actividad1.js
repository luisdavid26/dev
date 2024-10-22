//lista de nombres
let nombres = ['juan', 'pedro', 'luis', 'maria', 'julia'];

//mostrar los elementos
function mostrar(lista) {
    console.log("lista:");
    for (let i = 0; i < lista.length; i++) {
        console.log(i + 1 + ". " + lista[i]);
    }
}

//buscar nombre
function buscaritem(lista, nombre) {
    let posicion = lista.indexOf(nombre); // buscamos la posicion 
        return posicion;
}

//mostramos la lista
mostrar(nombres);

//solicitamos un nombre
let nombrebuscar = prompt("introduce un nombre:");

//buscamos el nombre 
let posicion = buscaritem(nombres, nombrebuscar);

//mostramos si el nombre se a encontrado o no
if (posicion >= 0) {
    console.log("el nombre "+nombrebuscar+ "se encuentra en la posicion "+posicion + 1);
} else {
    console.log("el nombre" + nombrebuscar+ "no se encuentra en la lista");
}
