/**
 * Desde ES2015 podemos declarar propiedades y métodos estáticos.
 * Estos métodos y propiedades se llaman directamente utilizando el nombre de la clase 
 * y no tienen acceso al objeto this (ya que no hay objeto instanciado).
 * Los métodos y propiedades estáticas son muy útiles en clases de tipo "helpers" o utilitarias.
 */
class Empleado {
  static rol = "NiNi"; // propiedad pública estática
  static #sueldoMinimo = 150000; // propiedad privada estática

  constructor(nombre, sueldo, rol) {
      this.nombre = nombre;
      this.sueldo = sueldo;
      this.rol = rol;
  }
  // todavía no se ha ejecutado el constructor y se puede referenciar la propiedad sueldoMinimo internamente
  static creaBecario(nombre, rol) {
      return new Empleado(nombre, Empleado.#sueldoMinimo, rol); 
  }
}

console.log(Empleado.rol); // se puede referenciar la propiedad rol desde fuera

let empleada = Empleado.creaBecario("Marina", Empleado.rol = 'Profesor/a'); // referencia externa al método público
console.log(empleada); // Object { nombre: "Marina", sueldo: 150000, rol: "Profesor/a" }


/**
 * -- Inicialización Estática --
 * Una reciente característica denominada Class static initialization blocks (ES2022) 
 * nos permite ejecutar un bloque de código de forma muy similar a una especie de constructor estático.
 * La diferencia radica en que, mientras el constructor se ejecuta cuando se crea el objeto 
 * (se crea una instancia de clase), el bloque estático static {} se ejecuta nada más declarar la clase 
 * (antes de la instancia), por lo que puede ser realmente útil para realizar tareas de inicialización 
 * donde no necesitas la instancia del objeto, o previas al constructor.
 */
class Animal {
  static {
    console.log("Bloque inicializado");
  }

  constructor() {
    console.log("Constructor ejecutado");
  }
}
// <-- Aquí nos aparece "Bloque inicializado"

const pato = new Animal();  // <-- Aquí aparece "Constructor ejecutado"