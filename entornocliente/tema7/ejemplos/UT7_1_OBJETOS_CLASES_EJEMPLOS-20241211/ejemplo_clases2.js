/**
 * Puesto que se trata de propiedades de clase y el constructor() es un método que 
 * se ejecuta cuando se crea el objeto (instancia de clase), ambas son equivalentes, 
 * ya que al crear un objeto se ejecutará el constructor y se crearán esas propiedades.
 * -- Desde ES2020
 */
class Product {
  nombre; // Propiedad sin definir (undefined)
  precio = 20; // Propiedad definida con 20 euros

  // Las propiedades se pueden establecer de forma que todos los objetos tengan el mismo valor 
  // o tengan valores diferentes, dependiendo del objeto en cuestión,
  // pasándole los valores específicos por parámetro.
  constructor(nombre) {
    this.nombre = nombre;   // Modificamos el valor de la propiedad nombre del objeto creado o instanciado
    console.log(`Producto creado: ${this.nombre}`);  // Accedemos al valor actual de la propiedad nombre
  }

  getDescuento(descuento) { // se añade al prototype de la función constructora
    let totalDesc = (this.precio * descuento) / 100;
    return this.precio - totalDesc;
  }

  toString() { // se sobreescribe toString() de Object (comentar para ver prototype)
    return `${this.nombre} (${this.precio.toFixed(2)}€)`;
  }  
}

console.log(Product); // class Product {...}

const producto = new Product("silla", 23); // 'Producto creado: silla' --> producto.nombre
console.log(producto); // Object { nombre: "silla", precio: 20 }
console.log(producto.nombre, producto.precio); // silla 20
console.log(producto.toString()); // 'silla (20.00€)'
