const semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
//Filtramos los dias de la semana por los que empiezan por M
let todosDiasM = semana.filter((dia) => dia.startsWith("M"));
console.log("Los dias que empiezan por M son " + todosDiasM);

//Aqui mostramos solo el primer elemento que empieza por M y luego mostramos su indice
let primerDiaM = semana.find((dia) => dia.startsWith("M"));
let indexPrimerDiaM = semana.findIndex(dia => dia.startsWith("M"));
console.log("Los dias que empiezan por M son " + primerDiaM + " y su index es " + indexPrimerDiaM);

//Aqui comprobamos si hay algun dia que empiece por S
let diaSemanaS = semana.some((dia) => dia.startsWith("S"));
console.log("Hay algun dia que empiece por 'S'? " + diaSemanaS);

//Aqui comprobamos que todos los dias acaben en s
let diaAcabaS = semana.every((dia) => dia.endsWith("s"));
console.log("Todos los dias terminan en 's'? " + diaAcabaS);

//Aqui devolvemos una copia del array pero en mayusculas
let diasMayusculas = semana.map((dia) => dia.toUpperCase());
console.log("Estos son los dias de la semana en mayusculas " + diasMayusculas);

//Aqui comprobamos que exista un dia Martes
let diaMartes = semana.some((dia) => dia === "Martes");
console.log("Hay algun dia que sea 'Martes'? " + diaMartes);