document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const errorInfo = document.getElementById("errorInfo");
  
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault(); // Evitar el envío por defecto del formulario
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      try {
        const response = await fetch("http://localhost:8000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // Guardar el token en el almacenamiento local
          localStorage.setItem("token", data.token);
          
          // Redirigir a index.html
          window.location.href = "index.html";
        } else {
          // Mostrar mensaje de error
          errorInfo.textContent = data.message || "Usuario o contraseña incorrectos.";
        }
      } catch (error) {
        console.error("Error al autenticar:", error);
        errorInfo.textContent = "Error en el servidor. Intenta nuevamente.";
      }
    });
  });
  