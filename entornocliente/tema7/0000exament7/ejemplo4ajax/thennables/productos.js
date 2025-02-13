const SERVER ="http://localhost:3000";
let productos=[];

function getProductos(){
    fetch(`${SERVER}/productos`)
    .then(resp=>{
        if(!resp.ok){
            console.log("error");
        }
        //si esta todo bien convertimos la respuesta a json
        resp.json();
    }).then(json=>{
        console.log(json);
        productos = json.data;
        replaceProductos();
    }).catch(error=>{
        console.error("fallo en la obtencion")
    })
}
function postProducto(producto){
    fetch(`${SERVER}/productos`,{
        method:"POST",
        body:JSON.stringify(producto),//pasamos el objeto a json en el body
        headers:{
            "Content-Type":"application/json"
        }
    }).then(resp=>{
        if(!resp.ok){
            console.log(`error ${resp.status}${resp.statusText}`);
        }
        if(resp.status!==204){//si la respuesta tiene contenido
            //convierte de json a objeto
            resp.json().then(json=>{
                productos.push(json.data);
                replaceProductos();
            });
        }
    }).catch(error=>{
        console.error("fallo insertando el producto");
    })

}
function deleteProducto(prod){
    fetch(`${SERVER}/productos${prod.id}`,{
        method:"DELETE"
    }).then(resp=>{
        if(!resp.ok){
            console.log(`error ${resp.status}${resp.statusText}`);
        }
        if(resp.status==200){//significa que se a borrado
                //lo que vamos a hacer es que vamos a borrar el producto por el indice
                let tr = document.getElementById(`p${prod.id}`);
                tr.parentElement.removeChild(tr);
                let index =productos.indexOf(prod);
                if(index>=0){
                    productos.splice(index,1);
                }
        }
    }).catch(error=>{
        console.error("ta mal");
    })


}




































