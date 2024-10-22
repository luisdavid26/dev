//ejercicio 3
/**
function calcularnumdiascalcularanyos(dia, mes, anyo) {
  // comprobamos que los datos ingresados no son null ni nan
  if (!isNaN(dia) && !isNaN(mes) && !isNaN(anyo)) {

    let hoy = new Date();

    // verificamos que los valores ingresados sean validos
    if (dia <= 31 && mes <= 12 && anyo <= hoy.getFullYear()) {

      // creamos una nueva fecha con los datos ingresados
      // restamos 1 al mes porque en js los meses empiezan en 0
      let fechaingresada = new Date(anyo, mes - 1, dia);

      // calculamos la diferencia de anyos entre la fecha ingresada y la actual
      let anyospasados = hoy.getFullYear() - fechaingresada.getFullYear();

      return anyospasados;

    } else {
      // mostramos una alerta si los valores no son validos
      window.alert("has ingresado la fecha con un numero o numeros incorrectos");
      return;
    }

  } else {
    // mostramos una alerta si los datos no son numeros
    window.alert("has ingresado la fecha con un dato incorrecto");
    return;
  }
}

let dia = parseInt(prompt("ingresa el dia: "));
let mes = parseInt(prompt("ingresa el mes: "));
let anyo = parseInt(prompt("ingresa el año: "));

let anyos = calcularnumdiascalcularanyos(dia, mes, anyo);

if (!isNaN(anyos)) {
  window.alert("han pasado " + anyos + " anyos");
}

*/
// ejercicio 10 implementando el try catch
function calcularnumdias(dia, mes, anyo) {
  try {
    // verificamos que dia, mes y anyo sean numeros
    if (isNaN(dia) || isNaN(mes) || isNaN(anyo)) {
      throw new Error("todos los valores deben ser numeros");
    }
    // guardamos la fecha actual
    let hoy = new Date();

    // validamos que el dia, mes y anyo esten en los rangos correctos
    if (
      dia < 1 ||
      dia > 31 ||
      mes < 1 ||
      mes > 12 ||
      anyo > hoy.getFullYear()
    ) {
      throw new Error("dia, mes o anyo fuera de rango");
    }

    // creamos la fecha ingresada por el usuario
    let fechaingresada = new Date(anyo, mes - 1, dia); // restamos 1 al mes porque los meses en JS van de 0 a 11

    // calculamos la diferencia de anyos
    let anyospasados = hoy.getFullYear() - fechaingresada.getFullYear();

    return anyospasados;
  } catch (error) {
    // mostramos el error si ocurre
    window.alert("error: " + error.message);
    return null; // retornamos null en caso de error
  }
}

// pedimos los datos al usuario
let dia = parseInt(prompt("ingresa el dia: "));
let mes = parseInt(prompt("ingresa el mes: "));
let anyo = parseInt(prompt("ingresa el año: "));
let anyos = calcularnumdias(dia, mes, anyo);

// solo mostramos los anyos si no hubo errores
if (anyos !== null) {
  window.alert("han pasado " + anyos + " anyos");
}
