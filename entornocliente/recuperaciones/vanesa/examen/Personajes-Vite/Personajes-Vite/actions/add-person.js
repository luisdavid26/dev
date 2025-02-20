const SERVER = "http://localhost:3000";

import { Person } from "../models/person.class";

const form = document.getElementById("formPerson");

async function postPerson(person) {
  try {
    const token = localStorage.getItem("token");
    const resp = await fetch(`${SERVER}/personajes`, {
      method: "POST",
      body: JSON.stringify(person),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!resp.ok) throw new Error("No se ha podido añadir la persona");
    if (resp.status !== 204) {
      const json = resp.json();
      console.log(json);
      form.reset();
      window.location.href="index.html";
    }
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const casa = document.getElementById("casa").value;
  const patronus = document.getElementById("patronus").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const sangre = document.getElementById("sangre").value;
  const varita = document.getElementById("varita").value;

  // const person = new Person(nombre, casa, patronus,
  //     fechaNacimiento, sangre, varita
  // );

  const persona = new Person(
    nombre,
    casa,
    patronus,
    fechaNacimiento,
    sangre,
    varita
  );
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("casa", casa);

  postPerson(persona);
});
