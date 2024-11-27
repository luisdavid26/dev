document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");
  const nombre = document.getElementById("nombre");
  const apellidos = document.getElementById("apellidos");
  const edad = document.getElementById("edad");
  const nif = document.getElementById("NIF");
  const texterrores = document.getElementById("errores");
  const RegExp = /[0-9]{8}-[a-z]/;
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
    if (!RegExp.test(nif)) {
      errores.push("El NIF no es valido");
      nif.focus();
    }

    if (errores.length > 0) {
      event.preventDefault();
      texterrores.textContent = errores.join(" ");
    }
  });
});
