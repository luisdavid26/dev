document.addEventListener("DOMContentLoaded", (e) => {
  const nombre = document.getElementById("nombre");
  const apellidos = document.getElementById("apellidos");

  const dni = document.getElementById("dni");
  const telefono = document.getElementById("telefono");
  const email = document.getElementById("email");
  const formulario = document.getElementById("formularioRegistro");
  const error = document.getElementsByClassName("error");
  const dniReg = /^[0-9]{8}[a-zA-Z]$/;
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  const telReg = /^\+[0-9]{2}\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}\s[0-9]{2}$/;
 const emailReg =/^[a-zA-Z0-9]+@(gmail\.com|hotmail\.com|outlook\.com)$/;
  formulario.addEventListener("submit", (e) => {
    let esvalido = true;
    const dnivalor = dni.value.trim();
    if (!dniReg.test(dnivalor)) {
      error[0].textContent =
        "Formato incorrecto. Debe ser 8 números y una letra.";
      esvalido = false;
    } else {
      const numero = parseInt(dnivalor.slice(0, 8), 10);
      const letraesperada = letras[numero % 23];
      const letrausuario = dnivalor.charAt(8);
      if (
        letraesperada.toLocaleLowerCase() !== letrausuario.toLocaleLowerCase()
      ) {
        error[0].textContent = "la letra es incorrecta";
        esvalido = false;
      }
    }
    if (!telReg.test(telefono.value)) {
      error[0].textContent =
        "Formato incorrecto. el telefono tiene que ser valido";
      esvalido = false;
    }
    if(!emailReg.test(email.value)){
            error[0].textContent =
        "Formato incorrecto. el email tiene que ser valido";
      esvalido = false;
    }
    if (!esvalido) {
      e.preventDefault();
    }
  });
});
