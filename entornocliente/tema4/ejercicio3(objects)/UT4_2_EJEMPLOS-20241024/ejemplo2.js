/**
 * Persona es un objeto con varias propiedades: nombre, edad, genero, intereses y bio. 
 * La propiedad bio es una función (método) que puede acceder a otras propiedades 
 * del objeto usando this.
 * NOTA: No podemos ponerlo con sintaxis arrow function porque 
 *       no se podría acceder a las propiedades del objeto con this.
 */
const persona = {
    nombre: ['Bob', 'Smith'],
    edad: 32,
    genero: 'masculino',
    intereses: ['música', 'esquí'],
    bio: function () {
        alert(this.nombre[0] + ' ' + this.nombre[1] + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
    }
};

persona.bio();

/**
 * Podríamos crear una variable toString dentro de nuestro objeto, 
 * que contenga una función que muestre el texto ideal para representar 
 * nuestro objeto de información.
 */
const personaToString = {
    nombre: ['Bob', 'Smith'],
    edad: 32,
    genero: 'masculino',
    intereses: ['música', 'esquí'],
    toString: function () {
        return `${this.nombre[0]} ${this.nombre[1]} tiene ${this.edad} años. Le gusta ${this.intereses[0]} y ${this.intereses[1]}`;
    }
};

console.log(personaToString.toString());
console.log(personaToString);
console.log("Persona toString:" + personaToString);

/**
 * Desestructuración
 */
function muestraNombre({nombre}) {
    console.log('El nombre es ' + nombre[0] + ' y el apellido ' + nombre[1]);
}
muestraNombre(personaToString);

const { edad, genero} = personaToString;
console.log(edad);
console.log(genero);

/**
 * Reestructuración
 */

const empleado = {
    ...personaToString,
    puesto: 'operario',
    salario: '10000',
    intereses: 'trabajar' //Si se repiten las propiedades se sobreescriben
}

console.log(empleado);

/**
 * Problema Copia de Objetos - valores no primitivos
 * En lugar de hacer el ...Objeto u Object.assign(), utilizamos:
 * la función structuredClone() a la cuál le pasamos el objeto a copiar. 
 * Esta función hará una copia, devolviendo un nuevo objeto, y no la referencia.
 */

// con ... o Object.assign()

const estudiante = {
    ...persona,
    etapa: 'ciclo formativo'
}

const persona2 = Object.assign({}, persona);

console.log(persona);
console.log(estudiante);

estudiante.nombre[0] = "Bob Esponja";
console.log(persona);
console.log(estudiante);

// Descomentar - Comentar 
// produce error porque no se pueden copiar las funciones
// comentar funcion bio() en estudiante para ver el funcionamiento
// structuredClone() -- NO FUNCIONA SI EL OBJETO CONTIENE FUNCIONES
// ver tabla: https://lenguajejs.com/javascript/objetos/clonar-o-copiar-elementos/

const estudiante2 = {
    ...structuredClone(persona2),
    etapa: 'ciclo formativo'
}
console.log(persona2);
console.log(estudiante2);

estudiante2.nombre[0] = "Bob Esponja";
console.log(persona2);
console.log(estudiante2);

