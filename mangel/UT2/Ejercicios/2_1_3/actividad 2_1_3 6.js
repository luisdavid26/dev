function pasarCelsius(gradosFarenheit) {
    let gradosCelsius = (gradosFarenheit - 32) * 5 / 9;
    return gradosCelsius;
}

let gradosFarenheit = parseFloat(prompt("Dame grados en farenheit y te los dare en celsius"));

let gradosCelsius = Math.round(pasarCelsius(gradosFarenheit));
alert("Los " + gradosFarenheit +" grados Farenheit, en celsius son " + gradosCelsius);