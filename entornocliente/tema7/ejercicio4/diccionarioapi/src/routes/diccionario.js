import express from "express";

let diccionarios = [];

const diccRouter = express.Router();

// anyadir palabra y rima
diccRouter.post("/", (req, res) => {
  const { palabra, rimas } = req.body;

  if (!palabra || !rimas) {
    return res.status(400).json({ message: "todos los campos son requeridos" });
  }

  const newdicc = {
    id: diccionarios.length + 1,
    palabra,
    rimas,
  };

  diccionarios.push(newdicc);
  console.log(diccionarios);

  res.status(201).json({
    message: "diccionario anyadido con exito",
    data: newdicc,
  });
});

// obtener todas las palabras
diccRouter.get("/", (req, res) => {
  res.json({
    message: "lista de diccionarios",
    data: diccionarios,
  });
});

// eliminar palabra de todos los diccionarios
diccRouter.delete("/palabra/:palabra", (req, res) => {
  const { palabra } = req.params;

  // filtrar los diccionarios que tienen la palabra
  const diccionariosActualizados = diccionarios.filter(dicc => dicc.palabra !== palabra);

  // si la longitud de los diccionarios no es la misma , entonces la palabra fue eliminada
  if (diccionariosActualizados.length !== diccionarios.length) {
    diccionarios = diccionariosActualizados;  // actualizamos el diccionario
    res.json({
      message: `la palabra '${palabra}' ha sido eliminada del diccionario`,
      data: diccionarios,
    });
  } else {
    res.status(404).json({
      message: `la palabra '${palabra}' no se encontro en el diccionario`,
    });
  }
});

// borrar diccionario por id
diccRouter.delete("/:id", (req, res) => {
  const diccId = parseInt(req.params.id);
  const initialLength = diccionarios.length;
  diccionarios = diccionarios.filter((dicc) => dicc.id !== diccId);

  if (diccionarios.length < initialLength) {
    res.json({
      message: `diccionario con id ${diccId} eliminado`,
      data: diccionarios,
    });
  } else {
    res.status(404).json({
      message: `diccionario con id ${diccId} no se a encontrado`,
    });
  }
});

// eliminar una rima especifica de una palabra
diccRouter.delete("/:id/:palabra/:rima", (req, res) => {
  const { id, palabra, rima } = req.params;

  const diccId = parseInt(id);
  const dicc = diccionarios.find((dicc) => dicc.id === diccId);

  if (dicc) {
    if (dicc.palabra === palabra) {
      const nuevasRimas = dicc.rimas.filter((r) => r !== rima);

      if (nuevasRimas.length < dicc.rimas.length) {
        dicc.rimas = nuevasRimas; 
        res.json({
          message: `rima '${rima}' eliminada de la palabra '${palabra}'`,
          data: dicc,
        });
      } else {
        res.status(404).json({
          message: `la rima '${rima}' no se encontro en la palabra '${palabra}'.`,
        });
      }
    } else {
      res.status(404).json({
        message: `la palabra '${palabra}' no se encontro en el diccionario`,
      });
    }
  }
});

// eliminar una rima de todos los diccionarios
diccRouter.delete("/rimas/:rima", (req, res) => {
  const { rima } = req.params;

  // recorremos el diccionario y vemos si la palabra contiene la rima y la eliminamos
  diccionarios.forEach((dicc) => {
    dicc.rimas = dicc.rimas.filter((r) => r !== rima);
  });

  res.json({
    message: `la rima '${rima}' ha sido eliminada de todas las palabras`,
    data: diccionarios,
  });
});


export default diccRouter;
export { diccionarios };