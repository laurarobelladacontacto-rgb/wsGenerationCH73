//LAB SD-10 28/09/2026 LAURA ELVIA ROBELLADA LÓPEZ
/*Tarea 4 - Nombre y edad
Crea y exporta una clase llamada FriendAge. Debe recibir name, year, month y day. Además, debe tener un método público llamado returnAge() que devuelva un texto con el formato: "<name> is <age> today!"*/

export class FriendAge { //clase para crear estructura del objeto
  constructor(name, year, month, day) { // funcion especial que recibe las variables que creamos 
    this.name = name; //this para guardar los valores en el objeto
    this.year = year;
    this.month = month;
    this.day = day;
  }

  returnAge() { //funcion devvuelve edad
    let today = new Date(); //fecha de hoy día y año
    let currentYear = today.getFullYear();

    let age = currentYear - Number(this.year); //año actual menos su año de nacimiento

    return this.name + " is " + age + " today!"; 
    //le da su edad 
  }
}