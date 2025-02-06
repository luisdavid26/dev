//recogemos los diferentes elementos del HMTL
const elementexto = document.getElementById("texto");
const elementbox = document.getElementById("caja");
const elementcontenedor = document.getElementById("contenedor");
const textocoordenadas = document.getElementById("coordenadas");
const textoboton  =document.getElementById("constador");
const botoninc=document.getElementById("incrementar");
const botondec=document.getElementById("decrementar");
 let contadorvar;
  document.addEventListener("boton", (e) => {
    console.log("boton pulsado");
  });

  document.addEventListener("mouseenter", (e) => {});
  document.addEventListener("mouseleave", (e) => {});
  document.addEventListener("mousemove", (e) => {
    const cordx = screenX;
    const cordy = screenY;
      textocoordenadas.textContent(`coordenadas: ${cordx},${cordy}`);
    
  });
  document.addEventListener("botoninc",(e)=>{
    contadorvar++;
    console.log(contadorvar);
  });
  document.addEventListener("botondec",(e)=>{
    contadorvar--;
    console.log(contadorvar);
  });

