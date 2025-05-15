document.addEventListener("DOMContentLoaded", (e) => {
  const boton = document.getElementById("boton");
  const textboton = document.getElementById("texto");
  //ejercicio1
  boton.addEventListener("click", (e) => {
    textboton.style.backgroundColor = "yellow";
    textboton.style.fontSize = "20px";
    textboton.textContent = "¡Texto cambiado y resaltado!";
  });
  //ejercicio2
  const caja = document.getElementById("caja");
  caja.addEventListener("mouseenter", (e) => {
    caja.style.width = "200px";
    caja.style.height = "200px";
    caja.style.backgroundColor = "lightgreen";
    caja.textContent = "¡El mouse está aquí!";
  });

  caja.addEventListener("mouseleave", (e) => {
    caja.style.backgroundColor = "lightblue";
    caja.style.width = "200px";
    caja.style.height = "200px";
    caja.textContent = "";
  });
  caja.addEventListener("click", (e) => {
    caja.style.width = "250px";
    caja.style.height = "250px";
    caja.style.backgroundColor = "orange";
    caja.textContent = "";
  });
  caja.addEventListener("dblclick", (e) => {
    caja.style.width = "200px";
    caja.style.height = "200px";
    caja.style.backgroundColor = "lightblue";
    caja.textContent = "";
  });
  //ejercicio3
  const contenedor = document.getElementById("contenedor");
  const coordenadas = document.getElementById("coordenadas");
  contenedor.addEventListener("mouseenter", (e) => {
    contenedor.addEventListener("mousedown", (e) => {
      contenedor.style.backgroundColor = "red";
    });
    contenedor.addEventListener("mouseup", (e) => {
      contenedor.style.backgroundColor = "white";
    });
    contenedor.addEventListener("mousemove", (e) => {
      coordenadas.textContent = `X:${e.screenX} Y:${e.screenY}`;
    });
  });
  contenedor.addEventListener("mouseleave", (e) => {
    coordenadas.textContent = "Fuera del area";
  });

  //ejercicio4
  const contador = document.getElementById("contador");
  let valorcont = 0;
  document.addEventListener("keydown", (e) => {
    if (e.key === "+") {
      valorcont++;
    } else if (e.key === "-") {
      if (valorcont <= 0) {
        valorcont = 0;
      } else valorcont--;
    }else if (e.key.toLowerCase()=="r") {
        valorcont=0;
    }
    contador.textContent=`${valorcont}`;
  });
});
