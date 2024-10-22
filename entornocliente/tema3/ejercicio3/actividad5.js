//actividad5

/**
function calcularnumdias(diajug1, mesjug1, anyojug1, diajug2, mesjug2, anyojug2) {
    let hoy = new Date();
    let jug1 = new Date(anyojug1, mesjug1 - 1, diajug1);
    let jug2 = new Date(anyojug2, mesjug2 - 1, diajug2);

    // validamos que los datos ingresados no sean nulos o no numericos
    if (!isNaN(diajug1) && !isNaN(mesjug1) && !isNaN(anyojug1) &&
        !isNaN(diajug2) && !isNaN(mesjug2) && !isNaN(anyojug2)) {
        
        // validamos que los datos ingresados esten dentro del rango correcto
        if (diajug1 <= 31 && mesjug1 <= 12 && anyojug1 <= hoy.getFullYear() &&
            diajug2 <= 31 && mesjug2 <= 12 && anyojug2 <= hoy.getFullYear()) {

            // restamos las dos fechas en milisegundos y convertimos el resultado a dias
            let restadefecha = jug1 - jug2;
            let dias = restadefecha / (1000 * 60 * 60 * 24); // convertimos milisegundos a dias
            dias = Math.abs(dias); // convertimos el resultado en valor absoluto
            return dias; // devolvemos el numero de dias
        } else {
            window.alert("has ingresado un dia, mes o anyo incorrecto."); // alerta si hay un error en el rango de las fechas
            return;
        }
    } else {
        window.alert("has ingresado un dato no numerico."); // alerta si hay un error en los datos ingresados
        return;
    }
}

window.alert("ingresa la primera fecha"); // pedimos al usuario la primera fecha
let diajug1 = parseInt(prompt("ingresa el dia: "));
let mesjug1 = parseInt(prompt("ingresa el mes: "));
let anyojug1 = parseInt(prompt("ingresa el año: "));

window.alert("ingresa la segunda fecha"); // pedimos al usuario la segunda fecha
let diajug2 = parseInt(prompt("ingresa el dia: "));
let mesjug2 = parseInt(prompt("ingresa el mes: "));
let anyojug2 = parseInt(prompt("ingresa el año: "));

let dias = calcularnumdias(diajug1, mesjug1, anyojug1, diajug2, mesjug2, anyojug2);

if (!isNaN(dias)) { 
  window.alert("han pasado " + dias + " dias.");
}

 */
//actividad10 implementando el try catch
function calcularnumdias(diajug1, mesjug1, anyojug1, diajug2, mesjug2, anyojug2) {
    try {
      let hoy = new Date();
  
      //creamos las fechas
      let jug1 = new Date(anyojug1, mesjug1 - 1, diajug1); // restamos 1 al mes para que se muestren bien los meses
      let jug2 = new Date(anyojug2, mesjug2 - 1, diajug2);
  
      //validamos que no sean null
      if (isNaN(diajug1) || isNaN(mesjug1) || isNaN(anyojug1) ||
          isNaN(diajug2) || isNaN(mesjug2) || isNaN(anyojug2)) {
        throw new Error("has ingresado un dato no numerico.");
      }
  
      //validamos que las fechas esten dentro del rango
      if (diajug1 < 1 || diajug1 > 31 || mesjug1 < 1 || mesjug1 > 12 || anyojug1 > hoy.getFullYear() ||
          diajug2 < 1 || diajug2 > 31 || mesjug2 < 1 || mesjug2 > 12 || anyojug2 > hoy.getFullYear()) {
        throw new Error("has ingresado un dia, mes o año incorrecto.");
      }
  
      // calculamos la diferencia en milisegundos y luego la convertimos a días
      let restadefecha = jug1 - jug2;
      let dias = restadefecha / (1000 * 60 * 60 * 24); // convertimos milisegundos a dias
      dias = Math.abs(dias); // lo convierte en valor absoluto
  
      return dias;
    } catch (error) {
      // mostramos el error si ocurre
      window.alert("error: " + error.message);
      return null;
    }
  }
  
  window.alert("ingresa la primera fecha");
  let diajug1 = parseInt(prompt("ingresa el dia: "));
  let mesjug1 = parseInt(prompt("ingresa el mes: "));
  let anyojug1 = parseInt(prompt("ingresa el año: "));
  
  window.alert("ingresa la segunda fecha");
  let diajug2 = parseInt(prompt("ingresa el dia: "));
  let mesjug2 = parseInt(prompt("ingresa el mes: "));
  let anyojug2 = parseInt(prompt("ingresa el año: "));
  
  let dias = calcularnumdias(diajug1, mesjug1, anyojug1, diajug2, mesjug2, anyojug2);
    if (!isNaN(dias)) {
    window.alert("han pasado " + dias + " dias.");
  }
  