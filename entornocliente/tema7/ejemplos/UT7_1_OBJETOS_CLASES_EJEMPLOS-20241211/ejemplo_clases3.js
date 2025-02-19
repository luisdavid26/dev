class Product {
  #nombre; // propiedad privada
  precio = 20; // propiedad pública
  constructor(nombre) {
    this.#nombre = nombre; // sólo se puede modificar desde dentro de la clase
    this.#productCreado(); // sólo se puede llamar desde dentro de la clase
  }

  getDescuento(descuento) {
    let totalDesc = (this.precio * descuento) / 100;
    return this.precio - totalDesc;
  }

  toString() {
    return `${this.#nombre} (${this.precio.toFixed(2)}€)`;
  }

  #productCreado() {
    console.log(`Producto creado: ${this.#nombre}`);
  }
}

const producto = new Product('Silla'); // 'Producto creado: Silla'
console.log(producto); // Object { precio: 20, #nombre: "Silla" }

console.log(producto.nombre); // undefined -- no existe esta propiedad
// console.log(producto.#nombre); // Uncaught SyntaxError: reference to undeclared private field or method #nombre
producto.nombre = 'Propiedad Pública'; // añade propiedad pública
producto.nombre = 'Propieda Pública CAMBIADA'; // modifica propiedad pública

producto.precio = 23; // propiedad pública -- se puede modificar desde fuera de la clase
console.log(producto); // Object { precio: 23, nombre: "Propieda Pública CAMBIADA", #nombre: "Silla" }

console.log(producto.toString()); // 'Silla (23.00€)'

// producto.#productCreado(); // Uncaught SyntaxError: reference to undeclared private field or method #productCreado
// producto.productCreado(); // Uncaught TypeError: producto.productCreado is not a function