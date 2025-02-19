import {postPersonajes,} from "./controller/personajes.js"


document.addEventListener("DOMContentLoaded",(e)=>{
    const formu = document.getElementById("formPerson");
    document.addEventListener("submit",(e)=>{
        const nombre = document.getElementById("nombre");
        const casa = document.getElementById("casa");
        const patronus = document.getElementById("patronus");
        const fecnac = document.getElementById("fechaNacimiento");
        const sangre = document.getElementById("sangre");
        const varita = document.getElementById("varita");
        const nuevopersonaje={
            nombre:nombre.value,
            casa:casa.value,
            patronus:patronus.value,
            fechaNacimiento:fecnac.value,
            sangre:sangre.value,
            varita:varita.value
        }

        postPersonajes(nuevopersonaje);
        //relocalizamos al usuario
        //location.assign("../index.html");

    });

});
