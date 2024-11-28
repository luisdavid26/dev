document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");
  const nombre = document.getElementById("nombre");
  const apellidos = document.getElementById("apellidos");
  const edad = document.getElementById("edad");
  const nif = document.getElementById("NIF");
  const selector = document.getElementsByName("provincias");

  const texterrores = document.getElementById("errores");
  //la expresion regular del nif es para que los primero 8 caracteres tienen que ser numeros
  //despues de los 8 primero digitos viene seguido de un guion y una letra
  const RegExpNIF = /^[0-9]{8}-[A-Za-z]$/;
  //la expresion regular para el email , tiene que en la primera parte puedes poner letras o numeros
  //seguido en un @ puedes poner letras o numero y al poner un punto puedes poner solo p
  const RegExpemail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

  form.addEventListener("submit", (event) => {
    let errores = [];
    texterrores.textContent = ""; // Limpiar mensajes previos
    //actividad1
    if (nombre.value === "") {
      errores.push("el nombre es obligatorio");
      nombre.focus();
    }
    if (!isNaN(nombre.value) && nombre.value !== "") {
      errores.push("el nombre no puede tener numeros");

      nombre.focus();
    }
    if (apellidos.value === "" && errores.length === 0) {
      errores.push("el apellido es obligatorio");
      apellidos.focus();
    }
    if (!isNaN(apellidos.value) && apellidos.value !== "") {
      errores.push("el apellido no puede tener numeros");
      apellidos.focus();
    }
    //actividad2
    if (edad.value === "" && errores.length === 0) {
      errores.push("la edad es obligatoria");
      edad.focus();
    }
    if (edad.value < 0 || (edad.value > 105 && errores.length === 0)) {
      errores.push("la edad tiene que estar dentro del rango de 0-105 anyos");
      edad.focus();
    }
    //actividad3
    if (nif.value === "" && errores.length === 0) {
      errores.push("El NIF es obligatorio");
      nif.focus();
    }
    if (!RegExpNIF.test(nif.value) && errores.length === 0) {
      errores.push("El NIF no es valido");
      nif.focus();
    }
    //actividad 4
    if (email.value === "" && errores.length === 0) {
      errores.push("El email es obligatorio");
      email.focus();
    }
    if (!RegExpemail.test(email.value) && errores.length === 0) {
      errores.push("El email no es válido");
      email.focus();
    }
    //actividad5
    selector.addEventListener("change", (e) => {
      if (this.value === "--" && errores.length === 0) {
        errores.push("Tienes que elegir una provincia obligatoriamente");
        selector.focus();
      }
    });

    if (errores.length > 0) {
      event.preventDefault();
      texterrores.textContent = errores.join(" ");
    }
  });
});
