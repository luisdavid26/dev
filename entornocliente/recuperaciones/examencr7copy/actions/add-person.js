const SERVER = "http://localhost:3000";
import { Person } from "../models/perso.class";
const form = document.getElementById("formPerson");
async function postPerson(person) {
  try {
    const tokem = localStorage.getItem("token");
    const resp = await fetch(`${SERVER}/personajes`, {
      method: "POST",
      body: JSON.stringify(person),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!resp.ok) {
      throw new Error("no se a podido anyadir la persona");
    }
    if (resp.status !== 204) {
      const json = resp.json();
      console.log(json);
      form.reset();
      window.location.href = "index.html";
    }
  } catch (error) {
    console.error(`error ${error}`);
  }
}

form.addEventListener("submit", (e) => {
e.preventDefault();

const nombre=document.getElementById("nombre")
const casa = document.getElementById("casa");
const patronus = document.getElementById("patronus");
const fechaNacimiento = document.getElementById("fechaNacimiento");
const sangre = document.getElementById("sangre");
const varita = document.getElementById("varita");
const persona = new Person(
    nombre.ariaValueMax,
    casa.value,
    patronus.value,
    fechaNacimiento.value,
    sangre.value,
    varita.value
);
localStorage.setItem("nombre",nombre.value);
localStorage.setItem("casa",casa.value);
postPerson(persona);

});
