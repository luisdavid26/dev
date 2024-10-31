function calcularArea(radio) {
    let area = Math.PI * Math.pow(radio, 2);
    return area;
}

function calcularPerimetro(radio) {
    let perimetro = 2 * Math.PI * radio;
    return perimetro;
}

let radio = parseFloat(prompt("Dame el radio del circulo"));
let area = Math.round(calcularArea(radio));
let perimetro = Math.round(calcularPerimetro(radio));

alert("El perimetro del circulo es " + perimetro + ", y el area es " + area);