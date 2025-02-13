class Product{
    nombre;
    precio=20;
    constructor(nombre){
        this.nombre=nombre;
        console.log(`producto creado: ${this.nombre}`);
    }

getDescuento(descuento){
    let totaldesc=(this.precio*descuento)/100;
    return this.precio=totaldesc;
}



}