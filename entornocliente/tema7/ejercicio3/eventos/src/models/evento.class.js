/**
 * utilizamos esta clase para crear los objetos de tipo evento , separanadolo de la logica principal
 */
export class Eventos {
  constructor({ id, name, date, description, image, price }) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.description = description;
    this.image = image;
    this.price = price;
  }
}
