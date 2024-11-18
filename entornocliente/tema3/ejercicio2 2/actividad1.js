const dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];
const diasEmpiezanM = dias.filter((dia) => dia.startsWith("M"));
console.log(diasEmpiezanM); //filtra los dias por la primera letra m
const primerDiaM = dias.find((dia) => dia.startsWith("M"));
console.log(primerDiaM); //filtra el primer dia que empieza por la letra m
const posicionPrimerDiaM = dias.findIndex((dia) => dia.startsWith("M"));
console.log(posicionPrimerDiaM); //nos da la posicion del primer dias que empieza por la m
const algunDiaEmpiezaS = dias.some((dia) => dia.startsWith("S"));
console.log(algunDiaEmpiezaS); // nos devuelve true o false si algun dia de la semana empieza por s
const todosAcabanS = dias.every((dia) => dia.endsWith("s"));
console.log(todosAcabanS); //nos da true ya que todos los dias de la semana terminan por s
const diasEnMayusculas = dias.map((dia) => dia.toUpperCase());
console.log(diasEnMayusculas); // nos recorre el array y nos muestra los dias en mayusculas
const esMartes = dias.includes("Martes");
console.log(esMartes); // nos da true ya que hay un dia de la semana que es martes
