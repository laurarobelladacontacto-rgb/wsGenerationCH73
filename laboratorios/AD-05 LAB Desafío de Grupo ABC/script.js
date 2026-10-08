// Los tres colores permitidos
const colores = ["green", "blue", "red"];

// Devuelve un color al azar de la lista
function colorAleatorio() {
    const indice = Math.floor(Math.random() * colores.length);
    return colores[indice];
}

// Cambia el color del elemento al que se le hizo clic
function cambiarColor(evento) {
    evento.target.style.color = colorAleatorio();
}

// Aplica un color aleatorio a cada h5 al cargar la página
const titulos = document.querySelectorAll("h5");

titulos.forEach(function (titulo) {
    titulo.style.color = colorAleatorio();
    titulo.addEventListener("click", cambiarColor);
});