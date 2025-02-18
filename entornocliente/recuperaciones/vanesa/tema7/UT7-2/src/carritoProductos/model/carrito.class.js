//clase que va a simular un carro de la compra en el cual vamos a introducir productos
class Carrito {
    //variables
    #productos = [];

    //metodos
    /**
     * Metdo para agregar al array un producto
     * 
     * @param producto 
     */
    agregarProducto(producto) {
        this.#productos.push(producto);
    }

    /**
     * Metodo para actualiar la cantidad de productos mediante un id
     * 
     * @param {String} id 
     * @param {Number} cantidad 
     */
    actualizarCantidadProducto(id, cantidad) {
        this.#productos.forEach(p => {
            if (id === p.getId()) {
                p.cantidad = cantidad;
            }
        });
    }

    /**
     * Metodo para eliminar un producto segun su id
     * @param {String} id 
     */
    eliminarProducto(id) {
        this.#productos= this.#productos.filter(p => p.getId() !== id);
    }

    // metodo para cacular el total del carrico con los impuestos
    calcularTotal() {
        let total = 0;

        this.#productos.forEach(p => {
            total += p.precio * p.cantidad;
        });

        return total + this.calcularImpuestoTotal();
    }

    //metodo para calcular el total de tos los impuestos de cada prodcuto
    calcularImpuestoTotal() {
        let total = 0;
        let totalImpuestos = 0;

        this.#productos.forEach(p => {
            if (p.tieneImpuesto) {
                totalImpuestos = p.precio * p.cantidad * 0.1;
                total += totalImpuestos;
            }
        });

        return total;
    }

    //metodo para obtenr un producto y la cantidad total de este
    obtenerCantidadTotal() {
        let total = "";
        this.#productos.forEach(p => {
            total += `\nProducto: ${p.nombre}. Cantidad: ${p.cantidad} `;
        });
        return total;
    }

    /*metodo en el cual vamos a mostrar una cadena de texto formateada con el
    nombre, precio, cantidad, el subtotal sin impuesto, el subtotal de los impuestos 
    y el total final */
    toString() {
        let string = "";
        let subtotal = 0;

        this.#productos.forEach(p => {
            string += `\nNombre: ${p.nombre}\nPrecio por unidad: ${p.precio}\nCantidad: ${p.cantidad}\n`;
            subtotal += p.precio;
        });

        string += `\nSubtotal sin impuesto: ${this.calcularTotal() - this.calcularImpuestoTotal()} \nSubtotal de los impuestos: ${this.calcularImpuestoTotal()}\nTotal final: ${this.calcularTotal()}\n`;

        return string;
    }
}

export{Carrito};