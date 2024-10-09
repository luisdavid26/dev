window.alert(
  "Buenas tardes que tipo de menu desea comer hoy, de carne , pescado o verdura?"
);//mostramos un mensaje que nos salude y nos diga que tipos de menu hay.
let tipomenu = window.prompt(
  "Eliga su tipo de Menu (carne , pescado o verdura) acontinuacion:"
);//elige su tipo de menu
switch (tipomenu) {//inicializamos el switch y dependiendo el tipo de menu que no ha dicho , le mostramos una sugerencia de bebida
  case "carne":
    window.alert("te recomiendo beber un vino tinto");
    break;
  case "pescado":
    window.alert("te recomiendo beber un vino blanco");

    break;
  case "verdura":
    window.alert("te recomiendo beber agua");
    break;

  default://si no se elige el tipo de menu , nos pide que escribanos un menu valido
    window.alert("Porfavor escriba carne , pescado o verdura");

    break;
}
