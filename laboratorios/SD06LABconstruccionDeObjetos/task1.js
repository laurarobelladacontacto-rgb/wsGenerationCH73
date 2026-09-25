//LAB SD-06 CONSTRUCCION DE OBJETOS LAURA ROBELLADA
/*Tarea 1: Para esta tarea, se te ha presentado un constructor para un objeto Mail (Correo).
Modifique el código de modo que el asunto sea la palabra "hello" (hola) y el mensaje sea la palabra "world" (mundo).
La salida ya ha sido definida. Solo necesita modificar el código en la línea 8.*/


function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  
  const newMail = new Mail( "hello", "world" );
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)