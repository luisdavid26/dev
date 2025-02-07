import Auth from "./auth-service.js";

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("form-register");

  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();
    let esValido = true;
    const errorInfo = document.getElementById("errorInfo");
    errorInfo.textContent = "";

    // obtener los valores de los campos
    const campoUsername = document.getElementById("username");
    const campoEmail = document.getElementById("email");
    const campoEmail2 = document.getElementById("email2");
    const campoPassword = document.getElementById("password");
    const campoAvatarInput = document.getElementById("avatar");
    const campoAvatar = campoAvatarInput.files[0];

    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // validaciones
    if (!campoUsername.value.trim()) {
      campoUsername.classList.add("is-invalid");
      esValido = false;
    } else {
      campoUsername.classList.remove("is-invalid");
    }

    if (!campoEmail.value || !emailReg.test(campoEmail.value)) {
      campoEmail.classList.add("is-invalid");
      esValido = false;
    } else {
      campoEmail.classList.remove("is-invalid");
    }

    if (campoEmail.value !== campoEmail2.value) {
      campoEmail2.classList.add("is-invalid");
      esValido = false;
    } else {
      campoEmail2.classList.remove("is-invalid");
    }

    if (esValido) {
      // convertir la imagen a base64 si existe
      const reader = new FileReader();
      reader.onloadend = async () => {
        const nuevoUsuario = {
          username: campoUsername.value.trim(),
          email: campoEmail.value.trim(),
          password: campoPassword.value,
          avatar: campoAvatar ? reader.result : "no hay imagen",
        };
        // llamamos al metodo register de la clase auth y pasamos el nuevo usuario
        try {
          const response = await Auth.register(nuevoUsuario);
          const mensajeerro = response.message;
          //si el registro es exitoso, redirige a la pagina principal
          if (response.status === 201) {
            location.assign("../public/index.html");
          } else {
            // mostramos el error en un alert para que lo vea bien el usuario
            window.alert(`error ${response.status}: ${mensajeerro}`);
          }
        } catch (error) {
          console.log(`error ${response.status}: ${mensajeerro}`);
        }
      };

      if (campoAvatar) { 
        reader.readAsDataURL(campoAvatar);
      } else {
        reader.onloadend();
      }
    } else {
      window.alert("corrige los errores del formulario");
    }
  });
});