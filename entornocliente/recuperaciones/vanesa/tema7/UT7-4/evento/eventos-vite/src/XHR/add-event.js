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

        const data = new Eventos({
            name: formulario.name.value,
            date: formulario.date.value,
            description: formulario.description.value,
            price: formulario.price.value,
            image: imgPreview.src,
        });

        // 1. Creamos la instancia del objeto
        const xhr = new XMLHttpRequest();
        // 2. Establecemos la comunicación con el servidor 
        //    -- Añadimos cabeceras a la petición
        //    Método POST:
        xhr.open('POST', `${SERVER}/eventos`, true);
        xhr.setRequestHeader('Content-Type', 'application/json'); // indicamos que enviamos un json
        // 3. Enviamos la petición al servidor
        xhr.send(JSON.stringify(data)); // pasamos evnto de Objeto a JSON
        // 4. Ponemos una escucha al objeto
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === 201) {
                    const json = JSON.parse(xhr.responseText); // JSON a Objeto -- CALLBACK
                    console.log(json);
                    
                    location.assign("./index.html");//redirigimos al index
                } else {
                    console.error("Fallo insertando el evnto:", xhr.statusText);
                }
            }
        };
        
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