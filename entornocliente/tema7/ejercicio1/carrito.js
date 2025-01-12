class Carrito  {
  constructor() {//inicializamos los productos
    this.productos = [];
  }
//metodo para agregar productos
  agregarProducto(producto) {//anyadimos un producto al array de productos
    this.productos.push(producto);
  }
//metodo para actualizar la cantidad de productos
  actualizarCantidadProducto(id, cantidad) {
    this.productos.forEach((producto) => {//recorremos el array de productos y seteamos la cantidad
      if (producto.getId() == id) {
        producto.setCantidad(cantidad);
      }
    });
  }
//metodo para eliminar productos
  eliminarProducto(id) {
    this.productos.forEach((producto, i) => {//recorremos el array de productos y eliminamos el producto
      if (producto.getId() == id) {
        this.productos.splice(i, 1);
      }
    });
  }
  
//metodo para calcular el total
  calcularTotal() {
    let total = 0;
    this.productos.forEach((producto) => {//recorremos el array de productos y calculamos el total
      const precioConImpuesto = producto.getTieneImpuesto()//si tiene impuesto se le suma un 10%, que se hace multiplicando por 1.1
        ? producto.getPrecio() * 1.1
        : producto.getPrecio();
      total += precioConImpuesto * producto.getCantidad();
    });
    return total;
  }

  calcularImpuestoTotal() {
    return this.productos
      .reduce((total, prod) => {//calculamos el impuesto total
        if (prod.getTieneImpuesto()) {
          return total + prod.getPrecio() * prod.getCantidad() * 0.1;//caculamos de cuanto es el impuesto
        }
        return total;
      }, 0)
      .toFixed(2);
  }

  obtenerCantidadTotal() {//obtenemos la cantidad total
    return this.productos.reduce(
      (total, prod) => total + prod.getCantidad(),
      0
    );
  }

  toString() {
    const detallesprod = this.productos
      .map(
        (prod) =>
          `producto: ${prod.getNombre()}, precio: ${prod.getPrecio().toFixed(2)}, cantidad: ${prod.getCantidad()}`
      )
      .join("\n");
  
    const subtotal = this.productos.reduce(
      (total, prod) => total + prod.getPrecio() * prod.getCantidad(),
      0
    ).toFixed(2);
  
    const impuestos = this.calcularImpuestoTotal();
    const total = this.calcularTotal().toFixed(2);
  
    return `
  ${detallesprod}
  subtotal(sin impuestos): $${subtotal}
  impuestos totales: $${impuestos}
  total(con impuestos): $${total}
  `.trim();
  }
  
}

const carrito = new Carrito();
const producto1 = new Producto("Manzana", 1.5, 10, true);
const producto2 = new Producto("Pan", 2, 5, false);

carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);

console.log(carrito.toString());
console.log("Total con impuestos:", carrito.calcularTotal());
console.log("Total impuestos:", carrito.calcularImpuestoTotal());
console.log("Cantidad total:", carrito.obtenerCantidadTotal());

carrito.actualizarCantidadProducto(producto1.getId(), 20);
console.log("\n Carrito actualizado:\n" + carrito.toString());

carrito.eliminarProducto(producto2.getId());
console.log("\n Carrito tras eliminar producto:\n" + carrito.toString());
