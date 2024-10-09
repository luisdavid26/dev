let char =window.prompt("introduce el caracter que quieres imprimir");
var linea=1;
while (linea<=13) {//hacemos el bucle del salto de linea
    var text="";
    for (let num1 = 0; num1 <= linea; num1++) {//hacemos el bucle del numero de char por lienas
        text+= char;
    }        
    console.log(text);

    linea++;
}
