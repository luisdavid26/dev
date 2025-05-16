const SERVER = "http://localhost:5001";
import { Recetas } from "./recetas.class.js";
const formulario = document.getElementById("recipeForm");
//importante esto es para hacer el post , es importante saberse el resp
async function postReceta(receta){
    try {
        //para hacer el post no dirigomos a la direcciones en la api y podemos ver el chivatazo
        //igualmente lo importante es no cagarla con lo de los headers 
        //importante , todo va dentro del fetch, el body tambien 
        const resp = await fetch(`${SERVER}/recipes`,{
            method: "POST",
            body: JSON.stringify(receta),
            headers:{
                "Content-Type":"application/json",
            },
        });
        console.log(resp.status);
        if(!resp.ok){
            throw new Error("no se a podido añadir la persona");
        }
        if(resp.status!==204){
            const json=await resp.json();
            console.log(json);
            formulario.reset();
            window.location.href="index.html";
        }
        console.log(receta);
    } catch (error) {
            console.error(`Error: ${error}`);
    }
}
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const ingredients = document.getElementById("ingredients");
  const prepTime = document.getElementById("prepTime");
  const difficulty = document.getElementById("difficulty");
  const category = document.getElementById("category");
  const description = document.getElementById("description");
  const receta = new Recetas(
    name.value,
    ingredients.value,
    prepTime.value,
    difficulty.value,
    category.value,
    description.value
  );
  sessionStorage.setItem(name.value,category.value);
  postReceta(receta);
});
