import { Eventos } from "../model/evento.class";

const SERVER = 'http://localhost:8000';

let formulario = document.getElementById("newEvent");
let imgPreview = document.querySelector("#imgPreview");

formulario.addEventListener("submit", async (e) => {
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
        try {
            const data = new Eventos({
                name: formulario.name.value,
                date: formulario.date.value,
                description: formulario.description.value,
                price: formulario.price.value,
                image: imgPreview.src, 
            });
            
            // Fetch con segundo parámetro con la información
            const resp = await fetch(`${SERVER}/eventos`, {
                method: 'POST', // Método
                body: JSON.stringify(data), // pasamos evento de Objeto a JSON en el body
                headers: { // Indicamos encabezados
                    'Content-Type': 'application/json'
                }
            });

            // si el status no está entre 200 y 299, se produce error
            if (!resp.ok) throw new Error(`Error: ${resp.status} ${resp.statusText}`);
            location.assign("./index.html");//redirigimos al index
        } catch (error) {
            console.error("Fallo insertando el evento:", error);
        }
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