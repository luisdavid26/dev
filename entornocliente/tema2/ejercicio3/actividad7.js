var pi = 3.1416;// creamos el valor pi
function calculararea(radiocirculo) {
    let resultarea=  pi* (Math.pow(radiocirculo),2)//multiplicamos pi por el radio elevado a 2
    return resultarea;//devolvemos el resultados
}
function calcularperimetro(radiocirculo) {
 let resulperimetro= 2*pi*radiocirculo; //para tener el perimetro , multiplicamos por 2 pi por el radio del circuclo
 return resulperimetro;  //devolvemos el resultado
}
let radiocirculo = window.prompt("introduce el radio del circulo");//pedimos el radio del circulo
let area =calculararea(radiocirculo);//llamamos la funcion para calcular el area
let perimetro = calcularperimetro(radiocirculo);//llamamos la funcion para calcular el perimetro
window.alert("el area del circulo es: "+ area);//mostramos el resultado
window.alert("perimetro del circulo es: "+perimetro);//mostramos el resultado