//PRACTICA LAURA ROBELLADA
//Clase con RO miercoles23/09 practica de for bucles en java script
undefined
//Mostrar numeros del 1-10
undefined
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//mostrar numeros del 10-1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//Mostrar numeros pares del 1-20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  } }

  //Mostrar numeros impares del 1-20
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  } }

  //generar una tabla de multiplicar del 1 al 10

  //opcion VSC
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }}
//mi opcion
let numero = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
//otra opcion
for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  console.log(numero + " x " + i + " = " + resultado);
}



//mostrar fizz en multiplos de 3

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }}

  //para 20 numeros

  for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}