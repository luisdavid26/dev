let num1 =parseFloat( window.prompt("introduce la primera nota :"));//hay que parsear los window prompt por que pasa los numero como string en vez de numbers
let num2 = parseFloat(window.prompt("introduce la segundo nota"));
let num3 = parseFloat(window.prompt("introduce la tercera nota"))
let suma= (num1+num2+num3)/3;//sumamos las notas y las dividimos por 3 ya que son el numero de notas que hay
let variable= (suma>=5) ? "estas aprobado":"estas suspendido";//hacemos una operacion ternaria para escoger el mensaje
console.log(variable);
