let num1=window.prompt("elige el numero de veces que se multiplica");
let num2=window.prompt("elige el numero a multiplicar");
function multiplicacion(num1,num2){//creamos la funcion con dos parametros
    for (let i = 0; i < num1; i++) {//creamos un for que vaya contando hasta el valor de la primera variable
     console.log(num2);
     num2*=2;//multiplicamos la variable por 2
    }
}
multiplicacion(num1,num2);//llamamos la funcion
