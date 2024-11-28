open("https://lenguajejs.com/", 'Guia de JS', "width=500, height=200, location=no, menubar=no, left=100, top=200");

console.log('La URL de la pagina actual es: ' + window.location.href);

console.log("La informacion del navegador y el sistema es:" + navigator.userAgent);

console.log(screen.width + " - " + screen.height); // Ancho de pantalla y alto (Resolución)
console.log(screen.availWidth + " - " + screen.availHeight); // Excluyendo la barra del S.O.
