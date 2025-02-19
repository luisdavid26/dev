const SERVER = 'http://localhost:5000';

/**
 * Para hacer una petición XHR al servidor, se ha de crear una instancia del objeto XMLHttpRequest, 
 * que es el que controlará todo el proceso.
 * 
 * Pasos:
 * 1. Creamos la instancia del objeto: const peticion = new XMLHttpRequest();
 * 
 * 2. Para establecer la comunicación con el servidor ejecutamos el método .open() al que se le pasa como
 *    parámetro el tipo de petición (GET, POST, …) y la URL del servidor.
 *    OPCIONAL: Si queremos añadir cabeceras a la petición HTTP llamaremos al método .setRequestHeader(). 
 *              Por ejemplo, si enviamos datos con POST hay que añadir la cabecera Content-type que le indica 
 *              al servidor en qué formato van los datos: 
 *                              peticion.setRequestHeader('Content-type', 'application/x-www-form-urlencoded);
 * 
 * 3. Enviamos la petición al servidor con el método .send(): se le pasa como parámetro los datos a 
 *    enviar al servidor en el cuerpo de la petición. Si es una petición GET o DELETE no le pasaremos datos.
 * 
 * 4. Ponemos una escucha al objeto petición para saber cuándo está disponible la respuesta del servidor:
 * 
 *    Tenemos diferentes eventos que el servidor envía para informarnos del estado de nuestra petición 
 *    y que se pueden capturar:
 * 
 *    - El evento readystatechange se produce cada vez que el servidor cambia el estado de la petición. 
 * 
 *      Sus valores posibles son:
 * 
 *      0: petición no iniciada (se ha creado el objeto XMLHttpRequest)
 *      1: establecida conexión con el servidor (se ha hecho el open)
 *      2: petición recibida por el servidor (se ha hecho el send)
 *      3: se está procesando la petición
 *      4: petición finalizada y respuesta lista: ya están los datos. En ese momento la propiedad status contiene
 *         el estado de la petición HTTP (200: Ok, 404: Not found, 500: Server error, …). 
 *         Cuando readyState vale 4 y status vale 200 tenemos los datos en la propiedad responseText.
 */

// Petición GET con XHR
function getProductos() {
    // 1. Creamos la instancia del objeto
    const xhr = new XMLHttpRequest();
    // 2. Establecemos la comunicación con el servidor 
    //    Método GET:
    xhr.open('GET', `${SERVER}/productos`, true);
    // 3. Enviamos la petición al servidor
    xhr.send();
    // 4. Ponemos una escucha al objeto
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const json = JSON.parse(xhr.responseText); // JSON a Objeto -- CALLBACK
                console.log(json);
            } else {
                console.error("Fallo en la obtención de productos:", xhr.statusText);
            }
        }
    };
}

// Insertar producto con XHR
function postProducto(producto) {
    // 1. Creamos la instancia del objeto
    const xhr = new XMLHttpRequest();
    // 2. Establecemos la comunicación con el servidor 
    //    -- Añadimos cabeceras a la petición
    //    Método POST:
    xhr.open('POST', `${SERVER}/productos`, true);
    xhr.setRequestHeader('Content-Type', 'application/json'); // indicamos que enviamos un json
    // 3. Enviamos la petición al servidor
    xhr.send(JSON.stringify(producto)); // pasamos producto de Objeto a JSON
    // 4. Ponemos una escucha al objeto
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 201) {
                const json = JSON.parse(xhr.responseText); // JSON a Objeto -- CALLBACK
                console.log(json);
            } else {
                console.error("Fallo insertando el producto:", xhr.statusText);
            }
        }
    };
}

// Función para manejar el evento de añadir producto
function handlePostProducto() {
    const producto = {
        name: 'Producto index.html XHR',
        description: 'Producto de prueba XHR',
        photo: "data:image/png;base64,iVBORw0KGgoAA"
    };

    postProducto(producto);

    document.getElementById("texto").textContent = "Producto XHR insertado. Mira la consola!";
}

// Añadir la escucha para el botón 'Post Producto'
document.getElementById("postProducto").addEventListener("click", handlePostProducto);

// Obtener productos al cargar la página
getProductos();
