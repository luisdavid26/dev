// auth-service.js
const SERVER = "http://localhost:8000";

class Auth {
    // Método para iniciar sesión
    static async login(username, password) {
        console.log("intentando inicio de sesion");
        const response = await fetch(`${SERVER}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            console.log("login exitoso");
            const data = await response.json();
            localStorage.setItem("token", data.token); // Guardar el token
            return data;
        } else {
            throw new Error("Error en el login");
        }
    }

    // Método para registrar un usuario
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

    // Metodo para cerrar sesión
    static logout() {
        localStorage.removeItem("token");
    }
}

export default Auth;