const SERVER = 'http://localhost:8000';

document.addEventListener('DOMContentLoaded', () => {
    // Elementos del HTML
    let form = document.querySelector('form');
    let selectPalabras = document.getElementById('selectPalabras');
    let errorAlert = document.getElementById('error');
    let successAlert = document.getElementById('correcto');

    //funcion para limpiar el select
    function limpiarSelect(select) {
        while (select.firstChild) {
            select.removeChild(select.firstChild);
        }
    };

    // funcion para cargar palabras en el select
    async function cargarPalabras() {
        try {
            const resp = await fetch(`${SERVER}/diccionario`);// promesa fetch
            // si el status no está entre 200 y 299, se produce error
            if (!resp.ok) throw new Error('Error al cargar palabras');
            // JSON a Objeto
            const data = await resp.json();// promesa .json()
            limpiarSelect(selectPalabras);
            
            // Opción por defecto
            let defaultOption = document.createElement('option');
            defaultOption.textContent = 'Selecciona una palabra';
            defaultOption.value = '';
            defaultOption.disabled = true;
            defaultOption.selected = true;
            selectPalabras.appendChild(defaultOption);

            // obtenemos las palabras del diccionario
            let palabras = [];
            for (let key in data.data) {
                palabras.push(key);
            }

            //agrega opciones al select
            for (let i = 0; i < palabras.length; i++) {
                let palabra = palabras[i];
                let option = document.createElement('option');
                option.value = palabra;
                option.textContent = palabra;
                selectPalabras.appendChild(option);
            }

        } catch (error) {
            errorAlert.textContent = error.message;
            errorAlert.classList.remove('d-none');
        }
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        let palabra = selectPalabras.value;

        // valida seleccion
        if (!palabra) {
            errorAlert.textContent = 'Debes seleccionar una palabra';
            errorAlert.classList.remove('d-none');
            return;
        }

        try {
            const resp = await fetch(`${SERVER}/diccionario/${palabra}`, {
                method: 'DELETE'// Método
            });
            // si el status no está entre 200 y 299, se produce error
            if (!resp.ok) throw new Error('Error al eliminar la palabra');

            // mensaje de exito
            successAlert.textContent = '¡Palabra eliminada correctamente!';
            successAlert.classList.remove('d-none');
            errorAlert.classList.add('d-none');

            // recarga las palabras
            await cargarPalabras();

        } catch (error) {
            errorAlert.textContent = error.message;
            errorAlert.classList.remove('d-none');
        }
    });

    cargarPalabras();
});