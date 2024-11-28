let nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Nuevo párrafo ";

const textoNegrita = document.createElement("strong");
textoNegrita.textContent = "añadido";

nuevoParrafo.append(textoNegrita, " por javascript");
document.getElementById("lipsum").append(nuevoParrafo);
