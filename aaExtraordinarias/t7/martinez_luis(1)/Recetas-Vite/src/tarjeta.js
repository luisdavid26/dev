function crearTarjeta(recipe) {
    // Crear el contenedor de la tarjeta
    const card = document.createElement('div');
    card.classList.add('col-md-4');
  
    // Crear la tarjeta
    const innerCard = document.createElement('div');
    innerCard.classList.add('card', 'h-100');
  
    // Crear el cuerpo de la tarjeta
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
  
    // Crear y agregar el título
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = recipe.name;
  
    // Crear y agregar el texto para el tiempo de preparación
    const prepTimeText = document.createElement('p');
    prepTimeText.classList.add('card-text');
    prepTimeText.innerHTML = `<strong>Tiempo:</strong> ${recipe.prepTime}`;
  
    // Crear y agregar el texto para la dificultad
    const difficultyText = document.createElement('p');
    difficultyText.classList.add('card-text');
    difficultyText.innerHTML = `<strong>Dificultad:</strong> ${recipe.difficulty}`;
  
    // Crear y agregar el texto para la categoría
    const categoryText = document.createElement('p');
    categoryText.classList.add('card-text');
    categoryText.innerHTML = `<strong>Categoría:</strong> ${recipe.category}`;
  
    // Crear y agregar la descripción
    const descriptionText = document.createElement('p');
    descriptionText.classList.add('card-text');
    descriptionText.textContent = recipe.description;
  
    // Crear el botón de eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger', 'delete-btn');
    deleteBtn.setAttribute('data-id', recipe.id);
    deleteBtn.textContent = 'Eliminar';
  
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