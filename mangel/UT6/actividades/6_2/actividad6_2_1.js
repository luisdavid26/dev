
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener("submit", (e) => {
        let error = document.getElementById("error");
        let nombre = document.getElementById("nombre");

        if (nombre.value == "") {
            nombre.setCustomValidity("No has introducido un nombre");
            nombre.focus();
            error.textContent("No has introducido un nombre");
        }
    }); 
});
