function actividad2(numero) {
    if (numero == '0') { //comprobamos si el numero es cero
        alert("Ese numero es 0");
    } if (numero <= '0') { //comprobamos si el numero es menor a cero
        alert("Ese numero es negativo");
    } else { //la unica opcion que queda es que sea mayor a cero
        alert("Ese numero es postivo");
    }
}

function actividad3(edad) {
    if (edad < '18') { //comprobamos si la edad es menos a 18 años
        alert("Eres menor de edad");
    } if (edad > '17') { //comprobamos si la edad es mayor a 17
        alert("Eres mayor de edad");
    } if(edad > '64') { //comprobamos si la edad es mayor a 64
        alert("Eres una persona mayor");
    }
}

function actividad4(numero1, numero2) {
    //este if compara si numero1 es mayor que el numero2 si es asi muestra el numero1 y si no muestra el otro
    if (numero1 > numero2) {
        console.log(numero1);
    } else {
        console.log(numero2);
    }
}

function actividad5() {
    //Le pedimos al usuario por prompt las notas y como nos detectara como string las transformamos en inta
    let notas = parseInt(prompt("Dame tu primera nota"));
    notas += parseInt(prompt("Dame tu segunda nota"));
    notas += parseInt(prompt("Dame tu tercera nota"));
    //Ya que las variables son int hemos podido sumarlas y ahora las dividimos
    let media = notas / 3;
    //En este if comrpbaremos si la media es mayor o menso que cinco 
    if (media >= 5) {
        alert("Estas aprobado con un " + media);
    } else {
        alert("Estas suspenso con un " + media);
    }
}

function actividad7(mesNumero) {
    let mes;
    switch (mesNumero) { //cada case corresponde a un mes distinto
        case '1':
            mes = "Enero";
            break;
    
        case '2':
            mes = "Febrero";
            break;

        case '3':
            mes = "Marzo";
            break;

        case '4':
            mes = "Abril";
            break;

        case '5':
            mes = "Mayo";
            break;

        case '6':
            mes = "Junio";
            break;

        case '7':
            mes = "Julio";
            break;

        case '8':
            mes = "Agosto";
            break;

        case '9':
            mes = "Septiembre";
            break;

        case '10':
            mes = "Octubre";
            break;

        case '11':
            mes = "Noviembre";
            break;

        case '12':
            mes = "Diciembre";
            break;

        default://Si introduce un numero fuera del rango saltara el error
            console.error("Ese numero no corresponde a ningun mes");
            break;
    }
    if (mes != null) {
        alert("El mes correspondiente al número " + mesNumero + " es: " + mes );
    }
}

function actividad8(comida) {
    let bebida;
    switch (comida) { //cada case corresponde a una bebida distinta
        case "Carne":
            bebida = "Vino tinto";
            break;
        
        case "Pescado":
            bebida = "Vino blanco";
            break;

        case "Verdura":
            bebida = "Agua";
            break;

        default://Si introduce una comida fuera del menu saltara el error
            console.error("Escriba carne, pescado o verdura.");
            break;
    }
    if (bebida != null) {
        alert("La mejor bebida para " + comida + " es: " + bebida);
    }
}

function actividad9() {
    //Tenemos un for que va a contar los numeros uno a uno hasta el 30
    for (contador = 0; contador < 31; contador++) {
        //el if va a comprobar si es par y si el multiplo de 3
        if ((contador % 2) == 0 && (contador % 3) != 0) {
            console.log(contador)
        }
    }
}

function actividad10() {
    //tenemos un for que va a calcular la potencia hasta que llegue a 300
    let potencia = 8;
    for (potencia; potencia < 300 ; potencia *= 2) {
        console.log(potencia);
    }
}

function actividad11(numero) {
    //Declaramos el factorial como uno ya que siempre sera el primero
    let factorial = 1;
    //En el bucle estaremos multiplicando el factorial hasta llegar al numero dado
    for (let i = numero; i >= 1; i--) {
        factorial = factorial * i;
    }
    console.log("El numero fatorial de " + numero + " es: " + factorial);
}

function actividad12() {
    //Este primer for esta para ir imprimiendo la variable y reiniciandola 
    for (let i = 0; i <= 10; i++) {
        let patron = '';
        /*Este segundo bucle esta para ir añadiendo un simbolo por cada vez que se haya impreso la variable 
        patron y asi añadir uno gradualmente*/
        for (let j = 0; j <= i; j++) {
            patron += '*';
        }
        console.log(patron);
    }
}

function actividad13(simbolo) {
    let contador = 0;//esta variable numeriaca es un contador que nos cortara el while cunado necesitemos
    let patron = '';//este string sera el que hiremos mostrando en consola

    while (contador < 10) {//este bucle añade al patron un simbolo por repeticion y muestra la variable patron por consola
        patron += simbolo;
        console.log(patron);
        contador ++;
    }
}

function actividad14(simbolo) {
    let contador = 0;//esta variable numeriaca es un contador que nos cortara el while cunado necesitemos
    let patron = '';//este string sera el que hiremos mostrando en consola
    let lineas = prompt("De cuantas lineas quieres la figura?")

    do{//este bucle añade al patron un simbolo por repeticion y muestra la variable patron por consola
        patron += simbolo;
        console.log(patron);
        contador ++;
    }while (contador < lineas)
}

function actividad15(numeroAdivinar) {
    //Con el math random generamos un numero del 1-10
    const numeroSecreto = ~~(Math.random() * 11);
    let ganar = false;
    /*este bucle se estara ejecutando hasta que se adivine el numero o no se introduzca ninguno
    Cada if esta para comprobar si es mayor menor, si esta dentro del rango o si ha cancelado el juego*/
    while (!ganar) {
        if (numeroAdivinar == null) {
            alert("Has cancelado el juego gracias por jugar");
            ganar = true;
        }else if (numeroAdivinar > numeroSecreto) {
            numeroAdivinar = prompt("Ese numero es demasiado grande. Prueba otra vez");
            ganar = false;
        } else if(numeroAdivinar < numeroSecreto) {
            numeroAdivinar = prompt("Ese numero es demasiado pequeño. Prueba otra vez");
            ganar = false;
        } else if (numeroAdivinar == numeroSecreto){
            alert("Muy bien el numero secreto era " + numeroSecreto);
            ganar = true;
        } else if (numeroAdivinar < 0 && numeroAdivinar > 10) {
            numeroAdivinar = prompt("Ese numero no es valido, tiene que ser 0-10");
        }
    }
}