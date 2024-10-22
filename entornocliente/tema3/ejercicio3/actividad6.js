//ejercicio 6
/**
function comprobarhoras(hora1, min1, hora2, min2) {
  let hora1date = new Date();
  let hora2date = new Date(); 
  hora1date.setHours(hora1, min1, 0);
  hora2date.setHours(hora2, min2, 0); 
  
  // calculamos la diferencia en minutos entre las dos horas
  let diferenciaMinutos = (hora1date - hora2date) / (1000 * 60);
  
  let horas = Math.floor(Math.abs(diferenciaMinutos) / 60); // calculamos las horas
  let minutos = Math.abs(diferenciaMinutos) % 60; // calculamos los minutos restantes
  
  // devolvemos el resultado
  return "La diferencia de horas son " + horas + " horas y " + minutos + " minutos.";
}

// pedimos al usuario que ingrese las horas y minutos
let hora1 = prompt("dame la primera hora (en formato de 24 horas)");
let min1 = prompt("dame los minutos de la primera hora");
let hora2 = prompt("dame la segunda hora (en formato de 24 horas)");
let min2 = prompt("dame los minutos de la segunda hora");

let resultresta = comprobarhoras(hora1, min1, hora2, min2);


window.alert("las horas de diferencia son: " + resultresta);

 */

//actividad10 implemetando el try catch
function comprobarhoras(hora1, min1, hora2, min2) {
    try {
      let hora1date = new Date();
      let hora2date = new Date();

      hora1date.setHours(hora1, min1, 0); // se setea la hora y minutos en hora1date
      hora2date.setHours(hora2, min2, 0); // se setea la hora y minutos en hora2date
  
      // calculamos la diferencia en milisegundos, luego la convertimos a minutos
      let diferenciaMinutos = (hora1date - hora2date) / (1000 * 60);
  
      // convertimos la diferencia a horas y minutos
      let horas = Math.floor(Math.abs(diferenciaMinutos) / 60); // obtenemos la parte de horas
      let minutos = Math.abs(diferenciaMinutos) % 60; // obtenemos los minutos restantes
  
      // devolvemos el resultado como un string con la diferencia de horas y minutos
      return "la diferencia de horas son " + horas + " horas y " + minutos + " minutos";
    } catch (error) {
      window.alert("error al procesar las horas: " + error.message);
    }
  }
  
  let hora1 = prompt("dame la primera hora (en formato de 24 horas)");
  let min1 = prompt("dame los minutos de la primera hora");
  let hora2 = prompt("dame la segunda hora (en formato de 24 horas)");
  let min2 = prompt("dame los minutos de la segunda hora"); 
  
  let resultresta = comprobarhoras(hora1, min1, hora2, min2); 
  
  if (resultresta) {
    window.alert("las horas de diferencia son: " + resultresta);
  }
  