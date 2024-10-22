let bool1 = true;
let bool2 = false;

//al sumar los booleanos tal cual hace que JS tome como 1 a true y 0 a false en este caso nos da como resutado 1 , que seria true
let resultado1 = bool1 + bool2;
console.log("resultado de la suma de booleanos:", resultado1);

//al utilizar tostring() los convierte en cadena y los concatena 
let resultado2 = bool1.toString() + bool2.toString();
console.log("resultado de la suma de strings:", resultado2);
