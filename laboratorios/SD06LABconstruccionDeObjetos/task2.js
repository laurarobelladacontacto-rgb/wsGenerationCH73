//LAB SD-06 CONSTRUCCION DE OBJETOS LAURA ROBELLADA
/*Tarea 2: Para esta tarea, se te ha presentado un constructor para un objeto Mail (Correo).
●Modifique el código para que se le solicite al usuario ingresar su propio asunto y mensaje, en ese orden.
○La salida ya ha sido definida. Solo necesitas modificar el código en la línea 8 y agregar los avisos para que el usuario ingrese el asunto y el mensaje.*/

//importación de la libreria de entrada de datos require("prompt-sync"): Carga el paquete o módulo externo llamado prompt-sync, el cual permite pausar la ejecución en la terminal para pedir datos al usuario.
const prompt = require("prompt-sync")();

function Mail (subj, msg) {
    this.subject = subj;
    this.message = msg;
  }
  
  // Type your code below this line!
  
    const newMail = new Mail(prompt("Asunto:"), prompt("Mensaje:"));

  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message);