// login.js
import Auth from "./auth-service.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("form-login");
  const errorInfo = document.getElementById("errorInfo");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Evita el envío por defecto del formulario

    // Obtener los valores del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      // Llamamos al método login de la clase Auth, que se encarga de guardar el token en localStorage
      await Auth.login(username, password);
      // Si el login es exitoso, redirige a index.html
      window.location= "./Eventos/index.html";
    } catch (error) {
      // Si hay un error (por ejemplo, credenciales incorrectas), se muestra el mensaje en la página
      console.error("Error en el login:", error);
      errorInfo.textContent = error.message || "Usuario o contraseña incorrectos.";
    }
  });
});
