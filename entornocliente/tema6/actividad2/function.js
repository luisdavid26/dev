document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");
  const nombre = document.getElementById("nombre");
  const apellidos = document.getElementById("apellidos");
  const edad = document.getElementById("edad");
  const nif = document.getElementById("NIF");
  const selector = document.getElementsByName("provincias");
  const radiosexo=document.getElementsByName("sexo");
  const fechacampo=document.getElementById("fecha");
  const texterrores = document.getElementById("errores");
  //la expresion regular del nif es para que los primero 8 caracteres tienen que ser numeros
  //despues de los 8 primero digitos viene seguido de un guion y una letra
  const RegExpNIF = /^[0-9]{8}-[A-Za-z]$/;
  //la expresion regular para el email , tiene que en la primera parte puedes poner letras o numeros
  //seguido en un @ puedes poner letras o numero y al poner un punto puedes poner solo letras y que sean mas de dos
  const RegExpemail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  //permite dos digitos seguidos de un a barra diagonal o un guion , al igual que con el mes
  //pero con el anyo permite cuatro digitos 
  const fechaReg = /^(\d{2})[-\/](\d{2})[-\/](\d{4})$/;

  form.addEventListener("submit", (event) => {
    let errores = [];//creamos un array para los errores
    texterrores.textContent = ""; //
    //actividad1
    if (nombre.value === "") {//si el valor es vacio nos crear un error
      nombre.setCustomValidity("El nombre es obligatorio");
      errores.push(nombre.validationMessage);
      nombre.focus();
    }
    if (!isNaN(nombre.value) && nombre.value !== "") {//si el valor no son letras y no es vacio
      nombre.setCustomValidity("El nombre no puede tener numeros");
      errores.push(nombre.validationMessage);
      nombre.focus();
    }
    if (apellidos.value === "" && errores.length === 0) {//si el valor es vacio nos crear un error
      apellidos.setCustomValidity("El apellido es obligatorio");
      errores.push(apellidos.validationMessage);
      apellidos.focus();
    }
    if (!isNaN(apellidos.value) && apellidos.value !== "") {//si el valor no son letras y no es vacio
      apellidos.setCustomValidity("El apellido no puede tener numeros");
      errores.push(apellidos.validationMessage);
      apellidos.focus();
    }
    //actividad2
    if (edad.value === "" && errores.length === 0) {//si el valor es vacio nos crear un error
      edad.setCustomValidity("La edad es obligatorio");
      errores.push(edad.validationMessage);
      edad.focus();
    }
    if (edad.value < 0 || (edad.value > 105 && errores.length === 0)) {//si el valor es menor a 0 y mayor a 105 anyos nos da un error
      edad.setCustomValidity("la edad tiene que estar dentro del rango de 0-105 anyos");
      errores.push(edad.validationMessage);
      edad.focus();
    }
    //actividad3
    if (nif.value === "" && errores.length === 0) {//comprueba que no sea vacio el nif
      nif.setCustomValidity("El nif es obligatorio");
      errores.push(nif.validationMessage);
      nif.focus();
    }
    if (!RegExpNIF.test(nif.value) && errores.length === 0) {//si el nif no cumple con los requisitos, nos da el error
      nif.setCustomValidity("El nif es valido");
      errores.push(nif.validationMessage);
      nif.focus();
    }
    //actividad 4
    if (email.value === "" && errores.length === 0) {//compronamos si esta vacio
      email.setCustomValidity("El email es obligatorio");
      errores.push(email.validationMessage);
      email.focus();
    }
    if (!RegExpemail.test(email.value) && errores.length === 0) {//si no cumple con el formato , nos da error
      email.setCustomValidity("El email no es valido");
      errores.push(email.validationMessage);
      email.focus();
    }
    //actividad5
    selector.forEach((e) => {//recorremos el selector para comprobar que hayamos elegido un campo que no sea el de "nada"
      if (e.value === "nada" && errores.length === 0) {
        errores.push("Tienes que elegir una provincia obligatoriamente");
        e.focus(); 
      }
    });
    //actividad6
    let sexoseleccionado = false;
    radiosexo.forEach((e) => {//recorremos el botones de radio para ver si estan seleccionadas
      if (e.checked) {
        sexoseleccionado = true;
      }
    });
    if (!sexoseleccionado) {
      errores.push("Tienes que elegir un sexo obligatoriamente");
    }
    //actividad7
    if (!fechaReg.test(fechacampo.value)) {//si la fecha no cumple con el formato , nos da error
      fechacampo.setCustomValidity("la fecha no es valida utiliza - o / o esta vacia");
    errores.push(fechacampo.validationMessage);
    }
    

    if (errores.length > 0) {
      event.preventDefault();
      texterrores.textContent = errores.join(" ");
    }
  });
});
