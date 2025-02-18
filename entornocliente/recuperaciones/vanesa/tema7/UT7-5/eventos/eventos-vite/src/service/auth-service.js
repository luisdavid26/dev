const SERVER = 'http://localhost:8000';

class Auth {
    /**Metodo para hacer un post enviando el usuario y la contraseña
     * 
     * @param {*} username - usuario
     * @param {*} password - contraseña
     */
    static async login(username, password) {
        try {
            const resp = await fetch(`${SERVER}/auth/login`, {
                method: 'POST', // Método
                body: JSON.stringify({ username, password }), // pasamos evento de Objeto a JSON en el body
                headers: { // Indicamos encabezados
                    'Content-Type': 'application/json'
                }
            });

            if (!resp.ok) {
                //lee el mensaje de la api
                const errorData = await resp.json();
                //lanzamos un error con el mensje
                throw new Error(errorData.message);
            }

            const data = await resp.json();
            localStorage.setItem("token", data.token);
        } catch (error) {
            //relanza el error para que se maneje en el html
            throw new Error(error.message);
        }
    }

    /**Metodo para hacer un post enviando los datos del usuario
     * 
     * @param {*} userData - datos del usuario (nombre, email, password, avatar)
     */
    static async register(userData) {
        try {
            const resp = await fetch(`${SERVER}/auth/register`, {
                method: 'POST', // Método
                body: JSON.stringify(userData), // pasamos evento de Objeto a JSON en el body
                headers: { // Indicamos encabezados
                    'Content-Type': 'application/json'
                }
            });

            if (!resp.ok) {
                //lee el mensaje de la api
                const errorData = await resp.json();
                //lanzamos un error con el mensje
                throw new Error(errorData.message);
            }

        } catch (error) {
            //relanza el error para que se maneje en el html
            throw new Error(error.message);
        }
    }

    /**
     * Metodo para comprobar si el token almacenado es valido con un GET
     */
    static async checkToken() {
        try {
            let token = localStorage.getItem("token");

            const resp = await fetch(`${SERVER}/auth/validate`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }); // promesa fetch

            if (!resp.ok) {
                //lee el mensaje de la api
                const errorData = await resp.json();
                //lanzamos un error con el mensje
                throw new Error(errorData.message);
            }

        } catch (error) {
            //relanza el error para que se maneje en el html
            console.error("error " + error.message);
            throw new Error(error.message);
        }
    }

    /**
     * Metodo para borrar el token del LocalStorege
     */
    static logout() {
        localStorage.removeItem("token");
    }
}

export { Auth };