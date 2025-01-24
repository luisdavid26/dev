export class MyGeolocation {
    static getLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                pos => { // función callback que recibe las coordenadas de la localización
                    resolve(pos.coords);
                },
                error => { // función callback que recibe un objeto con la propiedad code que indica el error producido
                    switch (error.code) {
                    case error.PERMISSION_DENIED: // El usuario no autoriza al navegador a acceder a la localización
                        reject("El usuario ha denegado la petición de geolocalización.");
                        break;
                    case error.POSITION_UNAVAILABLE: // No se puede obtener la localización
                        reject("La información de localización no está disponible.");
                        break;
                    case error.TIMEOUT:  // Ha expirado el tiempo para obtener la localización
                        reject("Ha expirado el tiempo para obtener la localización.");
                        break;
                    default:
                        reject("Se ha producido un error desconocido.");
                        break;
                    }
                }
            );
        });
    }
}