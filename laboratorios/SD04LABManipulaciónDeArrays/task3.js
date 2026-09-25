//LAB SD_04 25/09 LAURA ROBELLADA
//Tarea 3: Utilice el método arr.splice() para insertar el número faltante en el array dado en la posición correcta.

const arr = [1,2,3,4,5,6,7,9,10,11,12]
// Type your code below this line!

    arr.splice(7,0,8);
//(primer valor): Es el índice o posición donde queremos meter el número (recordando que en programación contamos desde 0).
// (segundo valor): Es la cantidad de elementos a eliminar. Ponemos 0 porque no queremos borrar nada, solo agregar.   
// (tercer valor): Es el número que vamos a insertar.   

// Type your code above this line!
arr.forEach(element => console.log(element))