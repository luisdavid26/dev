function saludarusuario() {
  let ahora = new Date();
  let hora = ahora.getHours();
  let mensaje = "";

  // verificamos si la hora esta entre las 6 y las 12
  if (hora >= 6 && hora <= 12) {
    mensaje = "buenos dias";
  }
  // verificamos si la hora esta entre las 12 y las 20
  else if (hora >= 12 && hora <= 20) {
    mensaje = "buenas tardes";
  }
  else {//si no esta la hora entre los rangos anteriores , le da las buenas noches
    mensaje = "buenas noches";
  }
  return mensaje;
}
let saludofinal = saludarusuario();
window.alert(saludofinal);
