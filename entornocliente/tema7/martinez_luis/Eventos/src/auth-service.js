const SERVER = "http://localhost:8000";

class Auth {
  // metodo para iniciar sesion
  static async login(username, password) {
    const response = await fetch(`${SERVER}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token); // guardar el token
      return data;
    } else {
      throw new Error("Error en el login");
    }
  }

  // metodo para registrar un usuario
  static async register(userData) {
    try {
      const response = await fetch(`${SERVER}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log(`Error: ${response.status} - ${data.message}`);
      }

      return data;
    } catch (error) {
      console.error("Error en el registro:", error.message);
      throw error;
    }
  }

  // metodo para verificar el token
  static async checkToken() {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      throw new Error("No hay token guardado.");
    }

    try {
      // comprobamos si el token es valido
      const response = await fetch(`${SERVER}/auth/validate`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${data.message}`);
      }

      return data;
    } catch (error) {
      console.error("Error al verificar el token:", error.message);
      throw error;
    }
  }

  // metodo para cerrar sesion
  static logout() {
    localStorage.removeItem("token");
  }
}

export default Auth;