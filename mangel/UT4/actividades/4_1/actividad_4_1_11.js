let personas = [
    ["Adrián",47, "Profesor"],
    ["Luisa",60, "Profesor"],
    ["Ana",20, "Estudiante"],
    ["Blas",36, "Estudiante"],
    ["Agustín",50, "Profesor"],
    ["Felipe",25, "Estudiante"],
    ["Pedro",19, "Estudiante"],
    ["Zoraida",36, "Estudiante"],
    ["Juan",36, "Administrativo"],
    ["Toñi",48, "Administrativo"],
    ["Juan",16, "Estudiante"],
    ["Miriam",15, "Estudiante"],
    ["Rosa",75, "Estudiante"],
    ["Pepe",31, "Estudiante"],
    ["Fermín",64, "Estudiante"],
    ["Jose",47, "Profesor"]
];
//Esta funcion es una funcion global que ordenara el array entero
function ordenar(personas) {
    //Hago un array para cada profesion y asi los tengo ordenados por profesion
    let profesores = [];
    let estudiantes = [];
    let administrativo = [];
    for (let i = 0; i < personas.length; i++) {
        if (personas[i][2].startsWith("P")) {
            profesores.push(personas[i])
        } else if (personas[i][2].startsWith("E")) {
            estudiantes.push(personas[i])
        } else {
            administrativo.push()
        }
    }
    //Aqui concateno todos los arrays ya ordenados con por la otra funcion
    let personasOrdenadas = [];
    personasOrdenadas = personasOrdenadas.concat(ordenarEdadAlfabetico(profesores));
    personasOrdenadas = personasOrdenadas.concat(ordenarEdadAlfabetico(estudiantes));
    personasOrdenadas = personasOrdenadas.concat(ordenarEdadAlfabetico(administrativo));
    
    //aqui muestro el array con la frase ordenada y en metodo de array 
    console.log(personasOrdenadas);
    for (let i = 0; i < personasOrdenadas.length; i++) {
        console.log(personasOrdenadas[i][0] + " de " + personasOrdenadas[i][1] + " años es " + personasOrdenadas[i][2])
    }
}
//Esta es una funcion que usare dentro de la funcion que hara toda la ordenacion
function ordenarEdadAlfabetico(profesion) {
    //aqui con el metodo sort ordenamos con la funcion creada y devolvemos el resultado
    return profesion.sort(function (persona1, persona2) {
        /*Aqui si las edades son distintas las ordenamos en descendente
        y si no los ordenamos alfabeticamente*/
        if (persona2[1] !== persona1[1]) {
            return persona2[1] - persona1[1];
        }else {
            return persona1[0].localeCompare(persona2[0]);
        }
    });
}

ordenar(personas);