const encontrarEdad = (personas, edad) => {
    personas.forEach(personas => {
        if (personas.age == edad) {
            return personas.name;
        }
    });
}
const personas = [
    {name: "María", age: 20},
    {name: "Bernardo", age: 28},
    {name: "Pancracio", age: 22},
    {name: "Andrea", age: 19},
    {name: "Sara", age: 29},
    {name: "Jorge", age: 32},
    {name: "Yurena", age: 38},
    {name: "Ayoze", age: 18}
    ];

let edad = prompt("Dame un numero y te dire la persona con esa edad");
console.log("esta es la persona con la edad introducida " + encontrarEdad(personas, edad));