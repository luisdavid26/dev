const diccionario=new Map();
function agregarRima(palabra,rima){

    if (diccionario.has(palabra)) {
        diccionario.get(palabra).push(rima);
      } else {
        diccionario.set(palabra, [rima]);
      }

}
function obtenerRimas(palabra) {
    if (diccionario.has(palabra)) {
       return diccionario.get(rima) ;
      } else {
        print(`la palabra ${palabra} no existe en el direcionario`);
    }
}
function eliminarRima(palabra,rima) {
    if (diccionario.has(palabra)&&diccionario.has(rima)) {
        diccionario.delete(palabra,{
            diccionario.has(palabra).forEach(rima => {
            diccionario.delete(rima)
            })
        });
      } else {
        print(`la palabra ${palabra} no existe en el direcionario`);
    }

}