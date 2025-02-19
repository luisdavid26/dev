class Producto {
  #id;
  #nombre;
  #precio;
  #cantidad;
  #tieneimpuesto;

  constructor(nombre, precio, cantidad, tieneimpuesto) {
      if (precio <= 0) {
          throw new Error("El precio debe ser mayor a 0");
      }
      if (cantidad <= 0) {
          throw new Error("La cantidad debe ser mayor a 0");
      }

      this.#id = crypto.randomUUID();
      this.#nombre = nombre;
      this.#precio = precio;
      this.#cantidad = cantidad;
      this.#tieneimpuesto = tieneimpuesto;
  }

  getId() {
      return this.#id;
  }

  getNombre() {
      return this.#nombre;
  }

  getPrecio() {
      return this.#precio;
  }

  getCantidad() {
      return this.#cantidad;
  }

  getTieneImpuesto() {
      return this.#tieneimpuesto;
  }

  setCantidad(nuevaCantidad) {
      if (nuevaCantidad > 0) {
          this.#cantidad = nuevaCantidad;
      } else {
          throw new Error("La cantidad debe ser mayor a 0");
      }
  }
}

export default Producto;