import * as rls from 'readline-sync';

let numDeseados: number[] = new Array(5);
let i: number;
for (i = 0; i < 5; i++) {
    numDeseados[i] = rls.questionFloat("Ingrese un numero:");
}
console.log("Los numeros que usted ingreso son: " + numDeseados);
