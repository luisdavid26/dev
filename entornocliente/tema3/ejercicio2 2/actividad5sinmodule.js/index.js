
//almacenos las notas , depende si mete una a una , si mete varias tiene que ser por coma
let notas = [];
while (true) {
  let input = prompt("introduce una nota o varias pero separadas por comas");
  if (input === null) {
    break;
  }
  notas = addItems(notas, input);
}

//mostramos todas la nostas
console.log("notas introducidas:", notas);

//mostramos la notas que son validas
const notasLimpias = clearItems(notas);
console.log("notas validas:", notasLimpias);

//mostramos el primer suspenso
const primer_suspenso = primerSuspenso(notasLimpias);
console.log("el primer suspenso es:", primer_suspenso);

//mostramos todas las notas aprobadas
const notasAprobadas = aprobados(notasLimpias);
console.log("hay " + notasAprobadas.length + " aprobados: " + notasAprobadas);
//motramos la nota media
const notamedia = notaMedia(notasLimpias);
console.log("la nota media es: " + notamedia);
//mostramos las notas finales ya incrementadas 
const incremento = parseFloat(prompt("dime el porcentaje que quieres incrementar las notas: "))
const notasfinales = cambiaNotas(notasLimpias,incremento);
console.log("las notas finales son: "+notasfinales);
