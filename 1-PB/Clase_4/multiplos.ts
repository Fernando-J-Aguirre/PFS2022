import * as rls from 'readline-sync';

let num1: number = rls.questionInt("Ingrese dividendo: ");
let num2: number = rls.questionInt("Ingrese divisor: ");
let resultado = esMultiplo(num1, num2);


function esMultiplo(num1: number, num2: number): boolean {
    return ((num1 % num2) == 0)
}

console.log("Es multiplo: ", resultado);

