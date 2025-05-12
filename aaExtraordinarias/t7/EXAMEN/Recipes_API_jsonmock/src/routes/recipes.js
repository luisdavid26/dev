import express from 'express';


// Almacenamiento temporal de recetas (con 3 recetas de inicio)
let recipes = [
  {
    id: 1,
    name: "Spaghetti a la Boloñesa",
    ingredients: ["Espaguetis", "Carne molida", "Tomate", "Ajo", "Cebolla", "Aceite de oliva"],
    prepTime: "40 minutos",
    difficulty: "Media",
    category: "Plato Principal",
    description: "Deliciosa pasta con salsa boloñesa casera, perfecta para toda la familia."
  },
  {
    id: 2,
    name: "Tarta de Manzana",
    ingredients: ["Manzanas", "Azúcar", "Harina", "Mantequilla", "Huevo", "Canela"],
    prepTime: "60 minutos",
    difficulty: "Fácil",
    category: "Postre",
    description: "Una tarta de manzana casera, perfecta para disfrutar en cualquier ocasión."
  },
  {
    id: 3,
    name: "Ensalada César",
    ingredients: ["Lechuga", "Pollo a la parrilla", "Queso parmesano", "Croutons", "Aderezo César"],
    prepTime: "20 minutos",
    difficulty: "Fácil",
    category: "Entrante",
    description: "Una ensalada fresca y ligera, ideal para comenzar cualquier comida."
  }
];
const recipeRouter = express.Router();

// Añadir receta
recipeRouter.post('/', (req, res) => {
  const { name, ingredients, prepTime, difficulty, category, description } = req.body;
  
  const newRecipe = {
    id: recipes.length + 1,
    name,
    ingredients,
    prepTime,
    difficulty,
    category,
    description
  };

  recipes.push(newRecipe);

  res.status(201).json({
    message: 'Receta añadida con éxito',
    data: newRecipe
  });
});

// Obtener todas las recetas
recipeRouter.get('/', (req, res) => {
  res.json({
    message: 'Lista de recetas',
    data: recipes
  });
});

// Obtener receta por ID
recipeRouter.get('/:id', (req, res) => {
  const recipeId = parseInt(req.params.id);
  
  if (recipes.find(recipe => recipe.id === recipeId)) {
    res.json({
      message: 'Receta',
      data: recipes.filter(recipe => recipe.id == req.params.id)
    });
  } else {
    res.json({
      message: `Receta con id ${recipeId} no encontrada`
    });
  }
});

// Borrar receta por ID
recipeRouter.delete('/:id', (req, res) => {
  const recipeId = parseInt(req.params.id);
  const initialLength = recipes.length;
  recipes = recipes.filter(recipe => recipe.id !== recipeId);

  if (recipes.length < initialLength) {
    res.json({
      message: `Receta con id ${recipeId} eliminada`,
      data: recipes
    });
  } else {
    res.status(404).json({
      message: `Receta con id ${recipeId} no encontrada`
    });
  }
});

export default recipeRouter;
