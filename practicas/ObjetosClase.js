//Practica Objetos Clase JS 
//25/09 Laura Robellada

// 1. Creamos la clase
//Definición de la clase con su constructor y método
class Producto {
    constructor(nombre, precio, disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }

    // Método sencillo para imprimir la información

    mostrarInfo() {
        console.log(this.nombre, this.precio, this.disponible);
    }
}

// 2. Creamos los 3 productos usando "new"Creación de las 3 instancias con 'new'
const p1 = new Producto("Labial", 150, true);
const p2 = new Producto("Rímel", 180, false);
const p3 = new Producto("Base", 250, true);

// 3. Imprimimos la información de cada uno
// Impresión en consola usando el método mostrarInfo()
p1.mostrarInfo();
p2.mostrarInfo();
p3.mostrarInfo();


//Crear la clase y constructor: Se define la palabra clave class Producto y un constructor que recibe los 3 parámetros (nombre, precio, disponible) para asignarlos a las propiedades del objeto con this.

//Agregar el método: Se incluye mostrarInfo() dentro de la clase para mostrar las propiedades en la consola.

//Instanciar con new: Se reemplazan los objetos literales ({ ... }) por llamados al constructor usando new Producto(...).

//Ejecutar el método: Se llama a .mostrarInfo() para cada objeto (p1, p2, p3).