// Refer to Task 7 in your Instructions to complete this task

// tarea 7 23/09 laura robellada

// Tarea 7: Mapeo de números primos 
// En esta tarea, además de las reglas de Fizz, Buzz y Woof, vamos a agregar una nueva regla: si el número es primo, imprimiremos "Primo" en lugar del número o de cualquier otra palabra.

// 1. Función para saber si un número es primo
function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 2. Bucle para recorrer del 1 al 105 y aplicar las reglas
for (let i = 1; i <= 105; i++) {
    if (esPrimo(i)) {
        console.log("Primo");
    } else if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
        console.log("FizzBuzzWoof");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0 && i % 7 === 0) {
        console.log("FizzWoof");
    } else if (i % 5 === 0 && i % 7 === 0) {
        console.log("BuzzWoof");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 7 === 0) {
        console.log("Woof");
    } else {
        console.log(i);
    }
}

//Prioridad del esPrimo(i) al inicio:
//Pusimos la condición if (esPrimo(i)) en la primera posición. Si un número es primo (como el 3 o el 5), JavaScript le asigna de inmediato la palabra "Primo" y evitalas demás reglas (evitando que imprima "Fizz" o "Buzz").
// Esto asegura que los números primos se identifiquen correctamente y se impriman como "Primo" en lugar de cualquier otra palabra asociada a las reglas de Fizz, Buzz o Woof.
//La función esPrimo:
//Verifica si un número tiene divisores además de 1 y de sí mismo.Si encuentra cualquier división exacta (num % i === 0), determina que no es primo.
 