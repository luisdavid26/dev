document.addEventListener("DOMContentLoaded", () => {
  
  const formularioaddrima = document.getElementById("addrimaform");
  const formulariogetrima = document.getElementById("getrimaform");
  const formulariormvrima = document.getElementById("rmvrimaform");
  const formulariormvplabra = document.getElementById("rmvpalabraform");
  const formulariobuscarrima = document.getElementById("buscarrimaform");
  const campoaddpalabra = document.getElementById("addpalabra");
  const campoaddrima = document.getElementById("addrima");
  const campogetrima = document.getElementById("getrimas");
  const campopalabra = document.getElementById("palabra");
  const campormvrima = document.getElementById("rmvrima");
  const listagetrima = document.getElementById("listarimas");
  const campormvpalabra = document.getElementById("rmvpalabra");
  const campobuscarrima = document.getElementById("buscarrima");
  
  const selectpalabras = document.getElementById("selectpalabras");
  const listaverselectpalabras = document.getElementById("listarimasselect");

  const nombreReg = /^[A-Za-z]{1,}$/;

  //genera opciones para el selector de palabras
  generarselect(selectpalabras);

  //agregar una nueva rima
  formularioaddrima.addEventListener("submit", (e) => {
    e.preventDefault();
    let palabravalida = true;

    //validacion de la palabra
    if (!campoaddpalabra.value || !nombreReg.test(campoaddpalabra.value)) {
      campoaddpalabra.classList.add("is-invalid");
      palabravalida = false;
    } else {
      campoaddpalabra.classList.add("is-valid");
    }

    if (palabravalida) {
      //validacion de la rima
      if (!campoaddrima.value || !nombreReg.test(campoaddrima.value)) {
        campoaddrima.classList.add("is-invalid");
      } else {
        //agregar la rima si ambas validaciones pasan
        agregarrima(campoaddpalabra.value, campoaddrima.value);
        campoaddrima.classList.add("is-valid");
      }
    }
  });

  //obtener y mostrar las rimas de una palabra
  formulariogetrima.addEventListener("submit", (e) => {
    e.preventDefault();
    let palabravalida = false;

    //validar la palabra
    if (!campogetrima.value || !nombreReg.test(campogetrima.value)) {
      campogetrima.classList.add("is-invalid");
    } else {
      palabravalida = true;
      //limpiar la lista de rimas y agregar las nuevas
      while (listagetrima.firstChild) {
        listagetrima.removeChild(listagetrima.firstChild);
      }
      const rimasvar = obtenerrimas(campogetrima.value);
      if (rimasvar.length > 0) {
        rimasvar.forEach((rima) => {//creamos los li por cada rima
          const li = document.createElement("li");
          li.textContent = rima;
          listagetrima.appendChild(li);
        });
      } else {
        const li = document.createElement("li");
        li.textContent = "no hay rimas para esta palabra.";
        listagetrima.appendChild(li);
      }
    }
  });

  //eliminar una rima especifica de una palabra
  formulariormvrima.addEventListener("submit", (e) => {
    e.preventDefault();
    let palabravalida = true;

    //validacion de la palabra
    if (!campopalabra.value || !nombreReg.test(campopalabra.value)) {
      campopalabra.classList.add("is-invalid");
      palabravalida = false;
    }

    if (palabravalida) {
      //validacion de la rima y eliminacion
      if (eliminarrima(campopalabra.value, campormvrima.value)) {
        console.log("rima eliminada");
      }
    }
  });

  //eliminar una palabra completa
  formulariormvplabra.addEventListener("submit", (e) => {
    e.preventDefault();
    if (eliminarpalabra(campormvpalabra.value)) {
      console.log("palabra eliminada");
    }
  });

  //buscar palabras por rima
  formulariobuscarrima.addEventListener("submit", (e) => {
    e.preventDefault();
    const arraydepalabras = buscarpalabras(campobuscarrima.value);
    if (arraydepalabras.length > 0) {
      arraydepalabras.forEach((palabra) => {
        console.log(`la palabra ${palabra} contiene la rima`);
      });
    }
  });

  //actualizar lista de rimas al cambiar de palabra en el selector
  selectpalabras.addEventListener("change", (e) => {
    const palabraselecionada = e.target.value;
    const rimas = obtenerrimas(palabraselecionada);
    if (rimas.length > 0) {
      rimas.forEach((rima) => {//creamos los li por cada rima
        const li = document.createElement("li");
        li.textContent = rima;
        listaverselectpalabras.appendChild(li);
      });
    }
  });
});
