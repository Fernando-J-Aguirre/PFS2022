import * as rls from 'readline-sync';

let dimension: number = rls.questionInt("Ingrese la dimension deseada del arreglo: ");
let arreglo: number[] = new Array(dimension);
let indice: number;

for (indice = 0; indice < dimension; indice++) {
    arreglo[indice] = rls.questionInt(`Ingrese el numero deseado en la posicion ${indice}: `);
}
console.log(`El arreglo es= ${arreglo}`);

let cadena: string = "";
for (indice = dimension - 1; indice >= 0; indice--) {
    cadena += arreglo[indice] + " ";
}
console.log(`El arreglo invertido es= ${cadena}`);
