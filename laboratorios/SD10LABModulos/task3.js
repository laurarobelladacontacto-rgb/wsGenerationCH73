//LAB SD-10 28/09/2026 LAURA ELVIA ROBELLADA LÓPEZ
/*Tarea 3 - Cálculo de edad
Crea y exporta una función llamada ageCalculator que reciba año, mes y día y devuelva la edad calculada.*/



export function ageCalculator(year, month, day) { //usamos el nombre exacto de las instrucciones y recibe los datos necesarios para calcular la fecha de nacimiento

    let today = new Date (); //crear un objeto que obtiene fecha

    //obtener la fecha de hoy AÑO, MES.DIA
    let currentYear = today.getFullYear();
    let age = currentYear - Number(year); //resta al año actual el año de nacimiento

   return age; 

}
