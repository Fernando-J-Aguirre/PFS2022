import * as rls from 'readline-sync';

// let arreglo1: number[] = new Array(6);
// let arreglo2: number[] = new Array(6);
// let sumaArreglos: number[] = new Array(6);
// let indice: number;

// for (indice = 0; indice < 6; indice++) {
//     arreglo1[indice] = rls.questionInt(`Ingrese el numero que desea en la posicion ${indice}: `);
// }
// for (indice = 0; indice < 6; indice++) {
//     arreglo2[indice] = rls.questionInt(`Ingrese el numero que desea en la posicion ${indice}: `);
// }
// for (indice = 0; indice < 6; indice++) {
//     sumaArreglos[indice] = arreglo1[indice] + arreglo2[indice];
//     console.log(`La suma del par de numeros en la posicion ${indice} es= ${sumaArreglos[indice]}`);    
// }


let vector1: number[] = new Array(6);
let vector2: number[] = new Array(6);

let vSuma: number[] = new Array(6);


function cargarVector(vector: number[], cantidad: number) {
    let indice: number;
    for (indice = 0; indice < cantidad; indice++) {
        vector[indice] = rls.questionInt(`Ingrese el numero que desea en la posicion ${indice}: `);
    }
}

function mostrarVector(vector: number[], cantidad:number) {
    let indice: number;
    for (indice = 0; indice < cantidad; indice++) {
        console.log(`Posicion ${indice} es: ${vector[indice]}`);        
    }
}


function sumarVector(vector1: number[], vector2: number[], vSuma: number[], cantidad: number) {
    let indice: number;
    for (indice = 0; indice < cantidad; indice++) {
        vSuma[indice] = vector1[indice] + vector2[indice];
    }
}

console.log("Cargando vector 1");
cargarVector(vector1, 6);
console.log("Cargando vector 2");
cargarVector(vector2, 6);

sumarVector(vector1, vector2, vSuma, 6);
console.log("Valores de vector 1");
mostrarVector(vector1, 6);
console.log("Valores de vector 2");
mostrarVector(vector2, 6);
console.log("Valores de vSuma");
mostrarVector(vSuma, 6);




