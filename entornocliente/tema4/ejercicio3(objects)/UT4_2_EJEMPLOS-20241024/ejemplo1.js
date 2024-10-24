// Creación de un objeto Map con un elemento
const map = new Map([[1, "uno"]]); // clave: 1, valor: "uno"
console.log(map);

// Creación mapa para almacenar personas (Objetos) y array de hobbies asociado a cada persona
const person1 = {name: "Peter", age: 21}; // Objeto
const person2 = {name: "Mary", age: 34}; // Objeto
const person3 = {name: "Louise", age: 17}; // Objeto
// Creación de un objeto Map vacío
const hobbies = new Map();  

/**
 * Métodos:
 * 
 * .set(key,value): Establece o modifica la clave key con el valor value. Muta 
 * .size: Propiedad que devuelve el número de elementos que tiene el mapa.
 * .has(key): Comprueba si key ya existe en el mapa y devuelve si existe o no (true|false)
 * .get(key): Obtiene el valor de la clave key del mapa.
 * .delete(key): Elimina el elemento con la clave key del mapa. Devuelve si lo eliminó correctamente (true|false)
 * .clear(): Vacía el mapa completamente.
 */
hobbies.set(person1, ["Tennis", "Computers", "Movies"]);
hobbies.set(person2, ["Music", "Walking"]);
hobbies.set(person3, ["Boxing", "Eating", "Sleeping"]);
console.log(hobbies);

console.log(hobbies.size);

console.log(hobbies.has(person1)); // true (referencia al objeto original almacenado)
console.log(hobbies.has({name: "Peter", age: 21})); // false (mismas propiedades pero objeto diferente!)

console.log(hobbies.get(person3));

// // Descomentar - Comentar
// hobbies.delete(person2); // Elimina person2 del Map
// console.log(hobbies.size); // Imprime 2
// console.log(hobbies.get(person3)[2]); // Imprime "Sleeping"

// hobbies.forEach((hobArray, person) => { 
//   console.log(person.name + ": " + hobArray.join(", "));
// });

// hobbies.clear();
// console.log(hobbies);

// ---------------------------------------------------------
// Creación de un objeto Set vacío
const actores = new Set();

/**
 * Métodos:
 * .add(element): Añade un elemento al conjunto (si no está repetido) y devuelve el set.
 * .size: Propiedad que devuelve el número de elementos que tiene el conjunto.
 * .has(element): Comprueba si element ya existe en el conjunto. Devuelve si existe o no (true|false)
 * .delete(element): 	Elimina el element del conjunto. Devuelve si lo eliminó correctamente (true|false)
 * .clear(): Vacía el conjunto completamente.
 */
actores.add("John");
actores.add("Mary");
actores.add("Peter");
actores.add("Ana");
actores.add("Rambo");
actores.add("Tom");

console.log(actores.size);

console.log(actores.has("Pitt"));

actores.delete("Peter");
console.log(actores.size); 

actores.forEach(n => console.log(n));
actores.clear();
console.log(actores);

// Eliminar elementos repetidos de un array
let names = ["Jennifer", "Alex", "Tony", "Johny", "Alex", "Tony", "Alex"];
const nameSet = new Set(names);
console.log(nameSet); // Set {"Jennifer", "Alex", "Tony", "Johny"}
names = [...nameSet];
console.log(names);
