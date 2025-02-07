// token-verification.js
import Auth from "./src/auth-service.js"; 

document.addEventListener("DOMContentLoaded", async () => {
  // Verificar si el token es válido
  try {
    await Auth.checkToken();
    // El token es válido; continúa en la página actual.
  } catch (error) {
    // El token no es válido o no existe; redirige al login.
    window.location.href = "../login.html";
  }

  // Gestionar el clic en el enlace de "Cerrar sesión"
  const logoutLink = document.getElementById("logout");
  if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      Auth.logout();
      window.location.href = "../login.html";
    });
  }
});
