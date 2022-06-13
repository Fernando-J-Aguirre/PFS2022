import * as rls from 'readline-sync';

function dibujarGuiones(cantidad: number) {
    let i: number;
    let linea: string = "";
    for (i = 1; i <= cantidad; i++) {
        linea += "-";
    }
    return linea;
}

function calcularResultado(num1: number, num2: number, opcionMenu: number): number {
    let resultadoFun: number;
    if (opcionMenu == 1) {
        resultadoFun = num1 + num2;
    } else if (opcionMenu == 2) {
        resultadoFun = num1 - num2;
    }
    return resultadoFun;
}

let num1: number = rls.questionInt("Ingrese primer numero: ");
let num2: number = rls.questionInt("Ingrese segundo numero: ");
let opcionMenu: number = rls.questionInt("1 para sumar, 2 para restar: ");
let resultado = calcularResultado(num1, num2, opcionMenu);

console.log(dibujarGuiones(80));
console.log("El resultado es: ", resultado);
console.log(dibujarGuiones(80));