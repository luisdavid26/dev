const API_URL = "http://localhost:3000/events";//la url de la api

export async function addEvent(event) {//funcion para anyadir una tarjeta
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event),
  });
  return await response.json();
}

export async function getEvents() {//funcion para obtener una tarjeta
  const response = await fetch(API_URL);
  return await response.json();
}

export async function deleteEvent(id) {//funcion para borrar una tarjeta
  const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return response.ok;
}

export async function updateEvent(id, updatedEvent) {//funcion para actualizar una tarjeta
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedEvent),
  });
  return await response.json();
}
