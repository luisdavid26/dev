function agregarima(palabra,rima) {
    if(!palabra||!rima){
        console.log("la palabra y la rima son obligatorias");
        return;
    }
    if(diccionario.has(palabra)){
        const rimas=diccionario.get(palabra);
        if(rimas.includes(rima)){
            console.log("se muestra la rima ** ya existe en el diccionario")
        }else{
            rima.push(rima);
            console.log("la rima a sido agregada")
        }


    }else{
        diccionario.set(palabra,[rima]);//esto es por si no existia de antes la palabra
        console.log("la palabra a sido agrefada con su rima")
    }


}
function obtenerrimas(palabra){
    if(!palabra){
        console.log("la palabra es obligatoria")
        return;
    }
    if(diccionario.has(palabra)){
        return diccionario.get(palabra);
    }else{
        console.log("la palabra no existe en el diccionario");
        return;
    }

}
function eliminarrima(palabra,rima){
    if(!palabra||!rima){
        console.log("ambos campos son obligatorios");
        return;
    }
    if(diccionario.has(palabra)){
        const rimas =diccionario.get(palabra).filter((varrima)=>varrima!=rima);
        if (rimas.length>0) {
            diccionario.set(palabra,rimas);//volvemos a anyadir todas las rimas sin la rima especificada
            return true;
        }else{
            console.log("mal");
            return false;
        }
    }
}

function eliminiarpalabra(palabra){
    if(!palabra){
        console.log("caca")
        return;
    }
    if(diccionario.has(palabra)){
        diccionario.delete(palabra);
        return true;
    }else{
        console.log("la palabra no existe")
        return false;
    }

}


function buscarpalabras(rima){
    if(!rima){
        console.log("la rima es obliatoria");
        return [];

    }
    const palabrasencontradas=[];
    diccionario.forEach((rimas,palabra )=> {
        if(rimas.includes(rima)){
            palabrasencontradas.push(palabra);
        }
    });
    if(palabrasencontradas.length>0){
        console.log(`las palabras encontradas son  ${palabrasencontradas.join(", ")}`)
    return palabrasencontradas;
    }else{
        console.log(caca)
        return[];
    }



}



