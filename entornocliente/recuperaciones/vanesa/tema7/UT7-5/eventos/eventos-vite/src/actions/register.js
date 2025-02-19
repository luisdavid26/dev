import { Auth } from "../service/auth-service";

let formulario = document.getElementById("form-register");

let username = document.getElementById("username");
let email = document.getElementById("email");
let reptirEmail = document.getElementById("email2");
let password = document.getElementById("password");

let imgPreview = document.getElementById("imgPreview");

formulario.addEventListener("submit", async (e) => {
    e.preventDefault()
    let esValido = true;

    //cuando el campo esta vacio
    if (username.value.trim() === "" || email.value.trim() === "" ||
        reptirEmail.value.trim() === "" || password.value.trim() === "") {
        //le añadimos es invalid
        username.classList.add("is-invalid");
        email.classList.add("is-invalid");
        reptirEmail.classList.add("is-invalid");
        password.classList.add("is-invalid");

        esValido = false;
    }
    else if (email.value !== reptirEmail.value) {
        email.classList.add("is-invalid");
        reptirEmail.classList.add("is-invalid");
        esValido = false;

        alert("Los emails no coinciden");
    }
    //si es correcto añadimos es valid
    else {
        username.classList.remove("is-invalid");
        email.classList.remove("is-invalid");
        reptirEmail.classList.remove("is-invalid");
        password.classList.remove("is-invalid");

        username.classList.add("is-valid");
        email.classList.add("is-valid");
        reptirEmail.classList.add("is-valid");
        password.classList.add("is-valid");
    }

    //si es valido
    if (esValido) {
        try {
            //llamamos al metodo register
            await Auth.register({
                username: username.value,
                email: email.value,
                password: password.value,
                avatar: imgPreview.src || "",
            });

            location.assign("./login.html");//redirigimos al index
        } catch (error) {
            console.error("Error en el registro " + error);

            //mostramos una alerta
            alert("El usuario ya existe");
        }
    }
});

formulario.avatar.addEventListener("change", (event) => {
    let file = formulario.avatar.files[0];
    let reader = new FileReader();

    if (file) reader.readAsDataURL(file); // Serializar en base64
    reader.addEventListener("load", (e) => {
        // Serialización terminada
        imgPreview.src = reader.result; // Datos en Base64
    });
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
