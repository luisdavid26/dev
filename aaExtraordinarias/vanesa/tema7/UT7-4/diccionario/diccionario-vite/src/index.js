const SERVER = 'http://localhost:8000';

document.addEventListener('DOMContentLoaded', () => {
    // Elementos del HTML
    let tablaBody = document.querySelector('#tablaRimas tbody');
    let mensajeVacio = document.getElementById('mensajeVacio');

    //funcion para crear la tabla con las palabras y las rimas
    function crearFila(palabra, rimas) {
        let tr = document.createElement('tr');
        let tdPalabra = document.createElement('td');
        tdPalabra.textContent = palabra;

        let tdRimas = document.createElement('td');
        tdRimas.textContent = rimas.join(', ') || '-';

        tr.append(tdPalabra, tdRimas);
        return tr;
    };

    //funcion para limpiar la tabla
    function limpiarTabla() {
        while (tablaBody.firstChild) {
            tablaBody.removeChild(tablaBody.firstChild);
        }
    };

    //funcion para cargar los datos del formulario
    async function cargarDiccionario(){
        try {
            const resp = await fetch(`${SERVER}/diccionario`);// promesa fetch
            // si el status no está entre 200 y 299, se produce error
            if (!resp.ok) throw new Error('Error al cargar datos');
            // JSON a Objeto
            const data = await resp.json();// promesa .json()
            limpiarTabla();

            // Verificar si hay datos
            let tieneDatos = false;
            for (let key in data.data) {
                tieneDatos = true;
                break;
            }

            //si no hay datos
            if (!tieneDatos) {
                mensajeVacio.classList.remove('d-none');
                return;
            }
            
            mensajeVacio.classList.add('d-none');

            // agregar filas a la tabla
            for (let palabra in data.data) {
                let rimas = data.data[palabra] || [];
                tablaBody.appendChild(crearFila(palabra, rimas));
            }

        } catch (error) {
            mensajeVacio.textContent = `Error: ${error.message}`;
            mensajeVacio.classList.remove('d-none');
        }
    };

    cargarDiccionario();
});