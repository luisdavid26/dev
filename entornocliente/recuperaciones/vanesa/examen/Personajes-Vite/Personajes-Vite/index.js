const SERVER = 'http://localhost:3000';

async function getPersons(){
    try{
        const resp = await fetch(`${SERVER}/personajes`);
        if(!resp.ok) throw new Error(`No se ha podido obtener los personajes`);
        const json =  await resp.json();
        showPerson(json.data);

    }catch (error){
        console.error(`Error: ${error}`);
    }
}

function deletePerson(person, containerDiv) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `${SERVER}/personajes/${person.id}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200 || xhr.status === 204) {
            // Elimina los datos almacenados en localStorage (suponiendo que la clave es el nombre)
            localStorage.removeItem(person.nombre);
            // Quita la tarjeta de la interfaz
            containerDiv.remove();
        } else {
            console.error("Error al eliminar el personaje");
        }
    };
    xhr.send();
}


document.addEventListener("DOMContentLoaded", (e) =>{
   // e.preventDefault(); //esta dando fallo por que no tiene nada que prevenir el default entonces no tiene sentido ponerolo

    getPersons();
});

const showPerson = (data) =>{
    
    data.forEach(e =>{
        appendPerson(e);
    });
}

function appendPerson(person){

    const container = document.getElementById('personsContainer');

    const div = document.createElement('div');
    div.className = 'col-md-4 mb-4';

    const card = document.createElement('div');
    card.className = 'card';

    const body = document.createElement('div');
    body.className = 'card-body';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = person.nombre;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';

    const casa = document.createElement('p');
    casa.textContent='casa: ';
    const casaStrong = document.createElement('strong');
    casaStrong.textContent =person.casa; 

    casa.appendChild(casaStrong);

    const patronus = document.createElement('p');
    patronus.textContent = 'Pastronus: ';
    const patronusStrong = document.createElement('strong');
    patronusStrong.textContent = person.patronus;
    patronus.appendChild(patronusStrong);

    const fechaNacimiento = document.createElement('p');
    fechaNacimiento.textContent = 'Fecha Nacimiento: ';
    const fechaNacimientoStrong = document.createElement('strong');
    fechaNacimientoStrong.textContent = person.fechaNacimiento;
    fechaNacimiento.appendChild(fechaNacimientoStrong);

    const sangre = document.createElement('p');
    sangre.textContent = 'Sangre: ';
    const sangreStrong = document.createElement('strong');
    sangreStrong.textContent = person.sangre;
    sangre.appendChild(sangreStrong);

    const varita = document.createElement('p');
    varita.textContent = 'Varita: ';
    const varitaStrong = document.createElement('strong');
    varitaStrong.textContent = person.varita;
    varita.appendChild(varitaStrong);

    const button = document.createElement('button');
    button.className = 'btn btn-danger eliminar-btn';
    button.textContent = 'Eliminar';
    button.addEventListener('click', () => {
        deletePerson(person, div);

    });
    

    cardText.appendChild(casa);
    cardText.appendChild(patronus);
    cardText.appendChild(fechaNacimiento);
    cardText.appendChild(sangre);
    cardText.appendChild(varita);

    body.appendChild(title);
    body.appendChild(cardText);
    body.appendChild(button);

    card.appendChild(body);
    div.appendChild(card);
    container.appendChild(div);


}