let variableTrue = true;
let variableFalse = false;

//El resultado sera 1 ya que false es igual a 0 y true igual a uno
alert("La suma de true y false es: " + (variableFalse + variableTrue));

//El resultado es falsetrue ya que transforma los booleanos a string y los concatena
alert("La suma de false y true con toString es: " + (variableFalse.toString() + variableTrue.toString()));