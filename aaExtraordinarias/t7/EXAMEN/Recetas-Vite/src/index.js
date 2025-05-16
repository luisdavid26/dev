const SERVER = "http://localhost:5001";
//esto es para cuando ponga que se tiene que recibir las cosas de la api
//se hace un get de este tipo
async function getReceta() {
  try {
    //hacemos primero la peticion al server la cual es muy sencilla
    const resp = await fetch(`${SERVER}/recipes`);
    //este resp si tiene que ir cerrada, la de post tiene que tener el
    //header y el body
    const json = await resp.json();
    console.log(json);
    //ahora vamos a llamar a la funcion que hace que se muestre la carta que nos dieron
    showReceta(json.data);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
//hacemos la funcion para borrar con xhr, lo que haremos es inicilazarlo
async function deleteReceta(receta,container){
    //primer paso , crear el xhr 
    const xhr=new XMLHttpRequest();
//segundo paso , el open es para armar la peticion en el examen esta sera la estructura para borrar las cartas en ese caso
    xhr.open('DELETE',`${SERVER}/recipes/${receta.id}`,true);
    //el header es importante
    xhr.setRequestHeader('Content-Type','application/json');
    //hacemos una funcion que verifica que si que se a borrado mediante el status y lo borramos del sesion storage y del copntenerdior

    xhr.onload=function(){
        if(xhr.readyState===4&&(xhr.status===200||xhr.status===204)){
            sessionStorage.removeItem(receta.name);
            container.remove();
        }else{
            console.error("error al eliminar la tarjeta");
        }
    };
    xhr.send();
}
document.addEventListener("DOMContentLoaded", (e) => {
  //nos traemos todas las recetas al cargar la pagina
  getReceta();
});

const showReceta = (data) => {
  const container = document.getElementById("recipesContainer");
  //recorremos todos los objetos en json que nos hemos traido y los convertimos en la carta
  data.forEach((recipe) => {
    const card = crearTarjeta(recipe);
    container.appendChild(card);
  });
};

function crearTarjeta(recipe) {
  // Crear el contenedor de la tarjeta
  const card = document.createElement("div");
  card.classList.add("col-md-4");

  // Crear la tarjeta
  const innerCard = document.createElement("div");
  innerCard.classList.add("card", "h-100");

  // Crear el cuerpo de la tarjeta
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Crear y agregar el título
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = recipe.name;

  // Crear y agregar el texto para el tiempo de preparación
  const prepTimeText = document.createElement("p");
  prepTimeText.classList.add("card-text");
  prepTimeText.innerHTML = `<strong>Tiempo:</strong> ${recipe.prepTime}`;

  // Crear y agregar el texto para la dificultad
  const difficultyText = document.createElement("p");
  difficultyText.classList.add("card-text");
  difficultyText.innerHTML = `<strong>Dificultad:</strong> ${recipe.difficulty}`;

  // Crear y agregar el texto para la categoría
  const categoryText = document.createElement("p");
  categoryText.classList.add("card-text");
  categoryText.innerHTML = `<strong>Categoría:</strong> ${recipe.category}`;

  // Crear y agregar la descripción
  const descriptionText = document.createElement("p");
  descriptionText.classList.add("card-text");
  descriptionText.textContent = recipe.description;

  // Crear el botón de eliminar
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-danger", "delete-btn");
  deleteBtn.setAttribute("data-id", recipe.id);
  deleteBtn.textContent = "Eliminar";
  deleteBtn.addEventListener("click",()=>{
    deleteReceta(recipe,card);
  });
  
  // Agregar los elementos al cuerpo de la tarjeta
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(prepTimeText);
  cardBody.appendChild(difficultyText);
  cardBody.appendChild(categoryText);
  cardBody.appendChild(descriptionText);
  cardBody.appendChild(deleteBtn);

  // Agregar el cuerpo de la tarjeta al contenedor de la tarjeta
  innerCard.appendChild(cardBody);

  // Agregar la tarjeta completa al contenedor con la clase 'col-md-4'
  card.appendChild(innerCard);
  return card;
}
