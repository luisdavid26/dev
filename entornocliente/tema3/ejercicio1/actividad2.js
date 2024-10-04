(() => {
  const conversions = [];

  // String to Number
  conversions.push(Number("123")); //convierte "123" a el numero 123
  conversions.push(Number("123abc")); //intenta convertir pero el resultado es NaN
  conversions.push(Number("")); //convierte un string vacio a 0
  conversions.push(Number(" ")); //convierte un espacio a 0

  // Boolean to Number
  conversions.push(Number(true)); //convierte true a 1
  conversions.push(Number(false)); //convierte false a 0

  // Null and Undefined to Number
  conversions.push(Number(null)); //convierte null a 0
  conversions.push(Number(undefined)); //convierte undefined a NaN

  // String to Boolean
  conversions.push(Boolean("")); //un string vacio es false
  conversions.push(Boolean(" ")); //un string con espacio es true
  conversions.push(Boolean("false")); //cualquier string no vacio es true

  // Number to String
  conversions.push(String(123)); //convierte el numero 123 a "123"
  conversions.push(String(0)); //convierte el numero 0 a "0"
  conversions.push(String(NaN)); //convierte NaN a "NaN"
  conversions.push(String(Infinity)); //convierte Infinity a "Infinity"

  // Boolean to String
  conversions.push(String(true)); //convierte true a "true"
  conversions.push(String(false)); //convierte false a "false"

  // Null and Undefined to String
  conversions.push(String(null)); //convierte null a "null"
  conversions.push(String(undefined)); //convierte undefined a "undefined"

  // Number to Boolean
  conversions.push(Boolean(0)); //el numero 0 es false
  conversions.push(Boolean(1)); //el numero 1 es true
  conversions.push(Boolean(NaN)); //NaN es false
  conversions.push(Boolean(Infinity)); //infinity es true

  // Implicit Coercion in Operations
  conversions.push("5" + 1); //convierte el 1 a string y da de resultado "51"
  conversions.push("5" - 1); //convierte "5" a numero y da de resultado 4
  conversions.push("5" * 2); //convierte "5" a numero y da de resultado 10
  conversions.push("5" / 2); //convierte "5" a numero y da de resultado 2.5
  conversions.push("5" % 2); //convierte "5" a numero y da de resultado 1
  // Coercion with ==
  conversions.push(5 == "5"); //verdadero diferentes tipos (numero vs string)
  conversions.push(false == 0); //verdadero diferentes tipos (booleano vs numero)
  conversions.push(null == undefined); //verdadero diferentes tipos
  conversions.push([] == false); //verdadero diferentes tipos
  conversions.push([] == ""); //verdadero diferentes tipos
  conversions.push([1, 2] == "1,2"); //verdadero diferentes tipos

  // Coercion with ===
  //en este apartado siempre nos van a dar falso , que se esta intentando decir si son iguales pero son de diferentes tipos 
  conversions.push(5 === "5");
  conversions.push(false === 0);
  conversions.push(null === undefined); 
  conversions.push([] === false); 
  conversions.push([] === ""); 
  conversions.push([1, 2] === "1,2"); 

  console.log(conversions); //mostramos las conversiones y los resultados
})();
