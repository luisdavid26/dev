const SERVER = "http://localhost:300";

async function getPersons() {
  try {
  const resp = await fetch(`${SERVER}/personajes`);
  if(!resp.ok){
    console.log(`no se a podido obetener los personajes`);
  }else{
    const json =await resp.json();
    showPerson(json.data);
  }
} catch (error) {
    console.error(error);
  }
}

function deletePerson(person,containerDiv){
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE',`${SERVER}/personajes/${person.id}`,true);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.onload=function(){
        if(xhr.status===200||xhr.status===204){
            localStorage.removeItem(person.nombre);
            containerDiv.remove();
        }
    };
    xhr.send();
}
document.addEventListener("DOMContentLoaded",(e)=>{
    getPersons();

});


const showPerson=(data)=>{
    data.forEach(element => {
            appendPerson(e);
    });
}
function appendPerson(person){
    const container =document.getElementById('personosContainer');
    const div = document.getElementById("div");
     div.className='col-md mb-4';
     const body = document.createElement('div');
     body.className = 'card-body';
    const card = document.createElement("div");
    card.className='card';
    const title =document.createElement("h5");
    title.className="card-title";
    title.textContent=person.nombre;
    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    const patronus = document.createElement('p');
    patronus.textContent = 'Pastronus: ';
    const patronusStrong = document.createElement('strong');
    patronusStrong.textContent = person.patronus;
    patronus.appendChild(patronusStrong);
   
   //para borrar
    const button = document.createElement('button');
    button.className = 'btn btn-danger eliminar-btn';
    button.textContent = 'Eliminar';
    button.addEventListener('click', () => {
        deletePerson(person, div);

    });
    
    cardText.appendChild(patronus);
    body.appendChild(title);
    body.appendChild(cardText)
    body.appendChild(button)
    card.appendChild(body)
    card.appendChild(card)
    div.appendChild(card)
    container.appendChild(div)


}


