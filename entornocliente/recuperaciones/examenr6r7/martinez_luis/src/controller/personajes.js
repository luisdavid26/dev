const SERVER = "http://localhost:5173";


export async function getPersonajes() {
    try {
        const response = await fetch(`${SERVER}/personajes`);
        console.log(`respuesta raw de la peticion ${response.status} ,${response.statusText}`);
        if (!response.ok) {
            console.error(`error en la peticion ${response.status} ,${response.statusText}`);
        }
        if (response.status === 200 || response.ok) {
            if (response.data === undefined) {
                console.error(`no hay datos que traer de la api`);
            } else {
                console.log(`respuesta con los datos ${response.data}`);
                return JSON.parse(response.data);
            }
        }
    } catch (error) {
        console.error("error general en la peticion get");
    }

}


export async function postPersonajes(nuevosdatos) {
   // try {
        console.log("lo que le llega a la api");
        console.log(`${nuevosdatos.nombre}`);
        console.log(`${nuevosdatos.casa}`);
        console.log(`${nuevosdatos.patronus}`);
        console.log(`${nuevosdatos.fechaNacimiento}`);
        console.log(`${nuevosdatos.sangre}`);
        console.log(`${nuevosdatos.varita}`);

        const response = await fetch(`${SERVER}/personajes`, {
            method: 'POST',
            headers:{'Content-Type' : 'application/json'},
            body: nuevosdatos
        });
        console.log(`respuesta sin filtrar de la api ${response.status}, ${response.statusText}`);
       
        if (!response.ok || response.status !== 201) {
            console.log(`error en la peticion ${response.status} ,${response.statusText}`);
        }
        if (response.status === 201) {
            localStorage.setItem(nuevosdatos.nombre,nuevosdatos.casa)
            console.log(`datos subidos al localStorage${localStorage.getItem()[0]}`)
            return JSON.parse(response.data);
        }
    //} catch (error) {
    //    console.error(`error al intentar el post en el postpersonajes`);
    //}

}
export async function deletePersonaje(personajeid){
    console.log(`el id inicial del personaje es ${personajeid}`);


try {
    const xhr = XMLHttpRequest();
    xhr.open(`${SERVER}/personajes:${personajeid}`)
        localStorage.removeItem();

} catch (error) {
    console.error("error al hacer el deletepersonaje");
}
}