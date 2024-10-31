(()=>{
  const conversions = [];
  
  // String to Number
  conversions.push(Number("123")); //Se convierte en 123 ya que es un numero valido
  conversions.push(Number("123abc")); //Devuelve NaN ya que no es un numero valido
  conversions.push(Number("")); //Este srting se tranforma en 0
  conversions.push(Number(" ")); //Este string se transforma en 0
  
  // Boolean to Number
  conversions.push(Number(true)); //Devuelve 1 ya que es la equivalencia de true
  conversions.push(Number(false)); //Devuelve 0 ya que es la equivalencia de false
  
  // Null and Undefined to Number
  conversions.push(Number(null)); //Devuelve 0 ya que transforma el null
  conversions.push(Number(undefined)); //Devuelve NaN ya que undefined no se puede transformar
  
  // String to Boolean
  conversions.push(Boolean("")); // Devuelve false aunque su equivalencia exacta seria "Falsy"
  conversions.push(Boolean(" ")); // Devuelve true aunque su equivalencia exacta seria "Truthy"
  conversions.push(Boolean("false")); //Devuelve true ya que cualquier string que no este vacio es su equivalencia
  
  // Number to String
  conversions.push(String(123)); // Devuelve un string "123"
  conversions.push(String(0)); // Devuelve un string "0"
  conversions.push(String(NaN)); // Devuelve un string "NaN"
  conversions.push(String(Infinity)); // Devuelve un string "Infinity"
  
  // Boolean to String
  conversions.push(String(true)); // Devuelve un string "true"
  conversions.push(String(false)); // Devuelve un string "false"
  
  // Null and Undefined to String
  conversions.push(String(null)); // Devuelve un string "null"
  conversions.push(String(undefined)); // Devuelve un string "undefined"
  
  // Number to Boolean
  conversions.push(Boolean(0)); // Devuelve false ya que es el equivalente de 0
  conversions.push(Boolean(1)); // Devuelve true ya que es el equivalente de cualquier numero que no sea 0
  conversions.push(Boolean(NaN)); // Devuelve false ya que es el equivalente de NaN
  conversions.push(Boolean(Infinity)); // Devuelve true ya que cualquien infinito es considerado asi
  
  // Implicit Coercion in Operations
  conversions.push("5" + 1); // Devuelve 51 ya que concatena el string
  conversions.push("5" - 1); // Devuelve 4 ya que el string se transforma a numero
  conversions.push("5" * 2); // Devuelve 10 ya que el string se transforma a numero
  conversions.push("5" / 2); // Devuelve 2.5 ya que el string se transforma a numero
  conversions.push("5" % 2); // Devuelve 1 ya que el string se transforma a numero
  
  // Coercion with ==
  conversions.push(5 == "5"); // Devuelve true ya que el string se transforma a numero
  conversions.push(false == 0); // Devuelve true ya que false se tranforma a 0 que es su equivalencia
  conversions.push(null == undefined); // Devuelve true 
  conversions.push([] == false); // Devuelve true ya que el array vacio es considerado false
  conversions.push([] == ""); // Devuelve true ya que el array vacio se transforma a un string vacio y los dos son false
  conversions.push([1,2] == "1,2"); // Devuelve true ya que el array se tranforma a string y tienen el mismo valor
  
  // Coercion with ===
  conversions.push(5 === "5"); // Devuelve false ya que estamos comparando incluyendo el tipo de dato y son distintos
  conversions.push(false === 0); // Devuelve false ya que estamos comparando incluyendo el tipo de dato y son distintos 
  conversions.push(null === undefined); // Devuelve false ya que estamos comparando incluyendo el tipo de dato y son distintos 
  conversions.push([] === false); // Devuelve false ya que estamos comparando incluyendo el tipo de dato y son distintos
  conversions.push([] === ""); // Devuelve false ya que estamos comparando incluyendo el tipo de dato y son distintos
  conversions.push([1,2] === "1,2"); // Devuelve false ya que estamos comparando incluyendo el tipo de dato y son distintos
  
  console.log(conversions);
  })();