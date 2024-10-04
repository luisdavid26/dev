let numusuario =prompt("dime un numero");
function alcubo(numero) {
  numero = Number(numero);//convierto el numero a numero , para que no interfiera con el condicional de isNaN de ma
  if (isNaN(numero)) {//si el valor del numero no es un numero valido , devuelve una alerta y termina la funcion 
    window.alert("el valor que has pasado no es un numero valido");
    return;
  } else if (!Number.isInteger(numero)) {//si el numero no es un entero nos devuelve una alerta y termina la funcion
    window.alert("el numero no es un entero");
    return;
  } else {
    let finalnum = numero * numero * numero;//el finalnum toma el valor del resultado de multiplicar el numero tres veces , que es el numero de veces para que sea al cubo
    return finalnum;
  }
}
let resultado = alcubo(numusuario);
window.alert("el numero al cubo es " + resultado);//imprimimos el numero al cubo con una alerta
