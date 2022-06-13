let edades: number[] = new Array(270);

function aleatoria(minimo: number, maximo: number) {
    return Math.floor((Math.random() * (maximo - minimo)) + minimo);
}

function rellenarEdad(arreglo: number[]) {
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i] = aleatoria(18, 41);
    }
}

function contarMenores(arreglo: number[]): number {
    let menores: number = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < 21) {
            menores++;
        }
    }
    return menores;
}

rellenarEdad(edades);
let menoresDe21: number = contarMenores(edades);
let mayoresDe21: number = 270 - contarMenores(edades);
console.log(`La cantidad de personas menores de 21 son: ${menoresDe21} \nLa cantidad de personas mayor o igual a 21 son: ${mayoresDe21}`);
