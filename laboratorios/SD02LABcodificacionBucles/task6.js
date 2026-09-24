// Refer to Task 6 in your Instructions to complete this task
// tarea 6 23/09 laura robellada

//el objetivo es cambiar la forma en que mostramos los datos: en lugar de ir imprimiendo línea por línea en la consola con console.log() a cada vuelta del bucle, vamos a ir guardando cada resultado dentro de un arreglo (array) y al final imprimimos la lista completa.

// Tarea 6: Asignar los resultados de la secuencia a un array



const resultados = [];

  for (let i = 1; i <= 105; i++) {
      if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
          resultados.push("FizzBuzzWoof");
      } else if (i % 3 === 0 && i % 5 === 0) {
          resultados.push("FizzBuzz");
      } else if (i % 3 === 0 && i % 7 === 0) {
          resultados.push("FizzWoof");
      } else if (i % 5 === 0 && i % 7 === 0) {
          resultados.push("BuzzWoof");
      } else if (i % 3 === 0) {
          resultados.push("Fizz");
      } else if (i % 5 === 0) {
          resultados.push("Buzz");
      } else if (i % 7 === 0) {
          resultados.push("Woof");
      } else {
          resultados.push(i);
      }
  }

// Imprimimos el arreglo al finalizar el bucle
console.log(resultados);
