const SERVER = "http://localhost:5001";
import {recetas} from "./recetas.class";
//para hacer el session storage es asi 
sessionStorage.setItem(clave,valor);
sessionStorage.removeItem(clave.nombre);
//----------------------------
//peticion para enviar la receta
const resp= await fetch(`${SERVER}/recipes`,{
    method:"POST",
    body: JSON.stringify(receta),
    header:{"Content-Type":"application/json"},
})
resp.status;



//-------------------------------
//peticion para traer todas las recetas
const resp2=await fetch(`${SERVER}/recipes`);
const json = resp2.json;
console.log(json.data);
//-------------------------------------
//peticion en xml para borrar la carta y en la api tambien 
const xhr=new XMLHttpRequest();
xhr.open('DELETE',`${SERVER}/recipes/${receta.id}`,true);
xhr.setRequestHeader('Content-Type','application/json');
xhr.onload=function(){
    if(xhr.readyState===4 &&(xhr.status===200||xhr.status===204)){
        sessionStorage.removeItem(receta.name);

    }
    xhr.send();
}