"use strict";

/*REferencias
- https://stackoverflow.com/questions/61367954/is-invalid-is-rendered-as-is-valid 
- https://getbootstrap.com/docs/4.1/components/forms/#how-it-works 
*/

import { eventData, agregarEventos } from "./events.js";

let formulario = document.getElementById("newEvent");
let imgPreview = document.querySelector("#imgPreview");
let container = document.querySelector("#eventsContainer");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let esValido = true;

    let listaCampos = formulario.querySelectorAll("input, textarea");

    listaCampos.forEach(campo => {
        //cuando el campo esta vacio
        if (campo.value.trim() === "") {
            //le añadimos es invalid
            campo.classList.add("is-invalid");
            esValido = false;
        }
        //si es correcto añadimos es valid
        else {
            campo.classList.remove("is-invalid");
            campo.classList.add("is-valid")
        }
    });

    /*si todos los campos esta rellenado, 
    borramos el formulario y quitamos las clases es valido y es invalido*/
    if (esValido) {
        let nombre = document.querySelector("#name");
        let fecha = new Date(document.querySelector("#date").value);
        let descripcion = document.querySelector("#description");
        let precio = document.querySelector("#price");

        //eliminar clases is-valid is-invalid
        listaCampos.forEach(campo => {
            campo.classList.remove("is-invalid", "is-valid");
        });

        //fecha fotmato dd/mm/YYYY
        let fechaFormato = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();


        //----- CARD
        let card = document.createElement("div");
        card.classList.add("card");

        //imagen
        let imagen = document.createElement("img");
        imagen.src = imgPreview.src;
        imagen.classList.add("card-img-top");

        //----- CARD BODY
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        //nombre
        let h4Nombre = document.createElement("h4");
        h4Nombre.textContent = nombre.value;
        h4Nombre.classList.add("card-title");

        //descripcion
        let pDescripcion = document.createElement("p");
        pDescripcion.textContent = descripcion.value;
        pDescripcion.classList.add("card-text");

        cardBody.append(h4Nombre, pDescripcion);

        //----- CARD FOOTER
        let cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");

        //fecha
        let samllFecha = document.createElement("small");
        samllFecha.textContent = fechaFormato;
        samllFecha.classList.add("text-muted");

        //precio
        let spanPrecio = document.createElement("span");
        spanPrecio.textContent = precio.value + "€";
        spanPrecio.classList.add("float-right");

        cardFooter.append(samllFecha, spanPrecio);

        //añadir las coasas a la card
        card.append(imagen, cardBody, cardFooter);
        container.append(card);

        //resetear el formulario y la imagen
        formulario.reset();
        imgPreview.src = "";

        agregarEventos({
            name: nombre.value,
            date: fecha,
            description: descripcion.value,
            image: imgPreview.src,
            price: precio.value
        });
        
    }

});

formulario.image.addEventListener("change", (event) => {
    let file = formulario.image.files[0];
    let reader = new FileReader();
    if (file) reader.readAsDataURL(file); // Serializar en base64
    reader.addEventListener("load", (e) => {
        // Serialización terminada
        imgPreview.src = reader.result; // Datos en Base64
    });
});