import Auth from "./auth-service.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("form-login");
  const errorInfo = document.getElementById("errorInfo");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // evita el envio por defecto del formulario
    console.log(localStorage.getItem("token"));
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      // llamamos al metodo login de la clase auth, que se encarga de guardar el token en localstorage
      await Auth.login(username, password);
      // si el login es exitoso, redirige a index.html
      window.location= "../public/index.html";
    } catch (error) {
      console.error("error en el login:", error);
      errorInfo.textContent = error.message;
    }
  });
});