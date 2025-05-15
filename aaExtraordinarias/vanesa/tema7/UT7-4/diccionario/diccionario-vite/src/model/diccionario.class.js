class Diccionario {
    //constructor
    constructor() {
        this.diccionario = new Map();
    }

    //metodos

    /**
     * funcion para añadir a un mapa de palabras un array de rimas
     *
     * @param {String} palabra - key del mapa
     * @param {String} rima - valor de la key
     */
    agregarRima(palabra, rima) {
        // Validar que no contenga numeros ni caracteres especiales
        /* Regex
        ^ -> inicio de la cadena
        a-zA-Z -> que contengan todas las letras mayusculas como minusculas
        áéíóúÁÉÍÓÚ -> que acepte tildes
        ñÑ -> que acepte la ñ
        üÜ -> que acepte dieresis
        + -> el patron anteerior puede estar 1 o mas veces
        $ -> fin de la cadena
        */
        const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+$/;

        if (!regex.test(palabra) || !regex.test(rima)) {
            return "No se permiten números ni caracteres especiales.";
        }

        // comprobamos si la palabra ya existe en el diccionario
        if (!this.diccionario.has(palabra)) {
            this.diccionario.set(palabra, []);
        }

        let palabraEncontrada = this.diccionario.get(palabra);

        // comprobamos si la rima ya existe
        if (palabraEncontrada.includes(rima)) {
            return "La rima ya existe para esta palabra.";
        }
        else {
            palabraEncontrada.push(rima);
            return "Rima agregada correctamente.";
        }
    }

    /**
    * Funcion que tras obtener una palabra vamos a obtener el array de las rimas
    * que esta almacenado en la key pasada como 'palabra'
    *
    * @param {String} palabra - key del mapa
    *
    * @returns {Array} - con las rimas
    */
    obtenerRimas(palabra) {
        /*Si la palabra ya se encuentra en el diccionario, devovlemos el valor almacenado en la key */
        if (this.diccionario.has(palabra)) {
            return this.diccionario.get(palabra);
        }
        //si no devolemos un array vacio
        else {
            return [];
        }
    }

    /**
    * Funcion para eliminar una rima de una key del mapa
    *
    * @param {String} palabra - key del mapa
    * @param {String} rima - valor de la key
    */
    eliminarRima(palabra, rima) {
        //si ya existe la palabra
        if (this.diccionario.has(palabra)) {
            let rimas = this.diccionario.get(palabra);
            let indice = rimas.indexOf(rima);

            if (indice !== -1) {
                //eliminamos la rima si esta en el array y mostramos un mensaje
                rimas.splice(indice, 1);
                return "Rima eliminada correctamente.";
            }
            //mostramos un mensaje si la rima no se encuentra
            else {
                return "No se encontro la rima para eliminar.";
            }
        }
        //mostramos un mensaje si la palabra no existe
        return "La palabra no existe en el diccionario.";
    }

    /**
     * Funcion que va a eliminar la palabra y tambien los valores asociados
     * a esa palabra
     *
     * @param {String} palabra - key del mapa
     *
     */
    eliminarPalabra(palabra) {
        //si ya existe la palabra
        if (this.diccionario.has(palabra)) {
            //la eliminamos del diccionario y msotramos un mensaje
            this.diccionario.delete(palabra);
            return "Palabra eliminada correctamente.";
        } else {
            return "La palabra no existe en el diccionario.";
        }
    }

    /**
    * Funcion para mostrar el mapa por consola
    * 
    * @return {string} - devuelve las palabras con sus rimas
    */
    mostrar() {
        let diccionarioTexto = "";

        //si el diccionario tiene palabras
        if (this.diccionario.size > 0) {
            // recorremos todas las palabras y rimas
            this.diccionario.forEach((rimas, palabra) => {
                //guardamos las palabras y las rimas en un formato de texto
                diccionarioTexto += "▸ " + palabra + ": " + rimas.join(", ") + "\n";
            });
        }
        else {
            //si no tenemos palabras mostramos un texto
            diccionarioTexto = "No hay palabras en el diccionario.";
        }

        //devolvemos la variable que hemos creado
        return diccionarioTexto;
    }

    /**
    * Funcion para obtener las palabras del diccionario
    * 
    * @returns {Array} - con las palabras del diccionario
    */
    obtenerPalabras() {
        // devolvemos un array con las palabras 
        return Array.from(this.diccionario.keys());
    }


    /**
     * Funcion para obtener las rimas de una palabra seleccionada
     * @param {*} - palabra 
     * @returns {} - 
     */
    obtenerRimas(palabra) {
        //si ya existe la palabra
        if (this.diccionario.has(palabra)) {
            // devuelve las rimas de la palabra
            return this.diccionario.get(palabra);
        }

        // Si no hay rimas para esa palabra devuelve un array vacio
        return [];
    }
}

export { Diccionario };
