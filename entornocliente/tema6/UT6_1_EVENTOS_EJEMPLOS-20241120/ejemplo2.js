// --sobre capa1--
const capa1 = document.getElementById("capa1");
// identifica las coordenadas X Y del ratón dentro de div1 -- arrow function
capa1.addEventListener("mousemove", e => {
    capa1.textContent = `${e.offsetX}, ${e.offsetY}`;
});

// --sobre capa2--
const capa2 = document.getElementById("capa2");
// cambia el color de fondo de div2, en función de las coordenadas X Y del ratón -- no arrow function
capa2.addEventListener("mousemove", function(e) {
    // --e-- es un objeto y la función manejadora lo recibe como parámetro
    //       como objeto tiene propiedades y métodos
    const red = e.offsetX;
    const green = e.offsetY;
    const blue = 255 - e.offsetY;
    // --this-- hace referencia al elemento que ha disparado el evento - capa2
    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

/**
 * Función sobre el Objeto Event
 */
function selectItem(e) {
    // target es una propiedad del Objeto Event y hace referencia al elemento que ha disparado el evento
    e.target.classList.toggle("selected"); 
}

document.addEventListener('DOMContentLoaded', e => {
    let ul = document.getElementById("list");
    Array.from(ul.children).forEach(li => {
        li.addEventListener('click', selectItem);
    });
});

/**
 * Event Bubbling
 */

// Normalmente en una página web los elementos HTML se solapan unos con otros:
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");

function divClick(event) {
    // Si ponemos un escuchador del evento click a todos ellos se ejecutarán todos ellos, pero ¿en qué orden?:
    // los eventos se disparan primero DE FUERA HACIA DENTRO --> Fase de Captura
    // y al llegar al más interno: DE DENTRO HACIA FUERA --> Fase de Burbujeo (BUBBLING) (por defecto)
    // eventPhase: 1 -> capture, 2 -> target (objetivo), 3 -> bubble
    console.log("Has pulsado: " + this.id + ". Fase: " + event.eventPhase
        + ". this: " + this.id + ". event.target: " + event.target.id + ". event.currentTarget: " + event.currentTarget.id
    );
    // no continuará la propagación (si es en la fase de captura) o en (la fase de propagación o bubbling):
    // comentar-descomentar para probar
    // event.stopPropagation();
};

// El tercer parámetro indica en qué fase debe dispararse:
// - true: en fase de captura
// - false (valor por defecto): en fase de burbujeo

// comentar-descomentar para apreciar la diferencia
div1.addEventListener('click', divClick, false);
div2.addEventListener('click', divClick, false);
div3.addEventListener('click', divClick, false);

// div1.addEventListener('click', divClick, true);
// div2.addEventListener('click', divClick, true);
// div3.addEventListener('click', divClick, true);