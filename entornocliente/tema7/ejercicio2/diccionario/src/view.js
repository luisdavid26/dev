// view.js
export class View {
  constructor() {
    this.selectPalabras = document.getElementById("selectpalabras");
    this.listaRimas = document.getElementById("listarimas");
    this.listaRimasSelect = document.getElementById("listarimasselect"); 
    this.campoPalabra = document.getElementById("addpalabra");
    this.campoRima = document.getElementById("addrima");
  }
  // si se consigue anyadir una rima, se muestra el mensaje
  mostrarMensaje(mensaje, tipo = "anyadida corretamente") {
    console.log(`[${tipo.toUpperCase()}] ${mensaje}`);
  }
  //limpiamos la lista que muestra las rimas
  limpiarLista(elemento) {
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    }
  }
  // actualiza la lista de palabras
  actualizarListaPalabras(diccionario) {
    this.limpiarLista(this.selectPalabras);
    diccionario.forEach((_, palabra) => {
      const option = document.createElement("option");
      option.value = palabra;
      option.textContent = palabra;
      this.selectPalabras.appendChild(option);
    });
  }
  // muestra las rimas en la lista
  mostrarRimas(rimas, contenedor = this.listaRimas) {
    this.limpiarLista(contenedor);
    if (Array.isArray(rimas)) {
      rimas.forEach((rima) => {
        const li = document.createElement("li");
        li.textContent = rima;
        contenedor.appendChild(li);
      });
    } else {
      this.mostrarMensaje(rimas.error, "error");
    }
  }
  mostrarPalabras(palabras) {
    // Limpiamos la lista de palabras antes de agregar las nuevas
    const listaPalabras = document.getElementById("listaverpalabras");
    this.limpiarLista(listaPalabras);

    if (Array.isArray(palabras)) {
      palabras.forEach((palabra) => {
        const li = document.createElement("li");
        li.textContent = palabra;
        listaPalabras.appendChild(li); 
      });
    } else {
      this.mostrarMensaje(palabras.error, "error");
    }
  }

  //muestra las rimas del select
  mostrarRimasSeleccionada(rimas) {
    this.mostrarRimas(rimas, this.listaRimasSelect);
  }
}
