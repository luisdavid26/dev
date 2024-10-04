let variable = window.prompt("intruduce el numero del mes", 0);//pedimos el numero del mes
let mesdelanyo="no hay mes";//incializamos la variable del mes

switch (variable) {//creamos el switch para comprobar el mes que se a introducido y cambia la variable
  case '1':
    mesdelanyo = "enero";
    break;
  case '2':
    mesdelanyo = "febrero";
    break;
  case '3':
    mesdelanyo = "marzo";
    break;
  case '4':
    mesdelanyo = "abril";
    break;
  case '5':
    mesdelanyo = "mayo";
    break;
  case '6':
    mesdelanyo = "junio";
    break;
  case '7':
    mesdelanyo = "julio";
    break;
  case '8':
    mesdelanyo = "agosto";
    break;
  case '9':
    mesdelanyo = "septiembre";
    break;
  case '10':
    mesdelanyo = "octubre";
    break;
  case '11':
    mesdelanyo = "noviembre";
    break;
  case '12':
    mesdelanyo = "diciembre";
    break;
  default:
    break;
}
window.alert("el mes del anyo correspondiente es : " + mesdelanyo);//concatenamos el mensaje con la varable mesdelanyo
