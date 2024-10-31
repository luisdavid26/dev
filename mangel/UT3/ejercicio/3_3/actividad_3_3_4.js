function saludo() {
    let hora = new Date().getHours();
    if (hora >= 6 && hora < 12) {
        alert("Buenos dias");
    }else if (hora >= 12 && hora < 20) {
        alert("Buenas tardes")
    } else if (hora >= 20 && hora < 6){
        alert("Buenas noches")
    }
}
saludo();