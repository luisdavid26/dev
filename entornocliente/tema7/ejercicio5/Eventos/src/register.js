import Auth from "./auth-service.js";

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("form-register");

  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();
    let esValido = true;
    const errorInfo = document.getElementById("errorInfo");
    errorInfo.textContent = "";

    // Obtener los valores de los campos
    const campoUsername = document.getElementById("username");
    const campoEmail = document.getElementById("email");
    const campoEmail2 = document.getElementById("email2");
    const campoPassword = document.getElementById("password");
    const campoAvatarInput = document.getElementById("avatar");
    const campoAvatar = campoAvatarInput.files[0];

    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordReg = /^.{4,}$/; // Mínimo 4 caracteres

    // Validaciones
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

    if (!campoPassword.value || !passwordReg.test(campoPassword.value)) {
      campoPassword.classList.add("is-invalid");
      esValido = false;
    } else {
      campoPassword.classList.remove("is-invalid");
    }

    if (esValido) {
      // Convertir la imagen a base64 si existe
      const reader = new FileReader();
      reader.onloadend = async () => {
        const nuevoUsuario = {
          username: campoUsername.value.trim(),
          email: campoEmail.value.trim(),
          password: campoPassword.value,
          avatar: campoAvatar ? reader.result : "no hay imagen",
        };

        try {
          const response = await Auth.register(nuevoUsuario);
          const mensajeerro = response.message;
          if (response.status === 201) {
            window.alert("Registro exitoso. Redirigiendo al login...");
            location.assign("login.html");
          } else {

            window.alert(`Error ${response.status}: ${mensajeerro}`);
          }
        } catch (error) {
          window.alert(`Error ${response.status}: ${mensajeerro}`);
        }
      };

      if (campoAvatar) {
        reader.readAsDataURL(campoAvatar);
      } else {
        reader.onloadend(); // Llamar directamente si no hay imagen
      }
    } else {
      window.alert("Por favor, corrige los errores del formulario.");
    }
  });
});
