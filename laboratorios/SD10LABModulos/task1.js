//LAB SD-10 28/09/2026 LAURA ELVIA ROBELLADA LÓPEZ
//Calcular el costo de una transacción con cuota fija de $3 y 1% de interés.
/*Tarea 1 - Costo de transacción
María quiere calcular cuánto debe pagar por una transacción. Cada operación tiene una cuota fija de $3 y un interés de 1% (0.01). Crea y exporta una función llamada costCalculator que reciba un número y devuelva el total a pagar.*/



export function costCalculator(amount) {
  let interest = amount * 0.01; // sacar el 1%
  let total = Number(amount) + 3 + interest; // suma el interés y la cuota fija con el total
  return total; // da el resultado final
}
