const SERVER = 'http://localhost:8000';

document.addEventListener('DOMContentLoaded', () => {
    // Elementos del HTML
    let form = document.querySelector('form');
    let selectPalabras = document.getElementById('selectPalabras');
    let selectRimas = document.getElementById('selectRimas');
    let errorAlert = document.getElementById('error');
    let successAlert = document.getElementById('correcto');

    // funcion para limpiar selects
    const limpiarSelect = (select) => {
        while (select.firstChild) {
            select.removeChild(select.firstChild);
        }
    };

    // funcion para cargar palabras en select
    const cargarPalabras = async () => {
        try {
            const resp = await fetch(`${SERVER}/diccionario`);// promesa fetch
            // si el status no está entre 200 y 299, se produce error
            if (!resp.ok) throw new Error('Error cargando palabras');
            // JSON a Objeto
            const data = await resp.json();// promesa .json()
            limpiarSelect(selectPalabras);
            
            // Opción por defecto
            let optionDefault = document.createElement('option');
            optionDefault.textContent = 'Elige una palabra';
            optionDefault.value = '';
            optionDefault.disabled = true;
            optionDefault.selected = true;
            selectPalabras.appendChild(optionDefault);

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
            errorAlert.textContent = 'Error: ' + error.message;
            errorAlert.classList.remove('d-none');
        }
    };

    selectPalabras.addEventListener('change', async () => {
        let palabra = selectPalabras.value;
        if (!palabra) return;

        try {
            const resp = await fetch(`${SERVER}/diccionario/${palabra}`);// promesa fetch
            // si el status no está entre 200 y 299, se produce error
            if (!resp.ok) throw new Error('Error cargando rimas');
            // JSON a Objeto
            const data = await resp.json();// promesa .json()
            limpiarSelect(selectRimas);
            
            // Opción por defecto
            let optionDefault = document.createElement('option');
            optionDefault.textContent = 'Elige una rima';
            optionDefault.value = '';
            optionDefault.disabled = true;
            optionDefault.selected = true;
            selectRimas.appendChild(optionDefault);

            let rimas = data.data[palabra] || [];
            
            // agrega rimas al select
            for (let i = 0; i < rimas.length; i++) {
                let rima = rimas[i];
                let option = document.createElement('option');
                option.value = rima;
                option.textContent = rima;
                selectRimas.appendChild(option);
            }

        } catch (error) {
            errorAlert.textContent = 'Error: ' + error.message;
            errorAlert.classList.remove('d-none');
        }
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        let palabra = selectPalabras.value;
        let rima = selectRimas.value;

        // valida selecciones
        if (!palabra || !rima) {
            errorAlert.textContent = 'Selecciona una palabra y rima válidas';
            errorAlert.classList.remove('d-none');
            return;
        }

        try {
            const resp = await fetch(`${SERVER}/diccionario/${palabra}/${rima}`, {
                method: 'DELETE'// Método
            });
            // si el status no está entre 200 y 299, se produce error
            if (!resp.ok) throw new Error('Error eliminando rima');

            //mensaje de exito
            successAlert.textContent = 'Rima eliminada correctamente';
            successAlert.classList.remove('d-none');
            errorAlert.classList.add('d-none');
            
            //recargar datos
            await cargarPalabras();
            selectPalabras.value = palabra;
            selectPalabras.dispatchEvent(new Event('change'));

        } catch (error) {
            errorAlert.textContent = 'Error: ' + error.message;
            errorAlert.classList.remove('d-none');
        }
    });

    cargarPalabras();
});