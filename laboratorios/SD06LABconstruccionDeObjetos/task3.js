//LAB SD-06 CONSTRUCCION DE OBJETOS LAURA ROBELLADA
/*Tarea 3: Para esta tarea, se te ha presentado un constructor para un objeto Mail (Correo). Necesitará definir su propia salida.
●Modifique el código para que se le solicite al usuario ingresar su propio asunto y mensaje, en ese orden.
●Amplíe el constructor para incluir un método printMail() que muestre lo siguiente en la consola:
          <subj>: <msg>
Por ejemplo, si las dos entradas son "hello" y "world", entonces la salida debería ser     "hello: world".*/

const prompt = require("prompt-sync")();

// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg

    // Método printMail() añadido al constructor
    this.printMail = function() {
      console.log(this.subject + ": " + this.message);
    }
    
  }
  
  const newMail = new Mail(prompt("Asunto:"), prompt("Mensaje:"));
  
  // Type your code above this line!
  
  newMail.printMail()