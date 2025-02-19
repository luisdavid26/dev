function limpiarYcargar(scripts) {
  console.clear(); // Limpiar la consola

  // Cargar los nuevos scripts
  scripts.forEach((src) => {
    const script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript";
    document.body.appendChild(script);
  });
}

document
  .getElementById("btncarrito")//si se hace click en el boton , cargamos los scripts de producto y carrito
  .addEventListener("click", function () {
    limpiarYcargar(["producto.js", "carrito.js"]);
  });

document
  .getElementById("btncalculadora")//si se hace click en el boton , cargamos el script de calculadora
  .addEventListener("click", function () {
    limpiarYcargar(["calculadora.js"]);
  });

document.getElementById("btnauto").addEventListener("click", function () {//si se hace click en el boton , cargamos el script de auto
    limpiarYcargar(["auto.js"]);
});
