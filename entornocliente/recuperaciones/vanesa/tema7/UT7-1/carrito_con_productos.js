// clase que va a representar un producto 
class Producto {
    //variables
    #id;
    static #idglobal = 0;
    #nombre;
    #precio;
    #cantidad;
    #tieneImpuesto;

    //Constructor
    constructor(nombre, precio, cantidad, tieneImpuesto) {
        if (this.#cantidad <= 0){
            throw new Error("La cantidad no puede ser 0");
        }
        if(this.precio<0){
            throw new Error("El precio no puede ser menor a 0");
        }

        this.#nombre = nombre;
        this.#precio = precio;
        this.#cantidad = cantidad;
        this.#tieneImpuesto = tieneImpuesto;
        this.#generarId();
    }

    //getters
    //nombre
    get nombre() {
        return this.#nombre;
    }

    //precio
    get precio() {
        return this.#precio;
    }

    //tieneImpuesto
    get tieneImpuesto() {
        return this.#tieneImpuesto;
    }

    //getters y setters
    //cantidad
    get cantidad() {
        return this.#cantidad;
    }

    set cantidad(cantidad) {
        if (!this.#cantidad <= 0) {
            this.#cantidad = cantidad;
        }
    }

    //metodos
    //Metodo para generar un id unico
    #generarId() {
        Producto.#idglobal++;
        this.#id = Producto.#idglobal;
    }

    //metodo para obtener el id
    getId() {
        return this.#id;
    }

}

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