import { Auth } from "../service/auth-service";

/*
.env en vite referencia
https://stackoverflow.com/questions/70709987/how-to-load-environment-variables-from-env-file-using-vite
*/
const server = import.meta.env.VITE_SERVER;
const port = '8000';
const url = `${server}:${port}`;

let eventos = [];

// Petición GET (por defecto) con Fetch
async function getEventos() {
    //comprobacion de si existe el token
    const headers = {};
    const token = localStorage.getItem("token");

    if (token) headers.Authorization = "Bearer " + token;

    try {
        const resp = await fetch(`${url}/eventos`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                ...headers
            }
        }); // promesa fetch

        // si el status no está entre 200 y 299, se produce error
        if (!resp.ok) throw new Error(`Error: ${resp.status} ${resp.statusText}`);

        // JSON a Objeto
        const json = await resp.json(); // promesa .json()
        eventos = json.data;

        replaceEventos();

    } catch (error) {
        console.error("Fallo en la obtención de eventos:", error);
    }
}


/**
 * Gestión DOM
 */
function replaceEventos() {
    let container = document.querySelector("#eventsContainer");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    eventos.forEach(e => {
        appendEvent(e, container);
    });

}

function appendEvent(e, container) {
    //----- CARD
    let card = document.createElement("div");
    card.classList.add("card");

    //imagen
    let imagen = document.createElement("img");
    imagen.src = e.image;
    imagen.classList.add("card-img-top");

    //----- CARD BODY
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    //nombre
    let h4Nombre = document.createElement("h4");
    h4Nombre.textContent = e.name;
    h4Nombre.classList.add("card-title");

    //descripcion
    let pDescripcion = document.createElement("p");
    pDescripcion.textContent = e.description;
    pDescripcion.classList.add("card-text");

    cardBody.append(h4Nombre, pDescripcion);

    //----- CARD FOOTER
    let cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    //fecha
    let samllFecha = document.createElement("small");
    samllFecha.textContent = e.date;
    samllFecha.classList.add("text-muted");

    //precio
    let spanPrecio = document.createElement("span");
    spanPrecio.textContent = e.price + "€";
    spanPrecio.classList.add("float-right");

    cardFooter.append(samllFecha, spanPrecio);

    //añadir las coasas a la card
    card.append(imagen, cardBody, cardFooter);
    container.append(card);
}

getEventos();

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
        await Auth.checkToken();
    } catch (error) {
        /*Le pongo un tiempo por el error que te comente que me salia de "NetworkError when attempting to fetch resource."*/
        setTimeout(() => location.assign("./login.html"), 3000);
    }
});