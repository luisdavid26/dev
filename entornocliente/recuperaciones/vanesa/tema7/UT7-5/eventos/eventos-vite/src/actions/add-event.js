import { Eventos } from "../model/evento.class";
import { Auth } from "../service/auth-service";

const server = import.meta.env.VITE_SERVER;
const port = '8000';
const url = `${server}:${port}`;

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
        //comprobacion de si existe el token
        const headers = {};
        const token = localStorage.getItem("token");

        if (token) headers.Authorization = "Bearer " + token;

        try {
            const data = new Eventos({
                name: formulario.name.value,
                date: formulario.date.value,
                description: formulario.description.value,
                price: formulario.price.value,
                image: imgPreview.src,
            });

            // Fetch con segundo parámetro con la información
            const resp = await fetch(`${url}/eventos`, {
                method: 'POST', // Método
                body: JSON.stringify(data), // pasamos evento de Objeto a JSON en el body
                headers: { // Indicamos encabezados
                    'Content-Type': 'application/json',
                    ...headers
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

//Cierre de sesion cuando se hace click
document.getElementById("logout").addEventListener("click", (e) => {
    e.preventDefault();

    //llammos al metodo para hacer logout
    Auth.logout();
    //redirigimos al login
    location.assign("./login.html");
});

//cuando cargue la pagina comprobamos si hay un token
window.addEventListener("load", async (e) => {
    e.preventDefault();

    try {
        //llamamo al metodo para checkear el token
        await Auth.checkToken();
    } catch (error) {
        /*Le pongo un tiempo por el error que te comente que me salia de "NetworkError when attempting to fetch resource."*/
        setTimeout(() => location.assign("./login.html"), 3000);
    }
});