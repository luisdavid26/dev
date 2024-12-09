document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("newEvent");
  const campoaddpalabra= document.getElementById("addpalabra");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let esvalido = true;

    //ejercicio a y b
    //comprobamos si esta vacio
    if (!campoaddpalabra.value||!nombreReg.test(campoaddpalabra.value)) {
      campoaddpalabra.classList.add("is-invalid");
      campoaddpalabra.classList.remove("is-valid");
      esvalido = false;
    } else {
      campoaddpalabra.classList.add("is-valid");
      campoaddpalabra.classList.remove("is-invalid");
    }


    

  });


});
