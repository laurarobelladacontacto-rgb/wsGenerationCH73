// Refer to Task 4 in your Instructions to complete this task
//Lab Tarea4 Laura Robellada

// Tarea 4: Múltiplos de 3 (Fizz), 5 (Buzz) y 7 (Woof) se reemplaza cada sétimo múltiplo por la palabra correspondiente. Si es múltiplo de más de uno, se concatenan las palabras. Si no es múltiplo de ninguno, se imprime el número.

for (let i = 1; i <= 105; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
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