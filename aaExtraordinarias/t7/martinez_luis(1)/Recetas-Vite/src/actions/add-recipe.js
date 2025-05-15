import { Receta } from "../models/receta.class";
const SERVER = "http://localhost:3000";

async function postReceta(receta) {
    const resp = await fetch(`${SERVER}/recipes`,
        {
            method: "POST",
            headers:{'Content-Type ':' application/json'},
            body: JSON.stringify(receta)
        }
    );
    if(!resp.ok||resp!==201){
        console.log(resp.status);
        console.log(resp.statusText);
    }
    //guardamos el nombre de la tarjeta y la categoria
    localStorage.setItem(receta.nombre,receta.category);


}


document.addEventListener("DOMContentLoaded", (e) => {
    const formu = document.getElementById("recipeForm");
    formu.addEventListener("submit", (e) => {
        const name = document.getElementById("name");
        const ingredientes = document.getElementById("ingredients");
        const preptime = document.getElementById("prepTime");
        const difficulty = document.getElementById("difficulty");
        const category = document.getElementById("category");
        const description = document.getElementById("description");

        const receta = new Receta(name.value, ingredientes.value, preptime.value, difficulty.value, category.value, description.value);
        postReceta(receta);
       window.location.href="./index.html";
    });





});

