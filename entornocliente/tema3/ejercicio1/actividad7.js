let mensaje=prompt("dime una frase con espacios que sobren");//pedimos una frase por un prompt
function acortaespacio(cadena) {//inicializamos una funcione para quitar los espacios que sobren
    let nuevacadena="";
    for (let recorrido = 0; recorrido < cadena.length; recorrido++) {//recorremos la frase que nos la han pasado por parametro
        if (!(cadena[recorrido]==" "&&cadena[recorrido-1]==" ")) {//el condicional se cumple si el caracter que en el que esta ahora mismo no es un y el anterior tampoco era un espacio, entonces el caracter actual se insertan en la nueva cadena
            nuevacadena+=cadena[recorrido];
        }
    }
    return nuevacadena;//devolvemos la cadena nueva
}
window.alert(acortaespacio(mensaje));//mostramos y llamamos a la funcion