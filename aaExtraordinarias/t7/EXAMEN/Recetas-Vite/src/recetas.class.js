 class Recetas {
  constructor(
    name,
    ingredients,
    prepTime,
    difficulty,
    category,
    description,    

  ) {
    this.name=name;
    this.ingredients=ingredients;
    this.prepTime=prepTime;
    this.difficulty=difficulty;
    this.category=category;
    this.description=description;    

  }
}
export {Recetas};

//----------------------------------------
//esto para enviar las recetas con fetch
const resp=await fetch(`${SERVER}/recipes`,{
  method:"POST",
  body:JSON.stringify(receta),
  headers:{"Content-Type":"application/json"},
})
//para ver el status hacemos esto
resp.status;
//------------------------------------
//ahora vamos a traer las recetas
//  ES EL MAS SIMPLE DE TODOS , IMPORTANTE
const resp2 = await fetch(`${SERVER}/recipes`);
//esta respuesta la podermos convertir en json 
const json1 = await resp2.json();
//y si queremmos por ejemplo mostrarlo , lo hacemosasi
//TODO showreceta(json1.data);
//-----------------------------------------------
//ahora vamos a borrar con xml request 
// para esto hay que crear primero el xhr
const xhr= new XMLHttpRequest();
//al crear el xhr ,creamos el cuerpo de la peticion
xhr.open('DELETE',`${SERVER}/recipes/${receta.id}`,true);
//por ultimo ponemos le header
xhr.setRequestHeader('Content-Type','application/json');
//al ser una funcion que no sirve para borrar en este caso una carta lo que haremos es hacerl funcion
xhr.onload=function(){
  if(xhr.readyState===4&&(xhr.status===200||xhr.status===204)){
    //aqui nos pido que borremos LA SESION STORAGE
    sessionStorage.removeItem(receta.name);
    //AQUI PONDREMOS EL CONTENEDOR QUE ES TODA LA CARTQ
    container.remove();
  }
  //importante hacer el send al final 
  xhr.send();

}

