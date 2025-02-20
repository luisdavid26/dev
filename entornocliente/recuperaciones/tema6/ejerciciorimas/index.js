document.addEventListener('DOMContentLoaded',(e)=>{
    const formularioaddrima = document.getElementById("addrimaform");
    const formulariogetrima = document.getElementById("getrimaform");
    const formulariormvrima = document.getElementById("rmvrimaform");
    const formulariormvplabra = document.getElementById("rmvpalabraform");
    const formulariobuscarrima = document.getElementById("buscarrimaform");
    const campoaddpalabra = document.getElementById("addpalabra");
    const campoaddrima = document.getElementById("addrima");
    const campogetrima = document.getElementById("getrimas");
    const campopalabra = document.getElementById("palabra");
    const campormvrima = document.getElementById("rmvrima");
    const listagetrima = document.getElementById("listarimas");
    const campormvpalabra = document.getElementById("rmvpalabra");
    const campobuscarrima = document.getElementById("buscarrima");
    
    const selectpalabras = document.getElementById("selectpalabras");
    const listaverselectpalabras = document.getElementById("listarimasselect");
  
    const nombreReg = /^[A-Za-z]{1,}$/;

    formularioaddrima.addEventListener("submit",(e)=>{
        e.preventDefault();
        let palabravalida=true;
        if(!campoaddpalabra.value||!nombreReg.test(campoaddpalabra.value)){
            campoaddpalabra.classList.add("is-invalid");
            palabravalida=false;
        }else{
            campoaddpalabra.classList.add("is-valid");
        }
        //para limpiar rimas podemos utilizar un while
        while(listagetrima.firstChild){
            listagetrima.removeChild(listagetrima.firstChild);
        }
        // si queremos mostrar en una lista de li podemos hacerlo de esta manera
        const rimasvar=obtenerrimas(campogetrima.value);

        if(rimasvar.length>0){
            rimasvar.forEach((rima) => {
                const li=document.createElement("li");
                li.textContent=rima;
                listagetrima.appendChild(li);
            });
        }

    });
    if(true){

        const card=document.createElement("div");
        card.classList.add("card");
        
        const img=document.createElement("img");
        img.classList.add("card-image-top");

        const cardbody=document.createElement("div");
        cardbody.classList.add("card-body");

        const cardtitle=document.createElement("h5");
        cardtitle.classList.add("card-title");
        cardtitle.textContent=campoaddpalabra.value;

        const cardtext=document.createElement("p");
        cardtext.classList.add("card-text");
        cardtext.textContent="hola caracola"+campoaddpalabra.value;

        cardbody.append(cardtitle,cardtext);
        card.append(img,cardbody);
        campocontendor.appendChild(card);
// si lo queremos hacer con html hacemos un innerhtml de todo el codigo completo

      //otra forma de hacerlo en el examen con innerhtml
      const cardhtml = `
            <div class="card">
          <img class="card-img-top" src="${imagenprvw.src}">
          <div class="card-body">
            <h4 class="card-title">${nombre.value}</h4>
            <p class="card-text">${descripcion.value}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">
                ${date.value}
            <span class="float-right">${precio.value} €</span>
	          </small>
          </div>
        </div>
            `;
            //aqui anyadimos un nueva tarjeta
        campoconteneder.innerHTML+=cardhtml;



    }

});