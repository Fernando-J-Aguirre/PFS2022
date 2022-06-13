import * as rls from 'readline-sync';

let dimension: number = rls.questionInt("Ingrese dimension de arreglo: ");

let arregloA: number[] = new Array(dimension);
let arregloB: number[] = new Array(dimension);

function calcularProductoEscalar(v1: number[], v2: number[]): number {
    let producto: number = 0;
    for (let i = 0; i < v1.length; i++) {
        producto = (v1[i] * v2[i]) + producto;
    }
    return producto;
}

function rellenarArregloRandom(v1: number[]) {
    for (let i = 0; i < v1.length; i++) {
        v1[i] = Math.floor(Math.random() * 5);
    }
}
rellenarArregloRandom(arregloA);
console.log(`Los elementos del Arreglo A son: ${arregloA}`);
rellenarArregloRandom(arregloB);
console.log(`Los elementos del Arreglo B son: ${arregloB}`);

console.log(`El producto escalar de los arreglos es: ${calcularProductoEscalar(arregloA, arregloB)}`);


