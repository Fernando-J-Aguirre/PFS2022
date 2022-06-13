// Hacer la suma de dos arreglos y dejarlo en
// otro arreglo
// La dimensión de los arreglos es solicitada al
// usuario
// Los dos arreglos son cargados al azar

import * as rls from 'readline-sync';

let arreglo1: number[] = new Array(rls.questionInt("Ingrese dimension del arreglo 1: "));
let arreglo2: number[] = new Array(rls.questionInt("Ingrese dimension del arreglo 2: "));


function cargarArregloRandom(vector: number[]) {
    for (let i = 0; i < vector.length; i++) {
        //vector[i] = Math.floor(Math.random() * 50);
        vector[i] = numeroAleatorio(1, 10);
    }
}
// function cargarArregloManual(vector: number[]) {
//     for (let i = 0; i < vector.length; i++) {
//         vector[i] = rls.questionInt(`Ingrese numero en posicion ${i}: `);
//     }
// }





function numeroAleatorio(minimo: number, maximo: number) {
    return Math.floor(Math.random() * (maximo - minimo) + minimo);
}


cargarArregloRandom(arreglo1);
console.log(arreglo1);
cargarArregloRandom(arreglo2);
console.log(arreglo2);


// function sumarArreglos(arreglo1: number[], arreglo2: number[]): number[] {
//     let dimension: number = 0;
//     if (arreglo1.length > arreglo2.length) {
//         dimension = arreglo1.length;
//     } else {
//         dimension = arreglo2.length;
//     }
//     let suma: number[] = new Array(dimension);
//     for (let i = 0; i < dimension; i++) {
//         suma[i] = arreglo1[i] + arreglo2[i];
//     }
//     return suma;
// }

let dimension: number = 0;
if (arreglo1.length > arreglo2.length) {
    dimension = arreglo1.length;
} else {
    dimension = arreglo2.length;
}
let suma: number[] = new Array(dimension);

function sumarArreglos(arreglo1: number[], arreglo2: number[], suma: number[]) {
    for (let i = 0; i < arreglo1.length; i++) {
        suma[i] = arreglo1[i] + arreglo2[i];
    }
    console.log(suma);
}
console.log(sumarArreglos(arreglo1, arreglo2, suma))