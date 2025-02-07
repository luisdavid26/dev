// auth-service.js

class Auth {
    // Método para iniciar sesión
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
            localStorage.setItem("token", data.token); // Guardar el token
            return data;
        } else {
            throw new Error("Error en el login");
        }
    }

    // Método para registrar un usuario
    static async register(userData) {
        const response = await fetch(`${SERVER}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Error en el registro");
        }
    }

    // Método para verificar el token
    static async checkToken() {
        const token = localStorage.getItem("token");

        if (!token) {
            throw new Error("No hay token");
        }

        const response = await fetch(`${SERVER}/auth/validate`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error("Token inválido");
        }

        return response.json();
    }

    // Método para cerrar sesión
    static logout() {
        localStorage.removeItem("token");
    }
}

export default Auth;