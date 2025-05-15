//clase que va a simular un coche
class Auto {
    //variables
    #encendido = false;
    #velocidad = 0;
    #marca;
    #modelo;
    #patente;

    //constructor
    constructor(marca, modelo, patente) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#patente = patente;
    }

    //metodos
    //metodo que va a cambiar el valor de encendido a true simulando que el coche
    arrancar() {
        return this.#encendido = true;
    }

    /*metodo que va a cambiar el valor de encendido a false si la velocidad es igual a 0 
    simulando que el coche esta apaagdo*/
    apagar() {
        if (this.#velocidad === 0) {
            return this.#encendido = false;
        }
    }

    /*Metodo para cambiar la velocidad del coche en el cual para cambiarlo
    el coche tiene que estar encendido */
    acelerar() {
        if (this.#encendido) {
            return this.#velocidad += 10;
        }
    }

    /*Metodo para bajar la velocidad del coche en el cual el coche tiene que estar encendido y la velocidad
    no puede ser menor a 0 */
    desacelerar() {
        if (this.#encendido && (this.#velocidad - 10 >= 0)) {
            return this.#velocidad -= 10;
        }

    }

    //metodo para mostrar una cadena de texto con la marca, el modelo y la patente
    toString() {
        return `${this.#marca} ${this.#modelo}, patente ${this.#patente}`;
    }

    //metodo apra obtener la velocidad
    getVelocidad() {
        return this.#velocidad;
    }
}

// Ejemplo de uso: 
const miAuto = new Auto('Toyota', 2021, 'ABC123');
console.log(miAuto.toString()); // Toyota 2021, patente ABC123 
miAuto.arrancar();
miAuto.acelerar();
console.log(miAuto.getVelocidad()); // 10 
miAuto.desacelerar();
console.log(miAuto.getVelocidad()); // 0 
miAuto.apagar();