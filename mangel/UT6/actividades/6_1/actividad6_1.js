document.addEventListener("DOMContentLoaded", (e) => {
    //Ejercicio 2
    const divRaton = document.getElementById("raton");
    const efecto = document.getElementById("efecto");
    divRaton.addEventListener("mouseenter", (e) => {
        efecto.style.backgroundColor = "rgb(152, 255, 167)";
    })
    divRaton.addEventListener("mouseleave", (e) =>{
        efecto.style.backgroundColor = "rgb(152, 169, 255)";
    })

    //Ejercicio  3
    const botonFormulario = document.getElementById("enviar");
    botonFormulario.addEventListener("click", (e) =>{
        let precio = document.getElementById("precio").value;
        let cantidad = document.getElementById("cantidad").value;
        let resultado = precio * cantidad;
        document.getElementById("total").value = resultado;
    })

    //Ejercicio 4
    const cuadro = document.getElementById("cuadro");

    cuadro.addEventListener("mouseenter", (e) => {
        cuadro.style.backgroundColor = "rgb(152, 255, 167)";
    })
    cuadro.addEventListener("mouseleave", (e) =>{
        cuadro.style.backgroundColor = "rgb(240, 171, 250)";
    })

    //Ejercicio 5
    function eventosClick() {
        const boton = document.getElementsByClassName("boton");
        for (let i = 0; i < boton.length; i++) {
            boton[i].addEventListener("click", (e) => {
                alert("Has pulsado el boton con el id: " + boton[i].id);
            })
        }
    }
    eventosClick();
    
    //Ejercicio 6
    const pagina = document;
    const inputX = document.getElementById("cX");
    const inputy = document.getElementById("cY");
    pagina.addEventListener("mousemove", (e) => {
        inputX.value = event.screenX;
        inputy.value = event.screenY;
    })

    //Ejercicio 7
    const red = document.getElementById("c1");
    const white = document.getElementById("c2");
    const blue = document.getElementById("c3");

    
})