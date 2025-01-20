/**
 * Crea o modifica una cookie con los parámetros proporcionados. 
 * Permite establecer el nombre, valor, fecha de expiración, ruta, dominio y la opción de usar HTTPS para la cookie.
 *
 * @param {string} cname - El nombre de la cookie. Este es el identificador que usará la cookie.
 * @param {string} cvalue - El valor que almacenará la cookie. Puede ser cualquier cadena de texto.
 * @param {Date} [cexpires] - La fecha y hora de expiración de la cookie. Si no se proporciona, la cookie será de sesión y se eliminará cuando se cierre el navegador. Este parámetro debe ser un objeto `Date`.
 * @param {string} [cpath] - La ruta (path) desde la que la cookie es accesible. Por defecto, la cookie es accesible desde el dominio raíz (`/`).
 * @param {string} [cdomain] - El dominio al que la cookie pertenece. Si no se proporciona, la cookie solo será accesible desde el dominio actual y sus subdominios.
 * @param {boolean} [csecure] - Indica si la cookie debe ser enviada solo a través de conexiones seguras (HTTPS). Si se omite o se establece como `false`, la cookie se enviará también en conexiones HTTP.
 *
 * @example
 * // Crear una cookie que expira en una fecha específica
 * const expirationDate = new Date();
 * expirationDate.setDate(expirationDate.getDate() + 7); // Expira en 7 días
 * setCookie('username', 'Marina Navarro Pina', expirationDate, '/', 'example.com', true);
 *
 * @example
 * // Crear una cookie de sesión (sin fecha de expiración)
 * setCookie('sessionID', 'abc123');
 */
function setCookie(cname, cvalue, cexpires, cpath, cdomain, csecure) {
    document.cookie = cname + '=' + cvalue + 
      (cexpires ? ';expires=' + cexpires.toUTCString() : '') + 
      (cpath ? ';path=' + cpath : '') + 
      (cdomain ? ';domain=' + cdomain : '') + 
      (csecure ? ';secure' : '');
  }
  
// Crear una cookie que expira en una fecha específica
const expirationDate = new Date();
expirationDate.setDate(expirationDate.getDate() + 7); // Expira en 7 días
setCookie('username', 'Marina', expirationDate, '/', '', true);

// Crear una cookie de sesión (sin fecha de expiración)
setCookie('sessionID', 'abc123');

// Modifica una cookie
expirationDate.setDate(expirationDate.getDate() + 21); // Expira en 21 días más = 28
setCookie('username', 'Marina Navarro Pina', expirationDate, '/', '', true);

/**
 * Extrae el valor de (cvalue) de la cookie.
 * 
 * @param {*} cname - Nombre de la cookie.
 * @returns - Valor de la cookie | ''
 */
function getCookie(cname) {
    if (document.cookie.length > 0) {
        let start = document.cookie.indexOf(cname + '=');
        if (start !== -1) { // Existe la cookie
            start = start + cname.length + 1; // Inicio del valor
            let end = document.cookie.indexOf(';', start);
            if (end === -1) { // Si no encuentra ';', es la última cookie
                end = document.cookie.length;
            }
            return document.cookie.substring(start, end); // Extrae el valor
        }
    }
    return ''; // No se encontró la cookie
}

console.log(getCookie('username'));
console.log(getCookie('noexiste'));
console.log(getCookie('sessionID'));
// document.cookie contiene todas las cookies del sitio
console.log('Cookies: ' + document.cookie);

/**
 * Para eliminar una Cookie se ha de configurar el parámetro de caducidad en una fecha pasada: 
 *          document.cookie = "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"; 
 * La ruta de la cookie (path) ha de ser la misma.
 * 
 * @param {*} cname - Nombre de la cookie.
 * @returns - Cookie expirada.
 */
function delCookie(cname) {
    document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    return document.cookie;
}

console.log('Cookie sessionID: ' + getCookie('sessionID'));
delCookie('sessionID'); // Elimina la cookie
console.log('Cookie sessionID: ' + getCookie('sessionID'));

