/**  EJERCICIO 1 
function formatearFecha(dia, mes, anyo) {
    //formateamos la fecha
    let fechaFormateada = dia+"-"+mes+"-"+anyo;
    return fechaFormateada;
  }
  let dia = parseInt(prompt("ingresa el dia: "));
  let mes = parseInt(prompt("ingresa el mes: "));
  let anyo = parseInt(prompt("ingresa el anyo: "));
  
  let fechaFinal = formatearFecha(dia, mes, anyo);
  window.alert("fecha formateada: " + fechaFinal);
   * 
   */

// ejercicio 10 , implemento el try catch en la funcion
function formatearFecha(dia, mes, anyo) {
  //intentamos formatear la fecha
  try {
    //comprobamos que los valores no null
    if (isNaN(dia) || isNaN(mes) || isNaN(anyo)) {
      throw new Error("todos los valores deben ser numeros");
    }
    //comprobamos si los valores estan entre los numeros aceptados para la fecha
    if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || anyo < 0) {
      throw new Error("dia, mes o anyo fuera de rango");
    }
    //formateamos la fecha
    let fechaFormateada = dia + "-" + mes + "-" + anyo;
    return fechaFormateada;
  } catch (error) {
    //si a ocurrido algun error , motraremos el mensaje del error concatenado con un "error: " al principio
    window.alert("error: " + error.message);
    return null;
  }
}
let dia = parseInt(prompt("ingresa el dia: "));
let mes = parseInt(prompt("ingresa el mes: "));
let anyo = parseInt(prompt("ingresa el anyo: "));
let fechaFinal = formatearFecha(dia, mes, anyo);
if (fechaFinal) {
  window.alert("fecha formateada: " + fechaFinal);
}
