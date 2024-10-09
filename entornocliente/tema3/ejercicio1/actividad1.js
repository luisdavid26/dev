console.log('4'/2);//para que JS haga esta division primero se convierte el '4' a un numero y despues se realiza la division
console.log('23'-null);//cuando se habla de null en matematicas este se convierte en 0 , por eso nos da 23 como resultado
console.log('23'-undefined);//el undefined es una expresion que no se puede convertir a numero entonces el resultado sera NaN
console.log('23'*true);//el true se traduce como 1 en matematicas  (y false como 0) entonces nos dara 23 ya que se multiplicara por 1
console.log('23'*'hello');//la expresion hello no se puede convertir a numero , entonces el restultado sera NaN
console.log(23+'hello');// el 23 al ser un numero , se concatenaria a la cadena hello 
console.log(23+'23');// al ser un numero y una cadena , se concatenaria el 23 y seria una cadena en total 2323