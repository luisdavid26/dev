//operaciones
var operacion1 = (47 == 47); //verifica si 47 es igual a 47
var operacion2 = (47 === 47); //verifica si 47 es igual a 47
var operacion3 = (47 === 47.0); //verifica si 47 es igual a 47.0
var operacion4 = ("marina" == "marina"); //"marina" es igual a "marina"
var operacion5 = ("Marina" > "marina"); //"Marina" es mayor que "marina"
var operacion6 = ("Marina" < "marina"); //"Marina" es menor que "marina"
var operacion7 = ("123" == 123); //convierte "123" a numero y luego compara con 123
var operacion8 = ("123" === 123); //verifica si "123" es igual a 123
var operacion9 = (parseInt("123") === 123); // convierte "123" a numero con parseint y se compara con 123

// mostrar resultados
window.alert("la operacion 47 == 47 es " + operacion1); //true
window.alert("la operacion 47 === 47 es " + operacion2); //true
window.alert("la operacion 47 === 47.0 es " + operacion3); //true
window.alert('la operacion "marina" == "marina" es ' + operacion4); //true
window.alert('la operacion "marina" > "marina" es ' + operacion5); //false
window.alert('la operacion "marina" < "marina" es ' + operacion6); //false
window.alert('la operacion "123" == 123 es ' + operacion7); //true
window.alert('la operacion "123" === 123 es ' + operacion8); //false
window.alert('la operacion parseint("123") === 123 es ' + operacion9); //true
