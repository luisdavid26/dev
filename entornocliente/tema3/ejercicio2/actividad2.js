//numero entero
let entero = 1357; 

//numero decimal
let decimal = 135.7; 

//numero en notacion cientifica exponencial
let cientifico = 135e7; //equivale a 135 * 10^7 , que nos da de resultado: 1350000000

//numero octal
let octal = 0o1357; //JS me a dado un error a la hora de interpretar el numero tal cual estaba en el ejercicio(01357) , entonces para interpretarlo me pide que ponga el caracter 'o'
//que nos da de resultado: 751

//numero hexadecimal
let hexadecimal = 0x1357; //el prefijo 0x indica que es hexadecimal
//que nos da de resultad: 4951

//mostramos el valor de los diferentes numeros con window.alert
window.alert("numero entero: " + entero);
window.alert("numero decimal: " + decimal);
window.alert("numero científico: " + cientifico);
window.alert("numero octal: " + octal);
window.alert("numero hexadecimal: " + hexadecimal);
