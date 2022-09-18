import * as rls from 'readline-sync';

let filas: number = 20;
let butacas: number = 3;

let colectivo: number[][] = crearMatriz(filas, butacas);

function crearMatriz(filas: number, butacas: number): number[][] {
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

inicializarMatriz(colectivo)

let filaUsuario: number = rls.questionInt('Ingrese numero de fila entre 1 y 20: ');
while (filaUsuario < 1 || filaUsuario > 20) {
    filaUsuario = rls.questionInt('FILA INCORRECTA - Ingrese numero de fila: ');
}

let butacaUsuario: number = rls.questionInt('Ingrese numero de butaca entre 1 y 3: ');
while (butacaUsuario < 1 || butacaUsuario > 3) {
    butacaUsuario = rls.questionInt('BUTACA INCORRECTA - Ingrese numero de butaca: ');
}

let pasaje: string = rls.question(`¿Quiere (R)eservar o (C)omprar pasaje?. En caso de reserva presione la letra: "R", en caso de compra: "C": `);

while (pasaje != "r" && pasaje != "c") {
    pasaje = rls.question(`¿Quiere (R)eservar o (C)omprar pasaje? : `)
}

if (pasaje == "r") {
    colectivo[filaUsuario - 1][butacaUsuario - 1] = 2;
} else {
    colectivo[filaUsuario - 1][butacaUsuario - 1] = 1;
}

function mostrarMatriz(matriz: number[][]) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(`fila ${i + 1} - Butaca ${matriz[i]}`);
    }
}

mostrarMatriz(colectivo);