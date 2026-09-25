//LAB SD_04 25/09 LAURA ROBELLADA
/*Este programa de JavaScript hará lo siguiente:
Declarar una variable con el nombre arr.
Asignar un array vacío.
Imprimir el array en la consola, un elemento por línea.*/

//Tarea 1: Utilice el método arr.push() para llenar un array vacío con los números del 1 al 20, en orden.

const arr = []
// Escriba su código debajo de esta línea

    for (let i = 1; i <= 20; i++) {
        arr.push(i);
        }

// Escriba su código por encima de esta línea        
arr.forEach(element => console.log(element))

