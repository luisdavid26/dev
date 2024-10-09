let frase=prompt("dime una frase");
let primerapalabra=prompt("dime la primera palabra");
let segundapalabra=prompt("dime la segunda palabra");
function completarfrase(frase,primerapalabra,segundapalabra) {
        //busca la posicion de la palabra en la  frase original
        let palabraprovisional = frase.indexOf(primerapalabra);
    
        //si la palabra no esta en la frase , devolvera la frase orignial
        if (palabraprovisional === -1) {
            return frase;
        }
        //se busca cual es la ultima posicion de la palabra para despues insertar la segunda palabra
        let palabrainsertada = palabraprovisional + primerapalabra.length;
        
        //inserta la palabra al final de la primera palabra y pone un espacio al principio de la cadena
        let nuevaFrase = frase.slice(0, palabrainsertada) + " " + segundapalabra + frase.slice(palabrainsertada);
        
        return nuevaFrase;
}
window.alert(completarfrase(frase,primerapalabra,segundapalabra));