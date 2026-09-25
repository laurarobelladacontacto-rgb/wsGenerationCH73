//Practica 25/09 Laura Robellada
//Construir un pequeño catálogo orientado a objetos.
//REQUISITOS:
/*Clase Producto: debe incluir las propiedades nombre, precio y disponible.  
Método mostrarInfo(): para imprimir los datos del producto.  
Método cambiarDisponibilidad(): para modificar el estado de disponibilidad del producto.   
Crear instancias: generar al menos 4 productos distintos. */

//1. Crear la estructura básica de la clase
//(plantilla base para crear objetos del mismo tipo)

class Producto {
    //lógica del objeto, agregamos el constructor y las propiedades
    //Recibe los valores y los guarda en el propio objeto usando la palabra this
    constructor(nombre, precio,disponible){
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;       
    }

//this.nombre: Significa "guarda el valor recibido en la propiedad nombre de este objeto específico".

//2. Agregamos los métodos (acciones)
//mostrarInfo(): Muestra los datos en la consola de forma sencilla.

//cambiarDisponibilidad(): Cambia el valor booleano al opuesto. Usamos el operador de negación (!), el cual convierte true a false y viceversa.
    mostrarInfo() {
        console.log(this.nombre, this.precio, this.disponible);
         }

    cambiarDisponibilidad() {
        this.disponible = !this.disponible;
        }
}

//3. para usar la plantilla usamos variables con palabra reservada (new), pasamos los valores en el orden exacto.

    const p1= new Producto("Labial", 150, true);
    const p2= new Producto("Rímel", 180, false);
    const p3= new Producto("Base", 250, true);
    const p4= new Producto("Polvo Compacto", 200, true);

//4.mandar a llamar los métodos

p1.mostrarInfo();
p2.mostrarInfo();
p3.mostrarInfo();
p4.mostrarInfo();

// Cambiamos la disponibilidad del producto 2 (pasará de false a true)
p2.cambiarDisponibilidad();
// Comprobamos el cambio 
p2.mostrarInfo();