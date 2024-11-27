document.addEventListener("DOMContentLoaded", (e) => {
  //actividad1
  const boton = document.getElementById("boton");
  // hacer click sobre el boton para que nos muestre un alert
  boton.addEventListener("click", (e) => {
    //cada vez que se haga click en el boton , nos aparecere alert
    window.alert("pulsaste sobre el boton");
  });

  //actividad2
  const capa1 = document.getElementById("capa1");
  const capa2 = document.getElementById("efecto"); //recogemos a los dos elemenos
  capa1.addEventListener("mouseenter", (e) => {
    capa2.style.backgroundColor = `rgb(${0}, ${255}, ${0})`; //cada vez que se pase el raton por encima del recuadro , cambiara el de la capa 2
  });
  capa1.addEventListener("mouseleave", (e) => {
    //cuando el raton sale del bloque , pone el fondo en blanco
    capa2.style.backgroundColor = `rgb(${255}, ${255}, ${255})`;
  });

  //actividad3
  const fieldprecio = document.getElementById("precio"); //inicializamos todos los inputs
  const fieldcantidad = document.getElementById("cantidad");
  const botonenviar = document.getElementById("enviar");
  const fieldmultiresult = document.getElementById("total");
  botonenviar.addEventListener("click", (e) => {
    //cuando se haga el click en el formulario
    //recogemos los resultados de los inputs
    const precio = fieldprecio.value || 0;
    const cantidad = fieldcantidad.value || 0;
    //los multiplicamos
    const total = precio * cantidad;
    //y mostramos el resultado en el ultimo input
    fieldmultiresult.value = total;
  });
  //actividad4 ESTA EN EL HEAD

  // Actividad 5
  const botones = document.getElementsByClassName("boton");
  for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", (e) => {
      window.alert(`el id del boton es ${botones[i].id}`);
    });
  }
  //actividad 6
  const inputcx=document.getElementById("cX");//inicializamos los dos inputs
  const inputcy=document.getElementById("cY");
    document.addEventListener("mousemove",(e)=>{//a medida que se mueva el raton por la pantalla del navegador modifica los inputs
      inputcx.value=`${e.screenX}`;
      inputcy.value=`${e.screenY}`;//utilizamos los screenX/Y para que nos de la informacion del raton 
    });

    //actividad7
    const c1 = document.getElementById("c1");
    const c2 = document.getElementById("c2"); //recogemos a los dos elemenos
    const c3 = document.getElementById("c3"); //recogemos a los dos elemenos
    c1.addEventListener("mouseenter", (e) => {
      c1.style.backgroundColor = `rgb(${255}, ${255}, ${255})`; //cada vez que se pase el raton por encima del recuadro , cambiara el de la c1
      c2.style.backgroundColor = `rgb(${255}, ${0}, ${0})`; //cada vez que se pase el raton por encima del recuadro , cambiara el de la c2

    });
    c1.addEventListener("mouseleave", (e) => {
      c1.style.backgroundColor = `rgb(${255}, ${0}, ${0})`; //cada vez que se pase el raton por encima del recuadro , cambiara el de la c1
      c2.style.backgroundColor = `rgb(${255}, ${255}, ${255})`; //cada vez que se pase el raton por encima del recuadro , cambiara el de la c2

    });

    c3.addEventListener("mouseenter", (e) => {
      c3.style.backgroundColor = `rgb(${255}, ${255}, ${255})`; //cada vez que se pase el raton por encima del recuadro , cambiara el de la c3
      c2.style.backgroundColor = `rgb(${0}, ${0}, ${255})`; //cada vez que se pase el raton por encima del recuadro , cambiara el de la c2

    });
    c3.addEventListener("mouseleave", (e) => {
      c3.style.backgroundColor = `rgb(${0}, ${0}, ${255})`; //cada vez que se pase el raton por encima del recuadro , cambiara el de la c3
      c2.style.backgroundColor = `rgb(${255}, ${255}, ${255})`; //cada vez que se pase el raton por encima del recuadro , cambiara el de la c2

    });
    

    //actividad8
  const inputletras=document.getElementById("letras");
  
     inputletras.addEventListener("keydown", (e) => {
      // Si la tecla es un número, detener el evento
      if (e.key >= '0' && e.key <= '9') {
        e.preventDefault();
        inputletras.disabled = true; // Desactivar el campo
       inputletras.value="el campo se a desactivado";
      }
    });


});
