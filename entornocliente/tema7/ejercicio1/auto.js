class auto {
  encendido = false;
  velocidad = 0;
  #marca;
  #modelo;
  #patente;
  constructor(marca, modelo, patente) {
    this.marca = marca;
    this.modelo = modelo;
    this.patente = patente;
  }

  arrancar() {
    if ((this.encendido = false)) {
      this.encendido = true;
    }
  }
  apagar() {
    if ((this.encendido = true)) {
      this.encendido = false;
    }
  }
  acelerar() {
    this.velocidad += 10;
  }
  desacelerar() {
    if (this.velocidad < 10) {
      this.velocidad = 0;
    } else {
      this.velocidad -= 10;
    }
  }
  getVelocidad(){
    return `${this.velocidad}`;
  }
  toString() {
    return `${this.marca} ${this.modelo}, patente ${this.patente}`;
  }
}
const miAuto = new auto('Toyota', 2021, 'ABC123');
console.log(miAuto.toString()); // Toyota 2021, patente ABC123
miAuto.arrancar();
miAuto.acelerar();
console.log(miAuto.getVelocidad()); // 10
miAuto.desacelerar();
console.log(miAuto.getVelocidad()); // 0
miAuto.apagar();