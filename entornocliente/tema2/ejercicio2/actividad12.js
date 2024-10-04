let char = '*';//creamos el caracter
var linea=1;
for (let i = 0; i < 13; i++) {//hacemos el for para las lineas
        var text="";
    for (let num1 = 0; num1 <= i; num1++) {//hacemos el bucle del numero de char por lienas
        text+= char;
    }        
    console.log(text);
}

