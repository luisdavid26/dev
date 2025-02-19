import { Auth } from "../service/auth-service";

let formulario = document.getElementById("form-login");

let username = document.getElementById("username");
let password = document.getElementById("password");
let incorrecto = document.getElementById("errorInfo");

formulario.addEventListener("submit", async (e) => {
    e.preventDefault()
    incorrecto.textContent = "";

    let esValido = true;

    //cuando el campo esta vacio
    if (username.value.trim() === "" || password.value.trim() === "") {
        //le añadimos es invalid
        username.classList.add("is-invalid");
        password.classList.add("is-invalid");

        esValido = false;
    }
    //si es correcto añadimos es valid
    else {
        username.classList.remove("is-invalid");
        password.classList.remove("is-invalid");

        username.classList.add("is-valid");
        password.classList.add("is-valid");
    }

    //si es valido
    if (esValido) {
        try {
            //llamamos a la funcion login
            await Auth.login(username.value, password.value);
            location.assign("./index.html");//redirigimos al index

        } catch (error) {
            console.error("Error en el login " + error);

            //Mostramos un mensaje de error
            incorrecto.textContent = "Username o contraseña incorrectos";
        }
    }
});

//cuando cargue la pagina comprobamos si hay un token
formulario.addEventListener("load", async () => {
    try {
        //llamamo al metodo para checkear el token
        await Auth.checkToken();
        //redirigimos
        location.assign("./index.html");
    } catch (error) {
        location.assign("./login.html");
    }
});
