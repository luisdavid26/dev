const formPersona = document.getElementById("formPersona");
const imgPreview = document.getElementById("imgPreview");
const tbody = document.querySelector("#personas > tbody");

// Descomentar para modo: cloneNode
// const userTemplate = document.getElementById("userTemplate");

/**
 * Evento: Envío formulario
 * Creando elementos y añadiéndolos al DOM
 */
formPersona.addEventListener("submit", (e) => {
  e.preventDefault();
  const hobbies = Array.from(formPersona.hobbies)
    .filter((i) => i.checked)
    .map((i) => i.value);
  // console.log(hobbies);
  const fichero = formPersona.avatar.files[0];

  const tr = document.createElement("tr");
  // Info Avatar
  const tdInfoAvatar = document.createElement("td");
  tdInfoAvatar.textContent = `Archivo: ${fichero.name},
    tipo: ${fichero.type}, tamaño: ${fichero.size}bytes`;
  // Avatar Image
  const tdAvatar = document.createElement("td");
  const avatar = document.createElement("img");
  avatar.src = imgPreview.src;
  tdAvatar.append(avatar);
  // Nombre
  const tdNombre = document.createElement("td");
  tdNombre.textContent = formPersona.nombre.value;
  // Hobbies
  const tdHobbies = document.createElement("td");
  tdHobbies.textContent = hobbies.join(", ");
  // Borrar
  const tdBorrar = document.createElement("td");
  const borrar = document.createElement("button");
  borrar.textContent = "Borrar";
  tdBorrar.append(borrar);

  tr.append(tdInfoAvatar, tdAvatar, tdNombre, tdHobbies, tdBorrar);

  borrar.addEventListener("click", e => tr.remove());

  tbody.append(tr);

  formPersona.reset();
  imgPreview.src = "";
});

formPersona.avatar.addEventListener("change", (event) => {
  let file = formPersona.avatar.files[0];
  let reader = new FileReader();
  if (file) reader.readAsDataURL(file); // Serializar en base64
  reader.addEventListener("load", (e) => {
    // Serialización terminada
    imgPreview.src = reader.result; // Datos en Base64
  });
});


//Evento: Envío formulario
//Utilizando -- cloneNode --

formPersona.addEventListener("submit", (e) => {
  e.preventDefault();
  const hobbies = Array.from(formPersona.hobbies)
    .filter((i) => i.checked)
    .map((i) => i.value);
  const fichero = formPersona.avatar.files[0]
  const userHTML = userTemplate.content.cloneNode(true);
  const tr = userHTML.firstElementChil
  tr.children[0].textContent = `Archivo: ${fichero.name},
    tipo: ${fichero.type}, tamaño: ${fichero.size}bytes`;
  tr.querySelector("img").src = imgPreview.src;
  tr.children[2].textContent = formPersona.nombre.value;
  tr.children[3].textContent = hobbies;
  tr.querySelector("button").addEventListener("click", e => tr.remove(),
  tbody.append(tr),
  formPersona.reset());
  imgPreview.src = "";
});