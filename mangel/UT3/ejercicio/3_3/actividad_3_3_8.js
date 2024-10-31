let operacion;
//El resultado es true son el mismo numero
operacion = (47 == 47);
alert ("La operación 47 == 47 es " + operacion);
//El resultado es true son el mismo numero y tipo de dato
operacion = (47 === 47);
alert ("La operación 47 === 47 es " + operacion);
//El resultado es false no son el mismo string
operacion = ("Marina" == "marina");
alert ("La operación Marina == marina es " + operacion);
//El resultado es false porque el valor de letras mayusculas en Unicode es menor que las minusculas.
operacion = ("Marina" > "marina");
alert ("La operación Marina > marina es " + operacion);
//El resultado es true
operacion = ("Marina" < "marina");
alert ("La operación Marina < marina es " + operacion);
//El resultado es true son el mismo numero
operacion = ("123" == 123);
alert ("La operación '123' == 123 es " + operacion);
//El resultado es false son el mismo numero pero distinto tipo de dato
operacion = ("123" === 123);
alert ("La operación '123' === 123 es " + operacion);
//El resultado es true son el mismo numero y tipo de dato por que lo transformamos
operacion = (parseInt("123") === 123);
alert ("La operación parseInt('123') === 123 es " + operacion);