import * as rls from 'readline-sync';

let dimension: number = rls.questionInt("Ingrese dimension del arreglo: ");
let arreglo: number[] = new Array(dimension);
let indice: number;
let resultado: number = 0;

for (indice = 0; indice < dimension; indice++) {
    arreglo[indice] = rls.questionInt(`Ingrese numero en posicion ${indice}: `);
    resultado += arreglo[indice];
}

console.log(`La suma del arreglo es= ${resultado}`);

