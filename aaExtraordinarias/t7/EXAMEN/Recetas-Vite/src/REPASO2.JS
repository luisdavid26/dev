const SERVER ="http://localhost:5001";
import {recetas} from "./recetas.class"; 

class recetas{
    constructor(name,descripcion){
        this.name=name,
        this.descripcion=descripcion
    }
}
export {recetas};
sessionStorage.removeItem(name);
sessionStorage.setItem(name,clave);
//esto es para enviar
const resp1 =await fetch(`${SERVER}/recipes`,{
    method:"POST",
    body:JSON.stringify(receta),
    headers:{"Content-Type":"application/json"},
})
resp1=await resp1.json();
console.log(resp1.data);
//ahora vamos a traer las recetas


const resp2 = await fetch(`${SERVER}/recipes`);
const json=resp2.json();
// ya con eso lo podemos aañdir a una carta +ç

// XHRç
const xhr = new XMLHttpRequest();
xhr.open('DELETE',`${SERVER}/recipes/${receta.id}`,true);
xhr.setRequestHeader("Content-Type","application/json");
xhr.onload=function(){
    if(xhr.readyState===4&&(xhr.status==200||xhr.status==204)){
        sessionStorage.removeItem(name);
        contenerdor.remove();

    }
}
xhr.send();


