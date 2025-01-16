export class DiccionarioRimas {
  constructor() {
    this.apiUrl = "http://localhost:3002/palabras";  // URL de tu API de json-server
  }

  // Obtener todas las rimas de una palabra
  obtenerRimas(palabra) {
    if (!palabra) return { error: "La palabra es obligatoria" };

    return fetch(`${this.apiUrl}?palabra=${palabra}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          return data[0].rimas;  // Devuelve las rimas de la primera palabra encontrada
        } else {
          return { error: `La palabra ${palabra} no existe en el diccionario` };
        }
      })
      .catch(error => ({ error: "Error al obtener las rimas: " + error.message }));
  }

  // Agregar una nueva rima
  agregarRima(palabra, rima) {
    if (!palabra || !rima) return { error: "La palabra y la rima son obligatorias" };

    return fetch(this.apiUrl)
      .then(response => response.json())
      .then(data => {
        // Buscar la palabra en el servidor
        const palabraExistente = data.find(item => item.palabra === palabra);

        if (palabraExistente) {
          // Si la palabra ya tiene rimas, agregar la nueva rima si no existe
          if (!palabraExistente.rimas.includes(rima)) {
            palabraExistente.rimas.push(rima);

            return fetch(`${this.apiUrl}/${palabraExistente.id}`, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ rimas: palabraExistente.rimas }),
            })
              .then(response => response.json())
              .then(() => ({ anyadido: `Rima ${rima} añadida a ${palabra}` }))
              .catch(error => ({ error: "Error al añadir la rima: " + error.message }));
          } else {
            return { error: `La rima ${rima} ya existe para ${palabra}` };
          }
        } else {
          // Si la palabra no existe, crear una nueva entrada con la rima
          return fetch(this.apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ palabra: palabra, rimas: [rima] }),
          })
            .then(response => response.json())
            .then(() => ({ anyadido: `Rima ${rima} añadida a ${palabra}` }))
            .catch(error => ({ error: "Error al crear la palabra: " + error.message }));
        }
      })
      .catch(error => ({ error: "Error al obtener las palabras: " + error.message }));
  }

  // Eliminar una rima de una palabra
  eliminarRima(palabra, rima) {
    if (!palabra || !rima) return { error: "ambos campos son obligatorios" };

    return fetch(`${this.apiUrl}?palabra=${palabra}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const palabraExistente = data[0];
          const rimasActualizadas = palabraExistente.rimas.filter(r => r !== rima);

          if (rimasActualizadas.length === palabraExistente.rimas.length) {
            return { error: `La palabra ${palabra} no tiene la rima ${rima}` };
          }

          return fetch(`${this.apiUrl}/${palabraExistente.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ rimas: rimasActualizadas }),
          })
            .then(response => response.json())
            .then(() => ({ anyadido: `Rima ${rima} eliminada de ${palabra}` }))
            .catch(error => ({ error: "error al eliminar la rima: " + error.message }));
        } else {
          return { error: `la palabra ${palabra} no existe` };
        }
      })
      .catch(error => ({ error: "error al obtener la palabra: " + error.message }));
  }

  // Eliminar una palabra completa del diccionario
  eliminarPalabra(palabra) {
    if (!palabra) return { error: "La palabra es obligatoria" };

    return fetch(`${this.apiUrl}?palabra=${palabra}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          return fetch(`${this.apiUrl}/${data[0].id}`, {
            method: "DELETE",
          })
            .then(() => ({ anyadido: `Palabra ${palabra} eliminada del diccionario` }))
            .catch(error => ({ error: "Error al eliminar la palabra: " + error.message }));
        } else {
          return { error: `La palabra ${palabra} no existe` };
        }
      })
      .catch(error => ({ error: "Error al obtener la palabra: " + error.message }));
  }

  // Buscar palabras que contienen una rima específica
  buscarPorRima(rima) {
    if (!rima) return { error: "El campo rima es obligatorio" };

    return fetch(`${this.apiUrl}?rimas_like=${rima}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          return data.map(item => item.palabra);
        } else {
          return { error: "No se encontraron palabras con esta rima" };
        }
      })
      .catch(error => ({ error: "Error al buscar las palabras: " + error.message }));
  }
}
