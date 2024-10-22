const personas = [
  { name: "María", age: 20 },
  { name: "Bernardo", age: 28 },
  { name: "Pancracio", age: 22 },
  { name: "Andrea", age: 19 },
  { name: "Sara", age: 29 },
  { name: "Jorge", age: 32 },
  { name: "Yurena", age: 38 },
  { name: "Ayoze", age: 18 },
];
function filtraredad(numerousu) {
  let primeraedad = personas.find((persona) => persona.age == numerousu);
  if (primeraedad) {
    console.log(
      "La primera persona con " + numerousu + " años es " + primeraedad.name
    );
  } else {
    console.log(
      "No se ha encontrado ninguna persona con " + numerousu + " años."
    );
  }
}
function calcularedadmedia() {
  const totaledad = personas.reduce(
    (acumulador, persona) => acumulador + persona.age,
    0
  );
  const edadmedia = totaledad / personas.length;
  console.log("la edad media es" + edadmedia.toFixed(2));
}

let numedadusu = parseInt(prompt("dime una edad para filtrar"));
filtraredad(numedadusu);
calcularedadmedia;
