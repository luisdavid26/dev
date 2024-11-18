 function addItems(notas, item) {//parte las notas si estan pasadas por comas o una si solo se a pasado una
  return item.includes(",")
    ? notas.concat(item.split(",").map((nota) => nota.trim()))
    : notas.concat(item.trim());
}

 function clearItems(notas) {// verificamos si las notas entran del 0 al 10 y si es un numero 
  return notas
    .map((nota) => parseFloat(nota))//las pasamos a float
    .filter((nota) => !isNaN(nota) && nota >= 0 && nota <= 10); //filtramos que no sean null o si estan dentro del rango
}

 function primerSuspenso(notas) {//si la nota es menor a 5 ,nos la devuelve
  return notas.find((nota) => nota < 5);
}
 function aprobados(notas) {//nos devuelve todas la nostas que este aprobadas
  return notas.filter((nota) => nota >= 5);
}

 function notaMedia(notas) {
  if (notas.length === 0) return 0; //si no hay notas , nos devuelve 0
  const total = notas.reduce((sum, nota) => sum + nota, 0);
  return (total / notas.length).toFixed(2); //redondea la nota media a dos decimales
}

 function cambiaNotas(notas, incremento) {
  return notas.map((nota) => {
    //realizamos el incremento que pasa el usuario
    const notanueva = Math.round(nota + nota * (incremento / 100));
    //si la nota con el incrento es mayor a 10 , la dejaremos en 10 
    return notanueva > 10 ? 10 : notanueva;
  });
}
