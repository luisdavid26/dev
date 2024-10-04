let numfact = window.prompt("elige un numero");
if (numfact > 0) {//si el numero es mayor a 0 entrara en el bucle
  for (let i = numfact - 1; i > 0; i--) {//el bucle no parara hasta que llegue a 0
   numfact*= i;//multiplicamos los numero que van restandose por cada bucle y sumandose
  }
  window.alert("el numero factorial es : "+numfact);//mostramos el numero factorial
}else{
    window.Error("el numero es negativo");//mensaje de error en caso de que sea negativo
}
