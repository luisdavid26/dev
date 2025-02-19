const SERVER = 'http://localhost:8000';

document.addEventListener('DOMContentLoaded', () => {
    // Elementos del HTML
    let selectPalabras = document.getElementById('selectPalabras');
    let form = document.querySelector('form');
    let errorAlert = document.getElementById('error');
    let cardMostrar = document.getElementById('cardMostrar');
    let cardTitulo = document.getElementById('cardMostrarTitulo');
    let cardTexto = document.getElementById('CardMostrarText');

     // funcion para limpiar select
    function limpiarSelect(select) {
        while (select.firstChild) {
            select.removeChild(select.firstChild);
        }
    };

    // funcion para cargar palabras en select
    async function cargarPalabras() {
        try {
            const resp = await fetch(`${SERVER}/diccionario`);// promesa fetch
            // si el status no está entre 200 y 299, se produce error
            if (!resp.ok) throw new Error('Error cargando palabras');
            // JSON a Objeto
            const data = await resp.json();// promesa .json()
            limpiarSelect(selectPalabras);
            
            // Opción por defecto
            let defaultOption = document.createElement('option');
            defaultOption.textContent = 'Elige una palabra';
            defaultOption.value = '';
            defaultOption.disabled = true;
            defaultOption.selected = true;
            selectPalabras.appendChild(defaultOption);

            // obtiene palabras del diccionario
            let palabras = [];
            for (let key in data.data) {
                palabras.push(key);
            }

            // agrega opciones al select
            for (let i = 0; i < palabras.length; i++) {
                let palabra = palabras[i];
                let option = document.createElement('option');
                option.value = palabra;
                option.textContent = palabra;
                selectPalabras.appendChild(option);
            }

        } catch (error) {
            errorAlert.textContent = `Error: ${error.message}`;
            errorAlert.classList.remove('d-none');
        }
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        let palabra = selectPalabras.value;

        // valida seleccion
        if (!palabra) {
            errorAlert.textContent = 'Selecciona una palabra primero';
            errorAlert.classList.remove('d-none');
            return;
        }

        try {
            const resp = await fetch(`${SERVER}/diccionario/${palabra}`);
            if (!resp.ok) throw new Error('Error al obtener rimas');
            
            const data = await resp.json();
            const rimas = data.data[palabra] || []; // Si no hay rimas, array vacío

            // muestra resultados
            cardTitulo.textContent = palabra;
            cardTexto.textContent = rimas.join(', ') || 'No hay rimas disponibles';
            cardMostrar.classList.remove('d-none');
            errorAlert.classList.add('d-none');

        } catch (error) {
            errorAlert.textContent = `Error: ${error.message}`;
            errorAlert.classList.remove('d-none');
            cardMostrar.classList.add('d-none');
        }
    });

    cargarPalabras();
});