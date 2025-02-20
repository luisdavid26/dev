document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("newEvent");
  const camponombre = document.getElementById("name");
  const campofecha = document.getElementById("date");
  const campodesc = document.getElementById("description");
  const campoprecio = document.getElementById("price");
  const campoimagen = document.getElementById("image");
  const imgPreview = document.getElementById("imgPreview");
  const campocarg = document.getElementById("eventsContainer");

  const tipospermi = ["image/jpeg", "image/png", "image/gif", "image/jpg"];
  const nombreReg = /^[A-Za-z\s]+$/;
  const descReg = /^[A-Za-z0-9\s]+$/;

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let esvalido = true;

    if (!camponombre.value || !nombreReg.test(camponombre.value)) {
      camponombre.classList.add("is-invalid");
      esvalido = false;
    } else {
      camponombre.classList.remove("is-invalid");
    }

    if (!campodesc.value || !descReg.test(campodesc.value)) {
      campodesc.classList.add("is-invalid");
      esvalido = false;
    } else {
      campodesc.classList.remove("is-invalid");
    }

    if (!campoprecio.value) {
      campoprecio.classList.add("is-invalid");
      esvalido = false;
    } else {
      campoprecio.classList.remove("is-invalid");
    }

    if (!campoimagen.files[0] || !tipospermi.includes(campoimagen.files[0].type)) {
      campoimagen.classList.add("is-invalid");
      esvalido = false;
    } else {
      campoimagen.classList.remove("is-invalid");
    }

    if (esvalido) {
      const fichero = campoimagen.files[0];

      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      img.src = imgPreview.src;
      img.classList.add("card-img-top");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = camponombre.value;

      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.textContent = campodesc.value;

      cardBody.append(cardTitle, cardText);
      card.append(img, cardBody);
      campocarg.appendChild(card);

      formulario.reset();
      imgPreview.src = "";
    }
  });

  // Previsualización de imagen usando FileReader
  campoimagen.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        imgPreview.src = e.target.result;
      };
    } else {
      imgPreview.src = "";
    }
  });
});
