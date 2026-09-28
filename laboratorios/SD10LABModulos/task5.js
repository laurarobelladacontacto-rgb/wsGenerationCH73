//LAB SD-10 28/09/2026 LAURA ELVIA ROBELLADA LÓPEZ
/*Tarea 5 - Aprobado o no aprobado
Crea y exporta rubricPassFail. Si el puntaje es mayor o igual a 5, devuelve "Pass"; si no, devuelve "Fail".*/


export function rubricPassFail(score) {
  if (Number(score) >= 5) {
    return "Pass";
  } else {
    return "Fail";
  }
}

/*Si la calificación es mayor o igual a 5 devuelve "Pass", de lo contrario devuelve "Fail". Usamos Number(score) para asegurar la comparación numérica*/