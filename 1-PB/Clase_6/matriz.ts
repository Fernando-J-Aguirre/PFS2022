import * as rls from "readline-sync";


// Crear una matriz

let filas: number = rls.questionInt("Indique la cantidad de filas: ");
let columnas: number = rls.questionInt("Indique la cantidad de columnas: ");

let matriz: string[][] = crearMatriz(filas, columnas);
inicializarMatrizAleatorio(matriz);
mostrarMatriz(matriz);

function crearMatriz(filas: number, columnas: number): string[][] {
    let matriz: string[][] = new Array(filas);
    let fila: string[];
    for (let index = 0; index < matriz.length; index++) {
        fila = new Array(columnas);
        matriz[index] = fila;
    }
    return matriz;
}
// Inicializar una matriz
function inicializarMatriz(matriz: string[][]) {
    for (let indexF = 0; indexF < filas; indexF++) {
        for (let indexC = 0; indexC < columnas; indexC++) {
            matriz[indexF][indexC] = " ";
        }
    }
}
// Inicializar una matriz con azar (0 a N)
function inicializarMatrizAleatorio(matriz: string[][]) {
    for (let indexF = 0; indexF < filas; indexF++) {
        for (let indexC = 0; indexC < columnas; indexC++) {
            matriz[indexF][indexC] = aleatorio(50).toString();
        }
    }
}
// Recorrer una matriz
function recorrerMatriz(matriz: string[][]) {
    let fila: number, columna: number;
    for (fila = 0; fila < filas; fila++) {
        for (columna = 0; columna < columnas; columna++) {
            console.log(matriz[fila][columna], " ");
        }
    }
}
// Mostrar matriz
function mostrarMatriz(matriz: string[][]) {
    let linea: string = "";
    for (let indexF = 0; indexF < matriz.length; indexF++) {
        linea += (indexF == 0) ? "" : "\n";
        for (let indexC = 0; indexC < matriz[indexF].length; indexC++) {
            linea += ((matriz[indexF][indexC].length < 2) ? " " : " ") + matriz[indexF][indexC];
        }
    }
    console.log(linea);
}
//crear funcion numero aleatorio
function aleatorio(rango: number) : number {
    return Math.floor(Math.random() * rango);
}




