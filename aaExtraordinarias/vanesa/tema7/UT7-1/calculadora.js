//clase que va a representar una calculadora
class Calculadora {
    //variables
    #resultado=0;


    //metodos
    //metodo para sumar un numero al resultado
    sumar(numero) {
        if (!Number.isFinite(numero)) {
            throw new Error("El campo no es un número");
        }

        return this.#resultado += numero;
    }

    //metodo para restar un numero al resultado
    restar(numero) {
        if (!Number.isFinite(numero)) {
            throw new Error("El campo no es un número");
        }

        return this.#resultado -= numero;
    }

    //metodo para multiplicar un numero al resultado
    multiplicar(numero) {
        if (!Number.isFinite(numero)) {
            throw new Error("El campo no es un número");
        }

        return this.#resultado *= numero;
    }

    //metodo para dividir un numero al resultado
    dividir(numero) {
        if (!Number.isFinite(numero)) {
            throw new Error("El campo no es un número");
        }

        if (numero === 0) {
            throw new Error("No se puede dividir entre 0");
        }
        else {
            return this.#resultado /= numero;
        }
    }

    //metodo para obtener el resultado
    obtenerResultado() {
        return this.#resultado;
    }

    //metodo para reiniciar el resultado a 0
    reiniciar() {
        return this.#resultado = 0;
    }
}

// Ejemplo de uso: 
const calc = new Calculadora();
console.log(calc.sumar(10)); // 10 
console.log(calc.restar(5)); // 5 
console.log(calc.multiplicar(3)); // 15 
console.log(calc.dividir(5)); // 3 
console.log(calc.obtenerResultado()); // 3 
calc.reiniciar(); // resultado vuelve a 0 