import * as rls from 'readline-sync';

function calcularPotencia(base: number, exponente: number): number {
    return base ** exponente;
}

let base: number = rls.questionInt("Ingrese la base: ");
let exponente: number = rls.questionInt("Ingrese exponente: ");
let resultado = calcularPotencia(base, exponente);

while (exponente < 0){
    console.log("Ingrese un numero mayor o igual a cero");
    exponente = rls.questionInt("Ingrese exponente: ");   
}

if (exponente == 0) {
    resultado = 1;
} else {
    resultado;
}

console.log("El resultado es: ", resultado);


/*función correcta
function calcularPotencia(base:number, exponente: number):number {
    let numero: number = 1;
    for (let i: number = 1; i <= exponente; i++) {
        numero = numero * base;
    }
    return numero;
}
*/