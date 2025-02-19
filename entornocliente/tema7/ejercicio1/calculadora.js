class Calculadora {
  #numero;

  constructor(numero = 0) {
    if (typeof numero === 'number' && !isNaN(numero)) {
      this.#numero = numero;
    } else {
      throw new Error('el valor inicial tiene que ser valido');
    }
  }

  sumar(numerosuma) {
    if (typeof numerosuma === 'number' && !isNaN(numerosuma)) {
      this.#numero += numerosuma;
      return this.#numero;
    } else {
      console.log('suma no valida');
      return null;
    }
  }

  restar(numeroresta) {
    if (typeof numeroresta === 'number' && !isNaN(numeroresta)) {
      this.#numero -= numeroresta;
      return this.#numero;
    } else {
      console.log('resta no valida');
      return null;
    }
  }

  multiplicar(numeromult) {
    if (typeof numeromult === 'number' && !isNaN(numeromult)) {
      this.#numero *= numeromult;
      return this.#numero;
    } else {
      console.log('multiplicacion no valida');
      return null;
    }
  }

  dividir(numerodiv) {
    if (typeof numerodiv === 'number' && !isNaN(numerodiv) && numerodiv !== 0) {
      this.#numero /= numerodiv;
      return this.#numero;
    } else {
      console.log('division no valida o no se puede dividir entre 0');
      return null;
    }
  }

  obtenerresultados() {
    return this.#numero;
  }

  reiniciar() {
    this.#numero = 0;
  }
}

const calc = new Calculadora(0);
console.log(calc.sumar(10)); // Salida: 10
console.log(calc.restar(5)); // Salida: 5
console.log(calc.multiplicar(3)); // Salida: 15
console.log(calc.dividir(5)); // Salida: 3
console.log(calc.obtenerresultados()); // Salida: 3
calc.reiniciar();
console.log(calc.obtenerresultados()); // Salida: 0
