document.addEventListener("DOMContentLoaded", (e) => {
  const formulario = document.getElementById("newEvent");
  const nombre = document.getElementById("name");
  const date = document.getElementById("date");
  const descripcion = document.getElementById("description");
  const precio = document.getElementById("price");
  const imagen = document.getElementById("image");
  const imagenprvw = document.getElementById("imgPreview");
  const campoconteneder = document.getElementById("eventsContainer");
  const tipospermi = ["image/jpeg", "image/png", "image/gif", "image/pg"];
  const Regnombre = /[a-zA-Z\s]+/;
  const Regdesc = /[a-zA-Z0-9]\s/;
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let esvalido = true;
    if (!nombre.value || !Regnombre.test(nombre.value)) {
      nombre.classList.add("is-invalid");
      esvalido = false;
    } else {
      nombre.classList.remove("is-invalid");
    }
    if (!descripcion.value || !Regdesc.test(descripcion.value)) {
      descripcion.classList.add("is-invalid");
      esvalido = false;
    } else {
      descripcion.classList.remove("is-invalid");
    }
    if (!precio.value) {
      precio.classList.add("is-invalid");
      esvalido = false;
    } else {
      precio.classList.remove("is-invalid");
    }
    if (esvalido) {//hacemos la carta

        
      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      img.src = imagenprvw.src;
      img.classList.add("card-img-top");

      const cardbody = document.createElement("div");
      cardbody.classList.add("card-body");

      const cardtitle = document.createElement("h5");
      cardtitle.classList.add("card-title");
      cardtitle.textContent = nombre.value;

      const cardtext = document.createElement("p");
      cardtext.classList.add("card-text");
      cardtext.textContent = descripcion.value;

      cardbody.append(cardtitle, cardtext);
      card.append(img, cardbody);
      campoconteneder.appendChild(card);

      formulario.reset();
      imagenprvw.src = "";

      //otra forma de hacerlo en el examen con innerhtml
      const cardhtml = `
            <div class="card">
          <img class="card-img-top" src="${imagenprvw.src}">
          <div class="card-body">
            <h4 class="card-title">${nombre.value}</h4>
            <p class="card-text">${descripcion.value}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">
                ${date.value}
            <span class="float-right">${precio.value} €</span>
	          </small>
          </div>
        </div>
            `;
            //aqui anyadimos un nueva tarjeta
        campoconteneder.innerHTML+=cardhtml;



    }
  });
});
