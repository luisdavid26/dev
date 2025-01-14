import { Eventos } from "./eventos.class.js";

export const eventData = [];

export function addEvent(event) {
  eventData.push(event);
}

export function getEvents() {
  return eventData;
}
