//LAB SD-10 28/09/2026 LAURA ELVIA ROBELLADA LÓPEZ
/*Tarea 6 - Excelente
Crea y exporta rubricExcellent. Si el puntaje es mayor que 8, devuelve "Excellent". Para un puntaje como 8, debe devolver "Pass".
*/

export function rubricExcellent(score) {
    if (Number(score)> 8) {
        return "Excellent";
    }
    else { 
        return "Pass";
    }

}