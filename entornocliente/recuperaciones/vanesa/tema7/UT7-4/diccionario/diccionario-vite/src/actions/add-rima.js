import { Diccionario } from '../model/diccionario.class';
const diccionario = new Diccionario();

const SERVER = 'http://localhost:8000';

// Elementos del HTML
let formulario = document.querySelector('form');
let palabraInput = document.getElementById('palabra');
let rimaInput = document.getElementById('rima');
let mensajeError = document.getElementById('error');
let mensajeCorrecto = document.getElementById('correcto');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    // resetear mensajes
    mensajeError.classList.add('d-none');
    mensajeCorrecto.classList.add('d-none');

    let palabra = palabraInput.value.trim();
    let rima = rimaInput.value.trim();

    // Validar campos vacios
    if (!palabra || !rima) {
        mensajeError.textContent = "⚠ Por favor, completa ambos campos";
        mensajeError.classList.remove('d-none');
        return;
    }

    // Validar formato
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
    if (!regex.test(palabra) || !regex.test(rima)) {
        mensajeError.textContent = "⚠ Solo se permiten letras y espacios";
        mensajeError.classList.remove('d-none');
        return;
    }

    // Validar localmente con la clase Diccionario
    const mensaje = diccionario.agregarRima(palabra, rima);
    if (mensaje !== 'Rima agregada correctamente.') {
        mensajeError.textContent = `⚠ ${mensaje}`;
        mensajeError.classList.remove('d-none');
        return;
    }

    try {
        // Fetch con segundo parámetro con la información
        const resp = await fetch(`${SERVER}/diccionario`, {
            method: 'POST',// Método
            headers: {// Indicamos encabezados
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ palabra, rima })// pasamos producto de Objeto a JSON en el body
        });

        // si el status no está entre 200 y 299, se produce error
        if (!resp.ok) {
            const errorData = await resp.json();
            throw new Error(errorData.message || 'Error al agregar la rima');
        }

        // mensaje de exito
        mensajeCorrecto.textContent = `✅ Rima "${rima}" agregada a "${palabra}"`;
        mensajeCorrecto.classList.remove('d-none');

        // Limpiar campos
        palabraInput.value = '';
        rimaInput.value = '';

    } catch (error) {
        mensajeError.textContent = `⚠ Error: ${error.message}`;
        mensajeError.classList.remove('d-none');
    }

    // Si falla la API, eliminar la rima de la clase Diccionario
    diccionario.eliminarRima(palabra, rima);
});

/**
* Función para cargar el diccionario desde la API y rellenarlo en la instancia de la clase
*/
async function cargarDiccionario() {
    try {
        const resp = await fetch(`${SERVER}/diccionario`);
        if (!resp.ok) throw new Error('Error al cargar el diccionario');
        const data = await resp.json();

        // Cargar los datos en la instancia del Diccionario
        for (const palabra in data) {
            if (data.hasOwnProperty(palabra)) {
                data[palabra].forEach((rima) => {
                    diccionario.agregarRima(palabra, rima);
                });
            }
        }

    } catch (error) {
        console.error('Error al cargar el diccionario:', error.message);
    }
}

// Cargar el diccionario inicial al cargar la página
cargarDiccionario();