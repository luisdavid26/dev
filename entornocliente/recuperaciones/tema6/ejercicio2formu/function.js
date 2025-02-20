document.addEventListener("DOMContentLoaded", (e) => {
  const formu = document.getElementById("formulario");
  const nombre = document.getElementById("nombre");
  const apellidos = document.getElementById("apellidos");
  const edad = document.getElementById("edad");
  const nif = document.getElementById("NIF");
  const email = document.getElementById("email");
  const provincias = document.getElementById("provincias");
  const sexo = document.getElementById("sexo");
  const fecha = document.getElementById("fecha");
  const textoerrores = document.getElementById("errores");
  const Regnif = /[0-9]{8}-[a-zA-Z]/;
  const Regemail = /[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,}/;
  const Regfecha = /(\d{2})[-\/](\d{2})[-\/](\d{4})/;

  formu.addEventListener("submit", (e) => {
    let errores = [];
    textoerrores.textContent = "";
    if (nombre.value === "") {
      nombre.setCustomValidity("el nombre es obligatorio");
      errores.push(nombre.validationMessage);
      nombre.focus();
    }
    if (!isNaN(nombre.value) && nombre.value != "") {
      nombre.setCustomValidity("el nombre no puede tener numeros");
      errores.push(nombre.validationMessage);
      nombre.focus();
    }
    if (apellidos.value === "") {
      apellidos.setCustomValidity("el apellido es obligatorio");
      errores.push(apellidos.validationMessage);
      apellidos.focus();
    }
    if (!isNaN(apellidos.value) && apellidos.value != "") {
      apellidos.setCustomValidity("el apellido no puede tener numeros");
      errores.push(apellidos.validationMessage);
      apellidos.focus();
    }
    if (edad.value === "") {
      edad.setCustomValidity("la edad es obligatoria");
      errores.push(edad.validationMessage);
      edad.focus();
    }
    if (edad.value<0 && edad>105) {
      edad.setCustomValidity("la edad tiene que ser razonable");
      errores.push(edad.validationMessage);
      edad.focus();
    }
    if (nif.value === "") {
        nif.setCustomValidity("el nif es obligatoria");
        errores.push(nif.validationMessage);
        edad.focus();
      }
      if (!Regnif.test(nif.value)) {
        nif.setCustomValidity("el nif tiene que ser razonable");
        errores.push(nif.validationMessage);
        nif.focus();
      }
      if (email.value === "") {
        email.setCustomValidity("el email es obligatoria");
        errores.push(email.validationMessage);
        email.focus();
      }
      if (!Regemail.test(email.value)) {
        email.setCustomValidity("el email tiene que ser razonable");
        errores.push(email.validationMessage);
        email.focus();
      }

      provincias.forEach(element => {
        if(e.value===""){
            errores.push("tienes que elegir una provincia");
            e.focus();
        }
      });
      let sexosleccionado=false;
      sexo.forEach(element => {
        if(element.checked){
            sexosleccionado=true;
        }
      });
      if(!sexosleccionado){
        errores.push("tienes que elegir un sexo obligatoriamente");
      }
      if(!Regfecha.test(fecha.value)){
        fecha.setCustomValidity("el formato de la fecha tiene que ser el correcto");
        errores.push(fecha.validationMessage);
      }
      if(errores.length>0){
        e.preventDefault();
        textoerrores.textContent=errores.join("");
      }
  });
});
