import { getPersonajes } from "./src/controller/personajes.js"

document.addEventListener("DOMContentLoaded", (e) => {
    const contenedortarjeta = document.getElementById("personsContainer");
    const tarjeta =document.getElementById("card");
    const tarjetabody =document.getElementById("card-body");
    const tarjetatitulo =document.getElementById("card-title");
    const tarjetatext =document.getElementById("card-text");
   //prueba para los datos del personaje
    const datospersonajes={
        nombre:"luis",
        casa:"griffindor",
        patronus:"ciervo",
        fechaNacimiento:"24/04/2003",
        sangre:"mestiza",
        varita:"acebo"
    }

    async function creartarjeta(){
        //peticion get a la api para traer todas las tarjetas
        //const datospersonajes= await getPersonajes();
        const tarjeta=document.createElement("card");
        const tarjetabody=document.createElement("card-body");
        const tarjetatitulo=document.createElement("card-title");
        const textocasa=document.createElement("p");
         textocasa.append(datospersonajes.casa);
        const textopatronus=document.createElement("P");
        textopatronus.append(datospersonajes.patronus);
        const textofecnac=document.createElement("P");
        textofecnac.append(datospersonajes.fechaNacimiento);
        const textosangre=document.createElement("P");
        textosangre.append(datospersonajes.sangre);
        const textosvarita=document.createElement("P");
        textosvarita.append(datospersonajes.varita||hola)
        tarjeta.appendChild(tarjetabody);
        tarjeta.appendChild(tarjetatitulo);
        tarjeta.appendChild(textocasa);
        tarjeta.appendChild(textopatronus);
        tarjeta.appendChild(textofecnac);
        tarjeta.appendChild(textosangre);
        tarjeta.appendChild(textosvarita);
        tarjeta.append(contenedortarjeta);
        tarjeta
    }




    creartarjeta();
});
