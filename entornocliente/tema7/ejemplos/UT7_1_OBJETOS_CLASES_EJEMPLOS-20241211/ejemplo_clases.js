/**
 * Las variables y constantes incluidas en una clase se denominan propiedades, 
 * y se utilizan para guardar información relacionada (se suele denominar estado). 
 * Por otro lado, las funciones incluidas en una clase se denominan métodos y se utilizan 
 * para realizar una acción relacionada con la clase.
 * 
 * -- Forma clásica
 */
class Product {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    // this.precio = 20;
  }

  getDescuento(descuento) { // se añade al prototype de la función constructora
    let totalDesc = (this.precio * descuento) / 100;
    return this.precio - totalDesc;
  }

  toString() { // se sobrecarga toString() de Object (comentar para ver prototype)
    return `${this.nombre} (${this.precio.toFixed(2)}€)`;
  }
}

console.log(typeof Product); // function: Internamente sigue siendo una función como en versiones antiguas
console.log(Product); // class Product {...}


const producto = new Product("silla", 23);
console.log(producto); // Object { nombre: "silla", precio: 23 }
console.log(producto.nombre, producto.precio); // silla 23
console.log(producto.toString()); // 'silla (23.00€)'

console.log(typeof producto.prototype); // Imprime undefined (no tenemos acceso a través de esta propiedad)
console.log(typeof producto.__proto__); // Imprime object (no se recomienda modificar esta propiedad)