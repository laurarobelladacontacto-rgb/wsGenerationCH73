//LAB SD-10 28/09/2026 LAURA ELVIA ROBELLADA LÓPEZ
/*Tarea 7 - Perfecto
Crea y exporta rubricPerfect. Si el puntaje es exactamente 11, devuelve "Perfect". Para un puntaje como 5, debe devolver "Pass"*/


export function rubricPerfect(score) {
    if (Number(score) === 11){
        return "Perfect";

    }

    else {
        return "Pass";
    }

}