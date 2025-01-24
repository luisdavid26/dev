/**
 * Creación base de datos MiBaseDeDatos, con una tabla (almacén de objetos) llamada usuarios.
 */

// Abrir o crear la base de datos MiBaseDeDatos
const request = indexedDB.open("MiBaseDeDatos", 1);

// Configurar el esquema de la base de datos
request.onupgradeneeded = function (event) {
    const db = event.target.result;

    // Crear un almacén de objetos llamado 'usuarios' con 'id' como clave primaria
    if (!db.objectStoreNames.contains("usuarios")) {
        const objectStore = db.createObjectStore("usuarios", { keyPath: "id" });

        // Crear un índice por 'nombre' (opcional)
        objectStore.createIndex("nombre", "nombre", { unique: false });

        console.log("Almacén de objetos 'usuarios' creado correctamente.");
    }
};

// Manejo de éxito al abrir la base de datos
request.onsuccess = function (event) {
    const db = event.target.result;
    console.log("Base de datos abierta con éxito.");

    //--
    // Ejemplos de utilización después de abrir la BBDD
    // Agregar usuarios
    agregarUsuario(db, { id: 1, nombre: "Marina", edad: 25 });
    agregarUsuario(db, { id: 3, nombre: "Navarro", edad: 30 }); // si no es la primera vez que ejecuto el script dará error porque ya existe.
    // Obtener un usuario por ID
    obtenerUsuario(db, 1);
    // Actualizar usuario
    actualizarUsuario(db, { id: 1, nombre: "Marina Navarro", edad: 26 });
    // Eliminar usuario
    eliminarUsuario(db, 1);
    //--
};

// Manejo de éxito y errores al abrir la base de datos
request.onerror = function (event) {
    console.error("Error al abrir la base de datos:", event.target.error);
};


/**
 * Operaciones sobre el almacén de objetos: usuarios
 */

// Función para agregar un usuario
function agregarUsuario(db, usuario) {
    const transaction = db.transaction(["usuarios"], "readwrite");// Crea una transacción con permisos de lectura y escritura
    const objectStore = transaction.objectStore("usuarios");  // Obtiene una referencia al almacén de objetos 'usuarios'

    const request = objectStore.add(usuario); // add - Agrega el usuario al almacén de objetos
    // Manejo existo y/o error
    request.onsuccess = function () {
        console.log("Usuario agregado:", usuario);
    };

    request.onerror = function (event) {
        console.error("Error al agregar usuario:", event.target.error);
    };
}

// Función para obtener un usuario por su ID
function obtenerUsuario(db, id) {
    const transaction = db.transaction(["usuarios"], "readonly");
    const objectStore = transaction.objectStore("usuarios");

    const request = objectStore.get(id); // get - Obtiene el usuario del almacén de objetos
    request.onsuccess = function () {
        if (request.result) {
            console.log("Usuario encontrado:", request.result);
        } else {
            console.log("Usuario no encontrado.");
        }
    };

    request.onerror = function (event) {
        console.error("Error al obtener usuario:", event.target.error);
    };
}

// Función para actualizar un usuario
function actualizarUsuario(db, usuario) {
    const transaction = db.transaction(["usuarios"], "readwrite");
    const objectStore = transaction.objectStore("usuarios");

    const request = objectStore.put(usuario); // put - Actualiza el usuario del almacén de objetos
    request.onsuccess = function () {
        console.log("Usuario actualizado:", usuario);
    };

    request.onerror = function (event) {
        console.error("Error al actualizar usuario:", event.target.error);
    };
}

// Función para eliminar un usuario
function eliminarUsuario(db, id) {
    const transaction = db.transaction(["usuarios"], "readwrite");
    const objectStore = transaction.objectStore("usuarios");

    const request = objectStore.delete(id); // delete - Elimina el usuario del almacén de objetos
    request.onsuccess = function () {
        console.log(`Usuario con ID ${id} eliminado.`);
    };

    request.onerror = function (event) {
        console.error("Error al eliminar usuario:", event.target.error);
    };
}



