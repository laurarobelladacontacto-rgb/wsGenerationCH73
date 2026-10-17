//id "container"
const container = document.getElementById("container");

// clase "second"
const secondItems = document.querySelectorAll(".second");

//  clase "third" que está dentro del ol
const thirdOlItem = document.querySelector("ol .third");

console.log(container);
console.log(secondItems);
console.log(thirdOlItem);

// Seleccionamos el ul y el footer ANTES de cambiar el contenido de container
const list = document.querySelector("ul");
const footer = document.querySelector(".footer");

// Dar el texto "Hello!" a la sección container
container.textContent = "Hello!";

// Agregar la clase "main" al footer
footer.classList.add("main");
console.log(footer.className);

// Quitar la clase "main" del footer
footer.classList.remove("main");
console.log(footer.className);

// Crear un li nuevo, darle texto y añadirlo al ul
const newItem = document.createElement("li");
newItem.textContent = "four";
list.appendChild(newItem);