class calculadora {
  numero = 0;
  constructor(numero) {
    this.numero = numero;
  }

  sumar(numerosuma) {
    if (!isNaN(numerosuma)) {
      let resultsuma = this.numero + numerosuma;
      console.log(`suma: ${resultsuma}`);
      
      return (this.numero = resultsuma);
    } else {
      return 0;
    }
  }
  restar(numeroresta) {
    if (numeroresta.isFinite() && !isNaN(numeroresta)) {
      let resultresta = this.numero - numeroresta;
      console.log(`resta: ${resultresta}`);
      return (this.numero = resultresta);
    } else {
      return 0;
    }
  }
  multiplicar(numeromult) {
    if (numeromult.isFinite() && !isNaN(numeromult) && !numeromult <= 0) {
      let resultmult = this.numero * numeromult;
      console.log(`mult: ${resultmult}`);

      return (this.numero = resultmult);
    } else {
      return 0;
    }
  }
  dividir(numerodiv) {
    if (numerodiv.isFinite() && !isNaN(numerodiv)) {
      let resultdiv = this.numero * numerodiv;
      console.log(`div: ${resultdiv}`);
      return (this.numero = resultdiv);
    } else {
      return 0;
    }
  }
  obtenerresultados() {
    return this.numero;
  }
  reiniciar(){
    this.numero=0;
  }
}
const calc = new calculadora();
console.log(calc.sumar(10)); // 10
console.log(calc.restar(5)); // 5
console.log(calc.multiplicar(3)); // 15
console.log(calc.dividir(5)); // 3
console.log(calc.obtenerresultados()); // 3
calc.reiniciar();