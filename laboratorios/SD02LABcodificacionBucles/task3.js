// Refer to Task 3 in your Instructions to complete this task
//Lab TAREA 3 LAURA ROBELLADA


// Reemplazar múltiplos de 3 por Fizz, de 5 por Buzz, y de ambos por FizzBuzz, si no cumple con ninguna de las condiciones, imprimir el número.

for (let i = 1; i <= 105; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");  // Si cumple ambas, imprime esto Y SE SALTA EL RESTO.
    } else if (i % 3 === 0) {     // Si solo es de 3, imprime esto y se salta el resto.
        console.log("Fizz");
    } else if (i % 5 === 0) {     // Si solo es de 5, imprime esto.
        console.log("Buzz");
    } else {
        console.log(i);             // Si NO cumplió ninguna de las anteriores, imprime el número.
    }
}

