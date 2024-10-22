let personas=[
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


  function comparar(persona1,persona2) {
    let cargo={
        "profesor":1,
        "administrativo":2,
        "estudiandte":3
    };
    //ordenamos or cargo
    if(cargo[persona1[2]!==cargo[persona2[2]]]){
        return cargo[persona1[2]-cargo[persona2[2]]];
    }
    //si los cargos son iguales , se ordenan por edad
    if(persona1[1]!== persona2[1]){
        return persona2[1]-persona1[1];
    }
    // si la edad es ifual , lo ordenamos por nombre
    if (persona1[0]<persona2[0]) {
        return -1;
    }
    if (persona1[0]>persona2[0]) {
        return 1;
    }
    return 0;
  }
  //ordenamos el array y lo mostramos
  personas.sort(comparar);
  console.log(personas);
  
  for (let i = 0; i < personas.length; i++) {//mostramos el array como mensaje por consola ya ordenado
    let persona = personas[i];
    console.log(persona[0]+" de "+persona[1]+" anyos es "+persona[2]);
  }

