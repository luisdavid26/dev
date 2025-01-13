import Carrito from './model/carrito.class.js';
import Producto from './model/producto.class.js';

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

const productosCarrito = carrito.obtenerProductos();
productosCarrito[0].setCantidad(50);
console.log("\n Carrito despues de modificar el array devuelto por obtenerProductos:\n" + carrito.toString());