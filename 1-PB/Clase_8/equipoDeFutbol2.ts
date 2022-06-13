let edades: number[] = new Array(11);

function aleatoria(minimo: number, maximo: number): number {
    return Math.floor((Math.random() * (maximo - minimo)) + minimo);
}

function cargarEdadesRandom(arreglo: number[]) {
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i] = aleatoria(3, 8);
    }
}
cargarEdadesRandom(edades);

function promedioEdades(arreglo: number[]): number {
    let suma: number = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return Math.floor(suma / 11 * 100) / 100;
}

console.log(`Las edades son: ${edades} \nEl promedio de edades es: ${promedioEdades(edades)}`);