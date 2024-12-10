document.addEventListener("DOMContentLoaded", () => {
  const formularioaddrima = document.getElementById("addrimaform");
  const formulariogetrima = document.getElementById("getrimaform");
  const formulariormvrima = document.getElementById("rmvrimaform");
  const formulariormvplabra = document.getElementById("rmvpalabraform");
  const campoaddpalabra = document.getElementById("addpalabra");
  const campoaddrima = document.getElementById("addrima");
  const campogetrima = document.getElementById("getrimas");
  const campopalabra = document.getElementById("palabra");
  const campormvrima = document.getElementById("rmvrima");
  const listagetrima = document.getElementById("listarimas");
  const campormvpalabra = document.getElementById("rmvpalabra");

  const nombreReg = /^[A-Za-z]{1,}$/; // Expresión regular para validar palabras (solo letras)

  formularioaddrima.addEventListener("submit", (e) => {
    e.preventDefault();
    let palabravalida = true;
    let rimavalida = true;

    if (!campoaddpalabra.value || !nombreReg.test(campoaddpalabra.value)) {
      campoaddpalabra.classList.add("is-invalid");
      campoaddpalabra.classList.remove("is-valid");
      palabravalida = false;
    } else {
      campoaddpalabra.classList.add("is-valid");
      campoaddpalabra.classList.remove("is-invalid");
      palabravalida = true;
    }

    if (palabravalida) {
      if (!campoaddrima.value || !nombreReg.test(campoaddrima.value)) {
        campoaddrima.classList.add("is-invalid");
        campoaddrima.classList.remove("is-valid");
        rimavalida = false;
      } else {
        agregarrima(campoaddpalabra.value, campoaddrima.value);
        campoaddrima.classList.add("is-valid");
        campoaddrima.classList.remove("is-invalid");
        rimavalida = true;
      }
    }
  });
  formulariogetrima.addEventListener("submit", (e) => {
    e.preventDefault();
    palabravalida = false;
    let rimasvar;
    if (!campogetrima.value || !nombreReg.test(campogetrima.value)) {
      campogetrima.classList.add("is-invalid");
      campogetrima.classList.remove("is-valid");
      palabravalida = false;
    } else {
      while (listagetrima.firstChild) {
        //limpiamos la lista
        listagetrima.removeChild(listagetrima.firstChild);
      }
      rimasvar = obtenerrimas(campogetrima.value);

      if (rimasvar.length > 0) {
        rimasvar.forEach((rima) => {
          const li = document.createElement("li");
          li.textContent = rima;
          listagetrima.appendChild(li);
        });
      } else {
        const li = document.createElement("li");
        li.textContent = "No hay rimas para esta palabra.";
        listagetrima.appendChild(li);
      }

      campogetrima.classList.add("is-valid");
      campogetrima.classList.remove("is-invalid");
      palabravalida = true;
    }
  });

  formulariormvrima.addEventListener("submit", (e) => {
    e.preventDefault();
    let palabravalida = true;
    let rimavalida = true;

    if (!campopalabra.value || !nombreReg.test(campopalabra.value)) {
      campopalabra.classList.add("is-invalid");
      campopalabra.classList.remove("is-valid");
      palabravalida = false;
    } else {
      campopalabra.classList.add("is-valid");
      campopalabra.classList.remove("is-invalid");
      palabravalida = true;
    }

    if (palabravalida) {
      if (!campormvrima.value || !nombreReg.test(campormvrima.value)) {
        campormvrima.classList.add("is-invalid");
        campormvrima.classList.remove("is-valid");
        rimavalida = false;
      } else {
        if (eliminarrima(campormvpalabra.value, campormvrima.value)) {
          campormvrima.classList.add("is-valid");
          campormvrima.classList.remove("is-invalid");
          rimavalida = true;
        } else {
          campormvrima.classList.add("is-invalid");
          campormvrima.classList.remove("is-valid");
        }
      }
    }
  });
  formulariormvplabra.addEventListener("submit", (e) => {
    e.preventDefault();
    let palabravalida = true;
    if (!campormvpalabra.value || !nombreReg.test(campormvpalabra.value)) {
      campormvpalabra.classList.add("is-invalid");
      campormvpalabra.classList.remove("is-valid");
      palabravalida = false;
    } else {
      if (eliminarpalabra(campormvpalabra.value)) {
        campormvpalabra.classList.add("is-valid");
        campormvpalabra.classList.remove("is-invalid");
        palabravalida = true;
      } else {
        campormvpalabra.classList.add("is-invalid");
        campormvpalabra.classList.remove("is-valid");
        palabravalida = false;
      }
    }
  });



  
});
