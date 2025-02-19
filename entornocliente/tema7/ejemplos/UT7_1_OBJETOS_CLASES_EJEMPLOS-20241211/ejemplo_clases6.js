/**
 * Clase PADRE
 */
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saluda() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }

    toString() {
        return `${this.nombre} (${this.edad})`;
    }
}

/**
 * Clase HIJA
 * Extiende de su clase padre, por lo que la clase Usuario será una mezcla de lo que tiene la clase Persona 
 * más lo que tiene la clase Usuario.
 */
class Usuario extends Persona {
    constructor(nombre, edad, email, password) {
        // super(): Función especial que llama al constructor de la clase padre; 
        // por lo que antes de continuar, pasa a ejecutarse el constructor de Persona
        super(nombre, edad);
        this.email = email;
        this.password = password;
    }
    // Comentar y descomentar
    saluda() {
        // super.saluda(); // llamada al constructor de saluda() de Persona
        console.log(`Mi correo es ${this.email}`);
    }
}

const user = new Usuario("Pepe", 23, "pepe@email.com", "1234");
console.log(user); // Object { nombre: "Pepe", edad: 23, email: "pepe@email.com", password: "1234" }
user.saluda(); // 'Hola, soy Pepe y tengo 23 años' | 'Mi correo es pepe@email.com'
console.log(`Datos usuario: ${user}`); // toString() de Persona --> no sobrecargada en Usuario