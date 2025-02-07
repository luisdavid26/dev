// token-verification.js
import Auth from "./auth-service.js"; 
document.addEventListener("DOMContentLoaded", async () => {
  // Verificar si el token es válido
    const respuesta = await Auth.checkToken();
    console.log("Token verificado:", respuesta);


  // si se hace click en cerrar sesion se eliminara el token y se redirigira a la pagina de login
  const logoutLink = document.getElementById("logout");
  if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      Auth.logout();
      window.location.href = "../public/login.html";
    });
  }
});
