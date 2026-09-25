//RETO INTEGRADOR ARRAY OBJETO FUNCION
//23/09/2026 CLASE CON RO

// 1. Array con la lista de nombres
let productos = ["labial", "rimel", "base"];

// 2. Objeto con los detalles de un producto
let producto = {
  nombre: "Labial",
  precio: 150,
  disponible: true
};

// 3. Función para armar el mensaje
function mostrarProducto(nombre, precio) {
  return nombre + " cuesta $" + precio;
}

//Paso 1: Obtener el primer producto del arreglo
//En JavaScript, las posiciones de los arreglos empiezan a contar desde 0.
//El elemento en la posición 0 es "labial".
//Lo guardamos en una variable:

let primerProducto = productos[0];

//Paso 2: Obtener el nombre y precio del objeto
//Para obtener un valor dentro de un objeto, usamos la sintaxis del punto (objeto.propiedad):

let precioProducto = producto.precio;

//Paso 3: Pasar los valores a la función y mostrar el mensaje
//Llamamos a la función mostrarProducto(...) entregándole el nombre del primer producto y el precio que obtuvimos. 
//Finalmente, usamos console.log() para mostrar el resultado en la pantalla.

let mensaje = mostrarProducto(primerProducto, precioProducto);

//imprimimos el mensaje en la consola
console.log(mensaje);

//OTRA FORMA MAS SENCILLA DE HACERLO y mejor práctica es crear un array de objetos, donde cada objeto representa un producto con sus propiedades (nombre, precio, disponible). Luego, podemos acceder a los productos y sus detalles directamente desde el array de objetos.
let productos = [
  { nombre: "labial", precio: 150, disponible: true },
  { nombre: "rimel", precio: 200, disponible: true },
  { nombre: "base", precio: 350, disponible: true }
];

function mostrarProducto(nombre, precio) {
  return nombre + " cuesta $" + precio;
}

let labial = productos[0];
let rimel = productos[1];
let base = productos[2];

console.log(mostrarProducto(labial.nombre, labial.precio));