const SERVER = "http/localhost:5000";
//para las peticiones xhr , tenemos que crear la instacion del objeto XMLHttpRequest()
function getProductos() {
  //creamos la instancia del objeto
  const xhr = new XMLHttpRequest();
  //establecemos la comunicacion
  xhr.open("get", `${SERVER}/productos`, true);
  //enviamos la peticion
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      //el 4 significa que esta acabada
      if (xhr.status === 200) {
        const json = JSON.parse(xhr.responseText);
        console.log(json);
      } else {
        console.log("error en la peticion");
      }
    }
  };
}
function postProducto(){
    const xhr=XMLHttpRequest();
    xhr.open("POST",`${SERVER}/productos`,true);
    xhr.send(JSON.stringify(producto));
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4){
            if(xhr.status===200){
                const json=JSON.parse(xhr.responseText);
                console.log(json);
            }else{
                console.log("error en la peticion");
            }
        }
    }
}




