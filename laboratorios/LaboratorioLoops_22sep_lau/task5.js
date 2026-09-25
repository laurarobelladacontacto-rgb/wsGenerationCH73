// Refer to Task 5 in your Instructions to complete this task

//Tarea 5 lab miercoles 23/09

//Le pedimos al usuario cuántas líneas quiere e imprimimos esa lista con el bucle for.

//Le pedimos al usuario un número específico y mostramos su resultado directo.


//require('prompt-sync'): Carga un módulo especial de Node.js que nos permite pedirle información al usuario directamente desde la terminal.

//const prompt: Guarda esa función en la constante llamada prompt para usarla más adelante.

//prompt(): Llama a la función prompt para que se ejecute y nos permita pedirle información al usuario.
const prompt = require('prompt-sync')();

// Pedimos al usuario cuántas líneas quiere imprimir:

//const limite: Guarda ese número.
//Number(...): Convierte lo que el usuario escribió (que entra como texto) a un número entero. Si escribe "15", lo transforma al número 15.
//prompt("..."): Muestra el mensaje en la pantalla y espera a que el usuario escriba algo.

const limite = Number(prompt("¿Cuántas líneas deseas generar?: "));

// Bucle FOR para imprimir la lista de números del 1 al límite especificado por el usuario.bucle for. Inicia en 1 (let i = 1) y se ejecutará sumando de uno en uno (i++) hasta que i llegue al número que guardamos en limite (i <= limite).

for (let i = 1; i <= limite; i++) {
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

//evalua la variable i 
// Primero revisa si es múltiplo de los tres números (3, 5 y 7).
//Si no, revisa si es múltiplo de alguna combinación de dos números.
//Si no, revisa los números individuales.
//Si no cumple nada, imprime el número tal cual.

//pedir un numero en especifico
//Con prompt le preguntamos al usuario por un número concreto, lo convertimos a número con Number() y lo guardamos en la variable numeroEspecifico.

const numeroEspecifico = Number(prompt("Ingresa un número específico para consultar: "));

//Como no queremos imprimir una lista del 1 al N ni repetir nada, no usamos un bucle for. En su lugar, pasamos la variable numeroEspecifico una sola vez a través de la cadena de if / else if / else.

if (numeroEspecifico % 3 === 0 && numeroEspecifico % 5 === 0 && numeroEspecifico % 7 === 0) {
    console.log("FizzBuzzWoof");
} else if (numeroEspecifico % 3 === 0 && numeroEspecifico % 5 === 0) {
    console.log("FizzBuzz");
} else if (numeroEspecifico % 3 === 0 && numeroEspecifico % 7 === 0) {
    console.log("FizzWoof");
} else if (numeroEspecifico % 5 === 0 && numeroEspecifico % 7 === 0) {
    console.log("BuzzWoof");
} else if (numeroEspecifico % 3 === 0) {
    console.log("Fizz");
} else if (numeroEspecifico % 5 === 0) {
    console.log("Buzz");
} else if (numeroEspecifico % 7 === 0) {
    console.log("Woof");
} else {
    console.log(numeroEspecifico);
}

//Evalúa si numeroEspecifico es divisible entre 3, 5 y 7 al mismo tiempo (ej. 105  "FizzBuzzWoof").   Si no, evalúa si es divisible entre las combinaciones de dos números (ej. 15  "FizzBuzz", 21 "FizzWoof").   Si no, evalúa los números individuales (3  "Fizz", 5  "Buzz", 7  "Woof").   Si no cumple ninguna, simplemente imprime el número tal cual.   