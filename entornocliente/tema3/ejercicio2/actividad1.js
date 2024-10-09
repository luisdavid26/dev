let notas = [];
let notasmostrar=[];
let cancelado = false;

//funcion para insertar
function insertarnotas() {
  let valor = parseFloat(document.getElementById("valores").value);//parseamos los valores a un float para que podamos comprobar si son numeros dentro de los condicionales
  if (isNaN(valor)) {//si el valor que se le pase esta vacio o no es un numero , no desvuelve un mensaje de error y no mete el valor en el array
    document.getElementById("notamedia").innerText =
      "no has insertado ninguna nota"; //lo muestra cuando el usuario no a puesto nada en el campo de texto
      return;
    }
    document.getElementById("notamedia").innerText = "";
    notas.push(valor); //anyadimos la nota al array
    notasmostrar.push(valor.toFixed(2)); // Guardamos el valor formateado en otro array
    document.getElementById("valores").value = ""; //limpiamos el campo de texto para que se pueda insertar una nota nueva
    document.getElementById("demo").innerText = "Notas: " + notasmostrar.join(", ");
  
}
//funcion para detener la inserccion de notas
function cancelar() {
  cancelado = true;
  if (notas.length===0) {
    document.getElementById("notamedia").innerText =
    "no se han insertado notas";
  return;
  }
  let suma = 0;
  for (let recorrido = 0; recorrido < notas.length; recorrido++) {
    suma += notas[recorrido]; //sumamos los valores numericos de las notas
  }
  let media = suma / notas.length; //calculamos la media
  document.getElementById("notamedia").innerText =
    "La nota media es: " + media.toFixed(2); //mostramos la media con dos decimales

  //desactivamos el input porque se ha cancelado la inserción de notas
  document.getElementById("valores").disabled = true;
  document.getElementById("botonintentar").disabled = true; //desactivamos el botón de intento
  document.getElementById("demo").innerText = "Se ha parado de insertar notas";
  return;
}
