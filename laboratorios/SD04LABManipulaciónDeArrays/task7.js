//LAB SD_04 25/09 LAURA ROBELLADA
/*Tarea 7: Una matriz es un array de arrays que representa una cuadrícula con filas y columnas. Use esta tarea para experimentar con matrices.
●¿Puede agregar un solo número a una fila existente?
●¿Puede agregar una fila completamente nueva de números?
●¿Puede eliminar un solo número de una sola fila?
●¿Puede invertir una de las filas sin afectar a las demás?*/

const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
      // 1. Agregar un solo número a una fila existente
    arr[0].push(10);

    // 2. Agregar una fila completamente nueva de números
    arr.push([30, 31, 32]);

    // 3. Eliminar un solo número de una sola fila
    arr[1].splice(0, 1);

    // 4. Invertir una de las filas sin afectar a las demás
    arr[2].reverse();

console.log(arr); 