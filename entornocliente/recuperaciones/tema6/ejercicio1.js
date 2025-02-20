document.addEventListener("DOMContentLoaded", (e) => {
    const boton=document.getElementById("boton");

    boton.addEventListener("click",(e)=>{
        windows.alert("pulsaste sobre el boton");
    });
    const capa1 =document.getElementById("capa1");
    const capa2= document.getElementById("efecto");
    capa1.addEventListener("mouseenter",(e)=>{
        capa2.style.backgroundColor=`rgb(${0},${255},${255})`;
    });
    capa1.addEventListener("mouseleave",(e)=>{
        capa2.style.backgroundColor=`rgb(${255},${255},${255})`;
    });
    const recuadro=document.getElementById("capamovimiento");
    const imputx=document.getElementById("cX");
    const imputy=document.getElementById("cY");
    recuadro.addEventListener("mousemove",(event)=>{
        imputx.value=`${event.clientX}`;
        imputy.value=`${event.clientY}`;
    });
    

});
