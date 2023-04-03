// Seleccionar el elemento body
const imagenDePortada = document.getElementById("ImagenPortada");
// Definir una lista de imágenes de fondo
const backgrounds = [
    "Mier.png",
    "Mier2.png",
    "Mier3.png"
];
// Definir un índice de imagen actual
let currentBackground = 0;
let imageName = "url('" + backgrounds[currentBackground] + "')";
// Establecer la primera imagen de fondo
imagenDePortada.style.backgroundImage = imageName;
imagenDePortada.style.animation = "zoom-in 10s infinite alternate";
// Función para cambiar la imagen de fondo
function changeBackground() {
    // Incrementar el índice de imagen actual
    currentBackground++;
    // Reiniciar el índice si se ha llegado al final de la lista
    if (currentBackground === backgrounds.length) currentBackground = 0;
    // Establecer la nueva imagen de fondo
    imagenDePortada.style.backgroundImage = "url('" + backgrounds[currentBackground] + "')";
    // Establecer una animación de zoom
    imagenDePortada.style.animation = "zoom-in 10s infinite alternate";
}
// Llamar a la función de cambio de imagen cada 5 segundos
setInterval(changeBackground, 5000);

//# sourceMappingURL=index.b6ee5540.js.map
