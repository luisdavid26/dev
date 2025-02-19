class Eventos{
    #id;
    static #idglobal = 0;

    constructor({id,name,date,description,image,price}){
        this.id = id;
        this.name = name;
        this.date = date;
        this.description = description;
        this.image = image;
        this.price = price;
    }

    //Metodo para generar un id unico
    #generarId() {
        Eventos.#idglobal++;
        this.#id = Eventos.#idglobal;
    }
}

export{Eventos};