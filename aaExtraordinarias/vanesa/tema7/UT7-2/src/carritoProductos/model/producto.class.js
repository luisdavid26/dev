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

export{Producto};