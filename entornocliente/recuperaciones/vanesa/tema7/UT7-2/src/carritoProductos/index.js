import {Producto} from "./model/producto.class.js";
import {Carrito} from "./model/carrito.class.js";

// Ejemplo de uso: 
const producto1 = new Producto('Manzana', 1.5, 10, true);
const producto2 = new Producto('Pan', 2, 5, false);
const carrito = new Carrito();

carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);

console.log(carrito.toString());
console.log('Total con impuestos:', carrito.calcularTotal());
console.log('Total impuestos:', carrito.calcularImpuestoTotal());
console.log('Cantidad total de ítems:', carrito.obtenerCantidadTotal());

carrito.actualizarCantidadProducto(producto1.getId(), 20);
console.log(carrito.toString());

carrito.eliminarProducto(producto2.getId());
console.log(carrito.toString()); 