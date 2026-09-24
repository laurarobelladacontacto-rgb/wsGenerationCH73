// Refer to Task 2 in your Instructions to complete this task
//LAB_TAREA 2_LAURAROBELLADA

// Tarea 2: Reemplazar múltiplos de 3 por "Fizz"

for (let i = 1; i <= 105; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

//cambiamos el valor de la variable i para que empiece a contar desde 1 y se detenga en 105, y agrego una condicion if para que si el valor de i es divisible entre 3, se imprima "Fizz" en la consola, de lo contrario se imprime el valor actual de i.
// i % 3 === 0: 
// El operador % (módulo) obtiene el residuo de dividir i entre 3. Si el residuo es 0, significa que es múltiplo de 3.   Si es múltiplo de 3, imprime "Fizz". Si no, imprime el número normal.   