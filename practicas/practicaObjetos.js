//PRACTICA OBJETOS
// 1. FUNCIÓN CONSTRUCTORA (EL MOLDE)
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;

  // Método dentro del objeto
  this.mostrarInfo = function() {
    return this.nombre + " cuesta $" + this.precio;
  };
}

// 2. CREACIÓN DE INSTANCIAS CON "new"
const producto1 = new Producto("Labial", 150);
const producto2 = new Producto("Rímel", 180);
const producto3 = new Producto("Base", 250);

// 3. LLAMADA A LOS MÉTODOS E IMPRESIÓN
console.log(producto1.mostrarInfo());
console.log(producto2.mostrarInfo());
console.log(producto3.mostrarInfo());
