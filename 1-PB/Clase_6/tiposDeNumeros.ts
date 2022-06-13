import * as rls from 'readline-sync';

let cantidad: number = rls.questionInt("Ingrese cantidad de numeros: ");
let arreglo: number[] = new Array(cantidad);
let indice: number;

for (indice = 0; indice < cantidad; indice++) {
    arreglo[indice] = rls.questionInt(`Ingrese numero deseado en posicion ${indice}: `);
}

let positivos: number = 0;
let negativos: number = 0;
let ceros: number = 0;

for (indice = 0; indice < cantidad; indice++) {
    if (arreglo[indice] > 0) {
        positivos++;
    } else if (arreglo[indice] < 0) {
        negativos++;
    } else {
        ceros++;
    }
}

console.log(`Su arreglo es: ${arreglo}`);
console.log(`Hay ${positivos} positivos, ${negativos} negativos y ${ceros} ceros`);