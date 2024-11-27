/**
 * Eventos una vez cargados los elementos de la página -creado el árbol del DOM (sin css, ni imágenes)
 * -- Funciones anónimas --
 */

document.addEventListener('DOMContentLoaded', e => {
    // --sobre img--
    // en img cargamos paisaje1.jpg
    let img = document.getElementById("imagen");
    img.src = 'img/paisaje1.jpg';
    // cuando el puntero del ratón entra en el elemento, carga paisaje2.jpg
    img.addEventListener('mouseenter', e => {
        img.src = 'img/paisaje2.jpg';
    });
    // cuando el puntero del ratón sale del elemento, carga paisaje1.jpg
    img.addEventListener('mouseleave', e => {
        img.src = 'img/paisaje1.jpg';
    });

    // --sobre input1--
    let input = document.getElementById("input1");
    // cuando tiene el foco (seleccionado o activo), la fuente se pone en negrita
    input.addEventListener('focus', e => {
        input.style.fontWeight = 'bold';
    });
    // cuando pierde el foco, la fuente torna a normal
    input.addEventListener('blur', e => {
        input.style.fontWeight = 'normal';
    });
    // cuando cambia el valor interno del input, se pone en mayúsculas
    input.addEventListener('input', e => {
        input.value = input.value.toLocaleUpperCase();
    });
    // cuando intentas pegar un texto, no deja.
    input.addEventListener('paste', e => {
        console.log("No se puede pegar texto");
        e.preventDefault(); // previene el comportamiento por defecto.
    });
    // identificación del texto seleccionado del input
    input.addEventListener('select', e => {
        let texto = input.value.substring(input.selectionStart, input.selectionEnd);
        console.log("Has seleccionado el texto: " + texto);
    });
});

/**
 * Eventos directos sobre los elementos
 */

// --sobre button--
const btn = document.getElementById("btn");
// hacer click sobre el botón
btn.addEventListener('click', e => {
    console.log("Click en el botón");
});

// --sobre enlace y checkbox--
const aGoogle = document.getElementById("google");
const desactivar = document.getElementById("desactivar");
// si se hace click sobre el ckeckbox desactivar,
// quita el comportamiento por defecto al hacer click sobre el enlace
aGoogle.addEventListener("click", e => {
    if(desactivar.checked) {
        e.preventDefault();
    }
});

