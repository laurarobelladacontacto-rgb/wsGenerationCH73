//LAB SD_04 25/09 LAURA ROBELLADA
//Tarea 4: Utilice el método arr.splice() para eliminar uno de los dos números duplicados en el array dado.



const arr = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,14]

// Type your code below this line!

arr.splice(5,1);

//(primer número): Indica el índice o posición exacta del segundo número 5 que queremos eliminar.
//(segundo número): Indica que solo queremos borrar 1 elemento a partir de esa posición

// Type your code above this line!

arr.forEach(element => console.log(element))