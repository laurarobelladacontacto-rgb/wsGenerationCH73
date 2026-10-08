// 1. Modificar el primer "Hola Mundo" para que diga "Adiós"
const primerEncabezado = document.getElementById("red");
primerEncabezado.textContent = "Adiós";

// 2. Cambiar el color de la fuente de un encabezado a naranja
const encabezadoNaranja = document.querySelector("h2");
encabezadoNaranja.style.color = "orange";

// 3. Añadir un encabezado interactivo que cambie su color a marrón al hacer clic
const todosLosH2 = document.querySelectorAll("h2");
const encabezadoClic = todosLosH2[todosLosH2.length - 1];

encabezadoClic.addEventListener("click", function () {
  encabezadoClic.style.color = "brown";
});