import * as rls from 'readline-sync';

// let arr1: number[] = new Array(6);
// let arr2: number[] = new Array(6);
// let vSuma: number[] = new Array(6);

// function cargarArreglo(v: number[]) {
//     for (let i = 0; i < v.length; i++) {
//         v[i] = rls.questionFloat(`Ingrese el numero que desea en la posicion ${i}: `);        
//     }
// }

// function sumarArreglos(v1: number[], v2: number[], vSuma: number[]): number[] {
//     for (let i = 0; i < 6; i++) {
//         vSuma[i] = v1[i] + v2[i];
//     }
//     return vSuma;
// }

// console.log('Por favor, cargue los numeros del primer arreglo');
// cargarArreglo(arr1);
// console.log('Por favor, cargue los numeros del segundo arreglo');
// cargarArreglo(arr2);

// let resultado: number[] = sumarArreglos(arr1, arr2, vSuma);

// console.log(`La suma de cada una de las posiciones de los dos arreglos es la siguiente: ${resultado}`);



// let arr1: number[] = new Array(6);
// let arr2: number[] = new Array(6);
// let vSuma: number[] = new Array(6);

let arr1: number[] = new Array(rls.questionInt('Ingrese dimension del arreglo 1: '));
let arr2: number[] = new Array(rls.questionInt('Ingrese dimension del arreglo 2: '));
let vSuma: number[] = new Array();



function numAleatorio(minimo: number, maximo: number): number {
    return Math.floor((Math.random() * (maximo - minimo) + minimo));
}

function cargarArregloRandom(v: number[]) {
    for (let i = 0; i < v.length; i++) {
        v[i] = numAleatorio(2, 10);
        console.log(`el numero en la posicion ${i} es ${v[i]}`);
    }
}

console.log('Arreglo numero 1');
cargarArregloRandom(arr1);
console.log('Arreglo numero 2');
cargarArregloRandom(arr2);

function sumarArreglos(v1: number[], v2: number[], vNuevo: number[]): number[] {
    if (v1.length >= v2.length) {
        vNuevo.length = v1.length;
    } else {
        vNuevo.length = v2.length;
    }
    // console.log(`vNuevo.length = ${vNuevo.length}`);
    for (let i = 0; i < vNuevo.length; i++) {
        vNuevo[i] = v1[i] + v2[i];
        if (v1[i] == undefined) {
            vNuevo[i] = v2[i];
        } else if (v2[i] == undefined) {
            vNuevo[i] = v1[i];
        }
        // console.log(`vNuevo[i] ${vNuevo[i]} = v1[i] ${v1[i]} + v2[i] ${v2[i]}`);
    }
    return vNuevo;
}

sumarArreglos(arr1, arr2, vSuma)

console.log(`La suma de los dos arreglos es: ${vSuma}`);
