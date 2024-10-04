
let frase = prompt("Dame el código de producto");
console.log("para elegir el tipo de empresa , elige entre estos dos tipos : CP: cliente particular, CE: empresa ");
console.log("para elegir el ambito elige entre estos tipos :10 Local, 11 Autonómico, 12 Nacional, 20 Internacional");
console.log("dime los anyos de antiguedad que tengas");
console.log("-------------------------------------------------------------------------------------------------------");
function descodificacion(mensaje) {
    let codigodearray = mensaje.split('-');//separamos el codigo por el guion
    if (codigodearray.length !== 3) {//si alguna parte del codigo tiene mas de 3 caracteres , nos devuelve un error
        console.log("formato incorrecto");
        return;
    }

    let tipodecliente = "";
    let ambito = "";
    let antiguedad = codigodearray[2] + " anyos de antiguedad";//concatenamos el numero de anyos de antiguedad con la frase " anyos de antiguedad"

    // Tipo de cliente
    switch (codigodearray[0]) {//comprobamos el tipo de cliente con el switch
        case "CP":
            tipodecliente = "cliente particular";// si es CP el tipo de cliente sera particular
            break;
        case "CE":
            tipodecliente = "empresa";//si es CE el tipo de cliente sera empresa
            break;
        default:
            console.log("error desconocido en el tipo de caracteres");
            return;
    }

    // Ámbito
    switch (codigodearray[1]) {//comprobamos a que nivel es el ambito que nos dice el codigo 
        case "10":
            ambito = "local";
            break;
        case "11":
            ambito = "autonomico";
            break;
        case "12":
            ambito = "nacional";
            break;
        case "20":
            ambito = "internacional";
            break;
        default:
            console.log("error desconocido en el ambito");
            return;
    }

    // Imprimir resultado
    console.log(`${tipodecliente} , ${ambito} con ${antiguedad}`);//imprimimos
}

descodificacion(frase);
