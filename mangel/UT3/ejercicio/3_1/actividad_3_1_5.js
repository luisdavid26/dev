function descodificacion(codigo) {
    let resultado = "";//Se crea la variable con el resultado
    codigo = codigo.split("-");//Este es el codigo separado por los guiones
    //Este if comprueba el primer codigo y si no coincide añade un error
    if (codigo[0] == "CP") {
        resultado += "Cliente particula ";
    } else if (codigo[0] == "CE"){
        resultado += "Empresa ";
    } else{
        resultado += "El codigo del cliente esta mal. ";
    }
    //Este switch comprueba el segundo dato del codigo y si no coincide añade un error
    switch (codigo[1]) {
        case '10':
            resultado += "Local ";
            break;

        case '11':
            resultado += "Autonómico ";
            break;

        case '12':
            resultado += "Nacional ";
            break;

        case '20':
            resultado += "Internacional";
            break;
    
        default:
            resultado += "El codigo de la localicacion esta mal. ";
            break;
    }
    //Aqui se añaden los años y por ultimo se devuelve el string con todo junto
    resultado += "con " + codigo[2] + " años de antigüedad";
    return resultado;
}

let codigoPuro = prompt("Dime un codigo de producto");
let codigoDescifrado = descodificacion(codigoPuro);
alert(codigoDescifrado);