/**
 * Propiedades Computadas:
 * Para definirlas, simplemente añadimos la palabra clave get o set antes del nombre de la función.
 * Nos pueden venir muy bien cuando queramos modificar ligeramente ciertos elementos 
 * de una forma automática y organizada.
 */
class Product {
  #nombre;
  #precio;
  calidad;

  constructor(nombre = 'Marina', precio = 30, calidad = 5) {
    this.nombre = nombre; // ejecuta setter -- además la asignación es errónea; por lo que saldría undefined
    this.precio = precio; // ejecuta setter -- además la asignación es errónea; por lo que saldría undefined
    this.calidad = calidad; // ejecuta constructor
  }

  get nombre() { // Getter
    return this.#nombre;
  }

  set nombre(nombre) { // Setter
    if(!nombre) throw Error("El nombre no puede estar vacío"); 
    this.#nombre = nombre;
  }

  get precio() { // Getter
    return this.#precio;
  }

  set precio(precio) { // Setter
      this.#precio = precio;
  }
  // La idea de este tipo de propiedades, es permitir pequeñas modificaciones sobre propiedades ya existentes.
  get estrellas() { // Getter
    return '⭐'.repeat(this.calidad);
  }

  getDescuento(descuento) {
    let totalDesc = (this.#precio * descuento) / 100;
    return this.#precio - totalDesc;
  }

  toString() {
    return `${this.#nombre} (${this.#precio.toFixed(2)}€)`;
  }
}

const producto = new Product("Silla", 23);
console.log(producto);

console.log(producto.nombre,producto.precio,producto.calidad);
console.log(producto.estrellas);

// producto.nombre = null; // Uncaught Error: El nombre no puede estar vacío


