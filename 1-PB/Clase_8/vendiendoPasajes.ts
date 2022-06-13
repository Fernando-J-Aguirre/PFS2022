import * as rls from 'readline-sync';

let filas: number = 20;
let butacas: number = 3;

let colectivo: number[][] = crearMatriz(filas, butacas);

function crearMatriz(filas: number, butacas: number) {
    let matriz: number[][] = new Array(filas);
    for (let i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(butacas);
    }
    return matriz;
}
function inicializarMatriz(matriz: number[][]) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] = 0;
        }
    }
}
inicializarMatriz(colectivo);


let comprarAsientoX: number = rls.questionInt("Ingrese numero de fila que desea: ");
while (comprarAsientoX < 1 || comprarAsientoX > 20) {
    comprarAsientoX = rls.questionInt("Incorrecto, ingrese numero de fila que desea: ");
}
let comprarAsientoY: number = rls.questionInt("Ingrese numero de butaca que desea: ");
while (comprarAsientoY < 1 || comprarAsientoY > 3) {
    comprarAsientoY = rls.questionInt("Incorrecto, ingrese numero de butaca que desea: ");
}

colectivo[comprarAsientoX - 1][comprarAsientoY - 1] = 1;

function mostrarMatriz(matriz: number[][]) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(`Fila ${i + 1} \nButaca ${matriz[i]}`);
    }
}
mostrarMatriz(colectivo);
