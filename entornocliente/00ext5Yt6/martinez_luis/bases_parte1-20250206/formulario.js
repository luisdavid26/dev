const form =document.getElementById("formularioRegistro");
const inputdni= document.getElementById("dni");
const inputtelefono =document.getElementById("telefono");
const inputemail =document.getElementById("email");
const texterror=document.getElementsByClassName("error");
const RegExpdni = /^[a-zA-z]{8}[0-9]+$/;
const RegExptel =/^[0-9]{3}[0-9]{2}[0-9]{2}[0-9]{2}$/;
const RegExpemail =/^[a-zA-z]@[a-zA-Z]+$/;
document.addEventListener("DOMContentLoaded", (e) => {
  document.addEventListener("submit", (e) => {
    if(RegExpdni.test(inputdni.value)){     
      texterror.textcontent("“El DNI debe tener 8 dígitos seguidos de una letra"); 
      inputdni.focus;
    }
    if(RegExptel.test(inputtelefono.value)){
      texterror.textcontent("El teléfono debe contener 9 cifras, con el siguiente formato: 123 45 67 89."); 

    }
    if(RegExpemail.test(inputemail.value)){

      texterror.textcontent("El correo electrónico no tiene un formato válido"); 

    }

  });
});
