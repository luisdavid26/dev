import Producto from './producto.class.js';

class Carrito {
    #productos;

    constructor() {
        this.#productos = [];
    }

    agregarProducto(producto) {
        this.#productos.push(producto); // Se guarda la referencia al producto (menos seguro)
    }

    actualizarCantidadProducto(id, cantidad) {
        this.#productos.forEach(producto => {
            if (producto.getId() === id) {
                producto.setCantidad(cantidad); // Se modifica directamente el producto
            }
        });
    }

    eliminarProducto(id) {
        this.#productos = this.#productos.filter(producto => producto.getId() !== id);
    }
    obtenerProductos(){
        return [...this.#productos]; //Devuelve una copia del array
    }

    calcularTotal() {
        return this.#productos.reduce((total, producto) => {
            const precioConImpuesto = producto.getTieneImpuesto()
                ? producto.getPrecio() * 1.1
                : producto.getPrecio();
            return total + precioConImpuesto * producto.getCantidad();
        }, 0);
    }

    calcularImpuestoTotal() {
        return this.#productos.reduce((total, prod) => {
            if (prod.getTieneImpuesto()) {
                return total + prod.getPrecio() * prod.getCantidad() * 0.1;
            }
            return total;
        }, 0).toFixed(2);
    }

    obtenerCantidadTotal() {
        return this.#productos.reduce((total, prod) => total + prod.getCantidad(), 0);
    }

    toString() {
        const detallesprod = this.#productos
            .map(prod => `producto: ${prod.getNombre()}, precio: ${prod.getPrecio().toFixed(2)}, cantidad: ${prod.getCantidad()}`)
            .join("\n");

        const subtotal = this.#productos.reduce((total, prod) => total + prod.getPrecio() * prod.getCantidad(), 0).toFixed(2);
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

export default Carrito;