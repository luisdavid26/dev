class Product {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  getDescuento(descuento){
    let totaldesc = (this.precio *descuento)/100;
    return this.precio - totaldesc;
  }
  toString(){
    return `${this.nombre}(${this.precio.toFixed(2)})`;
  }
}
console.log(typeof Product);
console.log(Product);
const producto = new Product("silla",23);
console.log(producto);
console.log(producto.nombre,producto.precio);
console.log(producto.toString());
