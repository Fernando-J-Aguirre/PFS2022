import * as rls from 'readline-sync';

let numEntero: number = rls.questionInt("Ingrese numero entero: ");
let resultado = contarDivisores(numEntero);


function esMultiplo(num1: number, num2: number): boolean {
    return ((num1 % num2) == 0)
}

function contarDivisores(numEntero: number): number {
    let cantidad: number = 0;
    let divisor: number;
    for (divisor = 1; divisor <= numEntero; divisor++) {
        if (esMultiplo(numEntero, divisor)) {
            cantidad ++;
        }
    }
    return cantidad;
}

console.log("Cantidad de divisores: ", resultado);
