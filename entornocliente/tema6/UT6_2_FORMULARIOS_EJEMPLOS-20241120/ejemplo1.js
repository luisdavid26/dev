const form  = document.getElementsByTagName('form')[0];

const nombre = document.getElementById('nombre');
const nombreError = document.querySelector('#nombre + span.error');
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

form.addEventListener('submit', (event) => {
    // Si tenemos que validar algo que no puede hacerse mediante atributos HTML 
    // (por ejemplo si el nombre de usuario ya está en uso) deberemos hacer 
    // la validación “a mano” y en caso de no ser válido ponerle un error 
    // con .setCustomValidity(). 
    // DEBEMOS RECORDAR QUITAR EL ERROR si todo es correcto 
    // o el formulario siempre será inválido.
    if (nombre.value==='Marina') {
        nombre.setCustomValidity('Ese nombre de usuario ya está en uso (setCustomValidity).');
    } else {
        nombre.setCustomValidity('');  // Se quita el error personalizado
    }

    // Verificar si hay errores
    if(!form.checkValidity()) {
        // si no es válido, no se envía el formulario
        event.preventDefault();
    }
    // mostrar el posible error de cada campo, 
    // o quitar el error cuando el campo sea válido

    // -- MENSAJES DEL NAVEGADOR --
    nombreError.textContent = nombre.validationMessage;
    emailError.textContent = email.validationMessage;
    // -- MENSAJES PERSONALIZADOS --
    // nombreError.textContent = customErrorValidationMessage(nombre);

});
/**
 * Si no nos gusta el mensaje del navegador y queremos personalizarlo 
 */
function customErrorValidationMessage(input) {
    if (input.checkValidity()) {
      return '';
    }
    if (input.validity.valueMissing) {
      return 'Este campo es obligatorio';
    }
    if (input.validity.tooShort) {
      return `Debe tener al menos ${input.minLength} caracteres`;
    }
    if (input.value === 'Marina') {
        return 'Ese nombre de usuario ya está en uso (customErrorValidationMessage)';
    }
    // Y seguiremos comprobando cada atributo que hayamos usado en el HTML
    return 'Error en el campo';   // por si se nos ha olvidado comprobar algo
  }