const SERVER ="http://localhost:5000";
let productos =[];
//funcion get normal
async function getProductos(){
    try{
        //esperamos la promesa fetch
        const resp = await fetch(`${SERVER}/productos`);
        if(!resp.ok){
            console.log(`error ${resp.status}${resp.statusText}`);
        }
        const json = await resp.json();
        console.log(json);
        productos=json.data;
        replaceProductos();

    }catch(error){
        console.error("Fallo obteniendo los productos",error);
    }
}

async function postProducto(producto){
    try {
        const resp=await fetch(`${SERVER}/productos`,{
            method:"POST",
            body:JSON.stringify(producto),
            headers:{
                "Content-Type":"application/json"
            }
        });
        if(!resp.ok){
            console.log(`error ${resp.status}${resp.statusText}`);
        }
        if(resp.status!==204){
            const json=await resp.json();
            if(json){
                console.log(json);
                productos.push(json.data);
                replaceProductos();
                document.getElementById("preview").src="";
                format.reset();
            }
        }
    } catch (error) {
        console.log("fallo al insertar el producto",error);
    }
}
async function deleteProducto(prod){
    try {
        const resp= await fetch(`${SERVER}/productos/${prod.id}`,{
            method:"DELETE"
        })
        if(!resp.ok){
            console.log(`error ${resp.status}${resp.statusText}`);
        }
        if(resp.status==200){
            let tr=document.getElementById(`p${prod.id}`);
            tr.parentElement.removeChild(tr);
            let index=productos.indexOf(prod);
            if(index>=0){
                productos.splice(index,1);
            }
        }
    } catch (error) {
        console.log("fallo al borrar el producto",error);
    }
}
function replaceProductos(){
    let container =document.getElementById("productos");
    while(container.firstchild){
        container.removeChild(container.firstchild);
    }
    productos.forEach((producto)=>{
        appendProducto(producto,container);
    })
}




























