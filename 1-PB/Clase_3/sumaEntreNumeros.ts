import * as rls from 'readline-sync';

let primerNum: number = rls.questionInt("Ingrese el primer número: ");
let segundoNum: number = rls.questionInt("Ingrese el segundo número: ");
let actual, suma: number;
suma = 0;
for (actual = primerNum; actual <= segundoNum; actual++) {
    suma += actual;
}
console.log("El resultado de la suma es: ", suma);