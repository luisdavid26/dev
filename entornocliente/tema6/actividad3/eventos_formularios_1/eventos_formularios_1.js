document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("newEvent");
  const camponombre = document.getElementById("name");
  const campofecha = document.getElementById("date");
  const campodesc = document.getElementById("description");
  const campoprecio = document.getElementById("price");
  const campoimagen = document.getElementById("image");
  const campocarg = document.getElementById("eventsContainer");

  const tipospermi = ["image/jpeg", "image/png", "image/gif","image/jpg"];//determinamos que formatos de imagen son permitidas
  //const fechaReg = /^\d{2}\/\d{2}\/\d{4}$/;//expresion regular para verificar la fecha
  //fecha reg comentado para que funcione el codigo
  const nombreReg=/^[A-Za-z]{1,}$/;
  const descReg=/^[A-Za-z0-9]{1,}$/;

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let esvalido = true;

    //ejercicio a y b
    //comprobamos si esta vacio
    if (!camponombre.value||!nombreReg.test(camponombre.value)) {
      camponombre.classList.add("is-invalid");
      camponombre.classList.remove("is-valid");
      esvalido = false;
    } else {
      camponombre.classList.add("is-valid");
      camponombre.classList.remove("is-invalid");
    }
    //validamos si esta vacia o si no cumple con la expresion regular
    if (!campofecha.value||!fechaReg.test(campofecha.value)) {
      campofecha.classList.add("is-invalid");
      campofecha.classList.remove("is-valid");
      esvalido = false;
    } else {
      campofecha.classList.add("is-valid");
      campofecha.classList.remove("is-invalid");
      print(campofecha.value);

    }

    if (!campodesc.value||!descReg.test(campodesc.value)) {
      campodesc.classList.add("is-invalid");
      campodesc.classList.remove("is-valid");
      esvalido = false;
    } else {
      campodesc.classList.add("is-valid");
      campodesc.classList.remove("is-invalid");
    }

    if (!campoprecio.value) {
      campoprecio.classList.add("is-invalid");
      campoprecio.classList.remove("is-valid");
      esvalido = false;
    } else {
      campoprecio.classList.add("is-valid");
      campoprecio.classList.remove("is-invalid");
    }
    //validamos el si esta vacio y el tipo de imagen que se a introducido
    if (!campoimagen.files[0]||!tipospermi.includes(campoimagen.files[0].type)) {
      campoimagen.classList.add("is-invalid");
      campoimagen.classList.remove("is-valid");
      esvalido = false;
    } else {
      campoimagen.classList.add("is-valid");
      campoimagen.classList.remove("is-invalid");
    }
    //ejercicio c
    if (esvalido) {
      formulario.reset();
      const inputs = formulario.querySelectorAll(".form-control");
      inputs.forEach((input) => {
        input.classList.remove("is-valid", "is-invalid");
      });
    const card=document.createElement("card");
    const cardbody=document.createElement("card-body");
    const cardtitle=document.createElement("card-title");
    const cardtext=document.createElement("card-text");
    const footercontent=document.createElement("small");
    const cardfooter=document.createElement("card-footer");
    const imagentop=document.createElement("card-img-top");
    imagentop.src=imgPreview.src;
    card.append(imagentop);
      cardtitle.textContent=camponombre.value;
      cardtext.textContent=campodesc.value;
      


    }

  });

  //ejercicio de la previsualizacion de la imagen reutilizado de los recursos de los apuntes
  function encodeFileAsURL(file, callback) {
    if (file) {
      const fileURL = URL.createObjectURL(file);
      callback(fileURL);
    } else {
      console.error("No file provided or file is invalid.");
    }
  }

  function handleFileInputChange(event, previewElementId) {
    const file = event.target.files[0];
    encodeFileAsURL(file, function (fileURL) {
      document.getElementById(previewElementId).src = fileURL;
    });
  }

  function attachFileInputHandler(inputElementId, previewElementId) {
    document
      .getElementById(inputElementId)
      .addEventListener("change", function (event) {
        handleFileInputChange(event, previewElementId);
      });
  }
  attachFileInputHandler("image", "imgPreview");
});
