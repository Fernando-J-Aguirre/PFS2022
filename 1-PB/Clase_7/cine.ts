// function aleatoria(tope) {
//     return Math.floor(Math.random() * tope);
// }

let filas: number = 8;
let butacas: number = 5;


let cine: boolean[][] = crearMatriz(filas, butacas);

function crearMatriz(filas: number, butacas: number): boolean[][] {
    let matriz: boolean[][] = new Array(filas)
    for (let i = 0; i < filas; i++) {
        matriz[i] = new Array(butacas);
    }
    return matriz;
}

function cargarMatriz(matriz: boolean[][]) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] = false;
        }
    }
}

cargarMatriz(cine);

cine[2][1] = true;
cine[1][4] = true;
cine[7][3] = true;
cine[3][2] = true;


function contarDesocupadas(matriz: boolean[][]): number {
    let desocupadas: number = 0;
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            if (matriz[i][j] == false) {
                desocupadas++;
            }
        }
    }    
    return desocupadas;
}

function mostrarMatriz(matriz: boolean[][]) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(`Fila ${i + 1} - Butaca ${matriz[i]}`);        
    }
}

mostrarMatriz(cine);
console.log(`La cantidad de butacas desocupadas son: ${contarDesocupadas(cine)}, mientras que la cantidad total son: ${cine.length * butacas}`);





// let sala: boolean[] = new Array(10);


// function cargarButacas(arreglo: boolean[]) {
//     for (let i = 0; i < arreglo.length; i++) {
//         arreglo[i] = false;
//     }
// }

// cargarButacas(sala);
// sala[4] = true;
// sala[8] = true;
// sala[9] = true;

// function contarDesocupadas(arreglo: boolean[]): number {
//     let desocupadas: number = 0;
//     for (let i = 0; i < arreglo.length; i++) {
//         if (arreglo[i] == false) {
//             desocupadas++;
//         }
//     }
//     return desocupadas;
// }

// console.log(`La cantidad de butacas desocupadas son: ${contarDesocupadas(sala)}, mientras que la cantidad total son: ${sala.length}`);
